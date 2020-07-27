import glob
import re
import os
import shutil
import subprocess
import sys

from profiler import Profiler
from lxml import etree
import threading


class FileManager:
	package_manager = None
	files = []
	tmp_dir = ".crawler_tmp/"
	upload_dir = ".crawler_tmp/upload/"
	admin_translations = set()
	catalog_translations = set()
	common_translations = set()
	file_to_lint_index = 0
	do_php_lint = False
	do_xml_lint = False

	def __init__(self, package_manager):
		self.package_manager = package_manager
		self.profiler = Profiler()

	def collect_files(self):
		profiler_label = "Collect files"
		self.profiler.start(profiler_label)

		for base_dir, dirs, files in os.walk('.'):
			for f in files:
				file_name = os.path.join(base_dir, f)[2:]  # make path relative

				if not self.filter(file_name):
					continue

				self.files.append(file_name)

		self.collect_dependencies()
		print('Files count: {}'.format(len(self.files)))

		self.profiler.stop(profiler_label)

	def filter(self, file, explain = False ):
		"""Use 'Explain' to enforce strict filter mode - filter out only explicitly set items"""
		if not self.filter_package_files(file):
			return False

		result = self.filter_file(file)

		if result == True:
			return True
		elif result == False:
			if explain:
				print("By file name")
			return False

		result = self.filter_folder(file)

		if result == True:
			return True
		elif result == False:
			if explain:
				print("By folder name")
			return False

		result = self.filter_regex(file)

		if result == True:
			return True
		elif result == False:
			if explain:
				print("By regex")
			return False

		if explain:
			return True
		return False

	@staticmethod
	def filter_package_files(file):
		parts = file.split("/")

		if parts[0] in ["admin", "catalog", "image"]:
			return True

		if file.startswith("system/library/"):
			return True

		return False

	def filter_file(self, file):
		if file in self.package_manager.get_include_files():
			return True

		if file in self.package_manager.get_exclude_files():
			return False

		return None

	def filter_folder(self, file):
		is_include = self.is_include_folder(file)
		is_exclude = self.is_exclude_folder(file)

		if is_include:
			return not is_exclude
		elif is_exclude:
			return False

		return None

	def is_include_folder(self, file):
		file_folder = os.path.dirname(file)

		for folder in self.package_manager.get_include_folders():
			if folder.endswith("/*") and len(folder) - 2 <= len(file_folder):
				folder_part = folder[:-2]
				if file_folder.startswith(folder_part):
					return True
			else:
				if folder == file_folder:
					return True

		return None

	def is_exclude_folder(self, file):
		file_folder = os.path.dirname(file)

		for folder in self.package_manager.get_exclude_folders():
			if folder.endswith("/*") and len(folder) - 2 <= len(file_folder):
				folder_part = folder[:-2]
				if file_folder.startswith(folder_part):
					return True
			else:
				if folder == file_folder:
					return True

		return None

	def filter_regex(self, file):
		for r in self.package_manager.get_include_regex():
			if re.match(r, file):
				return True

		#  Useless
		# for r in self.package_manager.get_exclude_regex():
		# 	if re.match(r, file):
		# 		return True

		return None

	def collect_dependencies(self):
		file_with_dependencies = []

		for file1 in self.files:
			if file1.startswith("catalog/controller") or file1.startswith("admin/controller"):
				file_with_dependencies.append(file1)

		if not file_with_dependencies:
			print(self.error_color("No files with dependencies found"))
			return

		for dep_file in file_with_dependencies:
			count = 0

			with open(dep_file, 'r') as f:
				while count < 200:
					line = f.readline()

					if line.find("*/") != -1:  # end of comment block
						break

					match = re.match(r'.*?@source\s+([^\s]*)(\s|$)', line)

					if match:

						source = match.group(1)

						if source.endswith("*"):
							for base_dir, dirs, files in os.walk(source[:-1]):
								for file2 in files:
									file_name = os.path.join(base_dir, file2)
									self.add_source_file(file_name)
						else:
							self.add_source_file(source)

					count += 1

	def add_source_file(self, file):
		if os.path.isfile(file):
			if self.files.count(file) > 0:
				print(self.notice_color('Duplicated source {}'.format(file)))
			else:
				if self.filter(file, True ):
					self.files.append(file)
				else:
					print(self.notice_color('{} is filtered out'.format(file)))
		else:
			print(self.error_color('Source {} is not a file'.format(file)))

	@staticmethod
	def error_color(text):
		return "\033[0;31" + text + "\033[0m"

	@staticmethod
	def notice_color(text):
		return "\033[34m" + text + "\033[0m"

	def copty_to_tmp_dir(self):
		profiler_label = 'Copy OC3 files'
		self.profiler.start(profiler_label)

		self.clean_tmp_dir()

		for file in self.files:
			out_file = os.path.join(self.upload_dir, file)
			out_dir = os.path.dirname(out_file)

			if not os.path.isdir(out_dir):
				os.makedirs(out_dir)

			shutil.copy2(file, out_file)

		self.profiler.stop(profiler_label)

	def clean_tmp_dir(self):
		if os.path.isdir(self.tmp_dir):
			shutil.rmtree(self.tmp_dir)

	def make_archive(self, name):
		profiler_label = 'Zipping'
		self.profiler.start(profiler_label)
		shutil.make_archive(name, 'zip', self.tmp_dir)
		self.profiler.stop(profiler_label)

	def make_oc3(self):
		profiler_label = "Make OC3"
		self.profiler.start(profiler_label)
		self.collect_files()
		self.package_manager.set_saved_crc(self.calculate_crc())
		self.copty_to_tmp_dir()
		self.change_version()
		self.add_translations()
		self.do_ocmod()
		self.lint()
		package_name = self.package_manager.get_oc3_package_name()
		self.make_archive(package_name)
		self.profiler.stop(profiler_label)

	def make_oc2(self):
		profiler_label = "Make OC2"
		self.profiler.start(profiler_label)
		self.fix_oc2()
		package_name = self.package_manager.get_oc2_package_name()
		self.make_archive(package_name)
		self.profiler.stop(profiler_label)

	def calculate_crc(self):
		import zlib
		crc = 0
		profiler_label = "CRC calculation"
		self.profiler.start(profiler_label)

		for file in self.files:
			with open(file, "rb") as f:
				for line in f:
					crc = zlib.crc32(line, crc)

		self.profiler.stop(profiler_label)

		return '{:x}'.format(crc)

	def change_version(self):
		version = self.package_manager.get_version()

		for f1 in self.files:
			if not f1.endswith(".php"):
				continue

			file = os.path.join(self.upload_dir, f1)  # IMPORANT
			count = 0

			with open(file, 'r+') as f:
				while count < 100:
					line = f.readline()

					if not line:
						break

					if line.find("*/") > -1:
						break

					match = re.match(r'.*@version\s+(\d+\.\d+\.\d+).*$', line)

					if match:
						new_line = line.replace(match.group(1), version).rstrip("\n").rstrip(" ") + "\n"

						if len(new_line) > len(line):
							new_line = new_line.replace(" ", "")

							if len(new_line) > len(line):
								print('Could not update version at {}'.format(f1))
								print('"{}"'.format(line).replace("\n", 'n'))
								print('"{}"'.format(new_line).replace("\n", 'n'))
								print('')
								break

						elif len(new_line) < len(line):
							new_line = new_line.rstrip("\n") + (" " * (len(line) - len(new_line))) + "\n"

						f.seek(f.tell() - len(line), 0)
						f.write(new_line)
						break

					count += 1

	def add_translations(self):
		profiler_label = "Translations"
		self.profiler.start(profiler_label)
		self.collect_translations()
		self.write_admin_translations()
		self.profiler.stop(profiler_label)

	def collect_translations(self):
		for f1 in self.files:
			if not f1.endswith(".php") and not f1.endswith(".twig"):
				continue

			with open(f1, 'r') as f:
				for line in f:
					match = re.findall(r"__\(\s+([\'\"])(.*?)\1\s*[,)]", line)
					if match:
						for i in match:
							t = i[1]

							if not t or t == " ":
								continue

							if f1.startswith("admin/"):
								self.admin_translations.add(t)
							elif f1.startswith("catalog/"):
								self.catalog_translations.add(t)
							else:
								self.common_translations.add(t)

	def write_admin_translations(self):
		path = "admin/language/en-gb" + self.get_translation_path()
		translation_path = self.upload_dir + path
		dir_name = os.path.dirname(translation_path)

		if not os.path.isdir(dir_name):
			os.makedirs(dir_name)

		mandatory_translations = self.read_mandatory_translations(path)

		for t in self.common_translations:
			self.admin_translations.add(t)

		translations = sorted(self.admin_translations)

		with open(translation_path, 'w') as f:
			f.write("<?php\n")

			if not translations and not mandatory_translations:
				f.write("$_['heading_title'] = 'My Extension';\n")
			else:
				for t in mandatory_translations:
					f.write(t)
					match = re.search(r'\$_\[([\'\"])(.+?)\1\]', t)

					if not match:
						raise KeyError("Cannot detect key of mandatory translation")

					key = match.group(2)

					if key in translations:
						translations.remove(key)

				for t in translations:
					f.write("$_['{}'] = '{}';\n".format(t, t))

	def write_catalog_translations(self):
		path = "catalog/language/en-gb" + self.get_translation_path()
		translation_path = self.upload_dir + path
		dir_name = os.path.dirname(translation_path)

		if not os.path.isdir(dir_name):
			os.makedirs(dir_name)

		mandatory_translations = self.read_mandatory_translations(path)

		for t in self.common_translations:
			self.catalog_translations.add(t)

		translations = sorted(self.catalog_translations)

		with open(translation_path, 'w') as f:
			f.write("<?php\n")

			if translations or mandatory_translations:
				for t in mandatory_translations:
					f.write(t)

					match = re.fullmatch(r'\$_([\'\"])(.+?)\1', t)

					if not match:
						raise KeyError("Cannot detect key of mandatory translation")

					key = match.group(2)

					if key in translations:
						translations.remove(key)

				for t in translations:
					f.write("$_['{}'] = '{}';\n".format(t, t))

	def get_translation_path(self):
		search = "admin/controller"

		for f in self.files:
			if f.startswith(search):
				return f[len(search):]

		raise KeyError("Could not find translation path")

	def read_mandatory_translations(self, file):
		out = []

		if os.path.isfile(file):
			with open(file, 'r') as f:
				for line in f:
					if line.find("$_['heading_title']") != -1 or \
							line.find("$_['text_" + self.package_manager.get_code() + "']") != -1 or \
							line.find("$['caption_") != -1:
						out.append(line)

		return out

	def do_ocmod(self):
		profiler_label = "Modifications"
		ocmod_file = "system/" + self.package_manager.get_code() + ".ocmod.xml"
		self.profiler.start(profiler_label)

		if not os.path.isfile(ocmod_file):
			print(self.notice_color("OCMOD file missing"))
			return

		ocmod = etree.parse(ocmod_file).getroot()

		for node in ocmod:
			if node.tag == "version":
				node.text = self.package_manager.get_version()

		for operation in ocmod.xpath("//operation"):
			for node in operation:
				node.text = etree.CDATA(node.text)

		ocmod_text = etree.tostring(ocmod, pretty_print=True, xml_declaration=True, encoding="utf-8").decode("utf-8")

		with open(os.path.join(self.tmp_dir, "install.xml"), "w") as f:
			f.write(ocmod_text)

		with open(os.path.join(self.tmp_dir, os.path.basename(ocmod_file)), "w") as f:
			f.write(ocmod_text)

		self.do_vqmod(ocmod)
		self.profiler.stop(profiler_label)

	def do_vqmod(self, ocmod):
		vqmod = etree.Element("modification")

		for node in ocmod:
			if node.tag in ["link", "code", "version"]:
				item = etree.SubElement(vqmod, node.tag)
				item.text = node.text
			elif node.tag == "name":
				item = etree.SubElement(vqmod, "id")
				item.text = node.text
			elif node.tag == "file":
				vqmod.append(self.vqmod_path(node))

		vqmod_text = etree.tostring(vqmod, pretty_print=True, xml_declaration=True, encoding="utf-8").decode("utf-8")

		with open(os.path.join(self.tmp_dir, self.package_manager.get_code() + ".vqmod.xml"), "w") as f:
			f.write(vqmod_text)

	@staticmethod
	def vqmod_path(file_node):
		vqmod_file = etree.Element("file", name=file_node.get("path"))

		for operation_node in file_node:
			vqmod_operation = etree.SubElement(vqmod_file, operation_node.tag, operation_node.attrib)

			for node in operation_node:
				attr = node.attrib

				if node.tag == "add":
					del attr["position"]
				elif node.tag == "search" and operation_node.find("add").get("position") is not None:
					attr["position"] = operation_node.find("add").get("position")

				item = etree.SubElement(vqmod_operation, node.tag, attr)
				item.text = etree.CDATA(node.text)

		return vqmod_file

	def lint(self):
		profiler_label = "Lint"
		self.profiler.start(profiler_label)
		ret = subprocess.run(["which", "php"], stdout=subprocess.DEVNULL)

		if ret.returncode == 0:
			self.do_php_lint = True
		else:
			print(self.error_color("PHP module missing. PHP lint will be skipped"))

		ret = subprocess.run(["which", "xmllint"], stdout=subprocess.DEVNULL)

		if ret.returncode == 0:
			self.do_xml_lint = True
		else:
			print(self.error_color("XMLLint module missing. XML lint will be skipped"))

		self.file_to_lint_index = 0
		t1 = threading.Thread(target=self.do_lint, args=('test2.txt', 500000,), name="first")
		t2 = threading.Thread(target=self.do_lint, args=('test3.txt', 500000,), name="second")
		t3 = threading.Thread(target=self.do_lint, args=('test3.txt', 500000,), name="third")
		t4 = threading.Thread(target=self.do_lint, args=('test3.txt', 500000,), name="fifth")

		t1.start()
		t2.start()
		t3.start()
		t4.start()
		t1.join()
		t2.join()
		t3.join()
		t4.join()

		self.xml_lint()
		self.profiler.stop(profiler_label)

	def do_lint(self, a, b):
		while True:
			file = self.get_file_to_lint()

			if file is None:
				return

			if file.endswith(".php") and self.do_php_lint:
				self.php_lint(file)

	def get_file_to_lint(self):
		while self.file_to_lint_index < len(self.files):
			file = self.files[self.file_to_lint_index]

			if file.endswith(".php"):
				self.file_to_lint_index += 1
				return os.path.join(self.upload_dir, file)

			self.file_to_lint_index += 1

		return None

	@staticmethod
	def php_lint(file):
		ret = subprocess.run(["php", "-l", file], stdout=subprocess.DEVNULL)

		if 0 != ret.returncode:
			os._exit(1)

	def xml_lint(self):
		for file in glob.glob(os.path.join(self.tmp_dir, "*.xml")):
			ret = subprocess.run(["xmllint", file], stdout=subprocess.DEVNULL, check=False)

			if 0 != ret.returncode:
				print(self.error_color('XMLLint error in file: {}'.format(file)))
				sys.exit(1)

	def fix_oc2(self):
		to_delete = set()

		for base_dir, dirs, files in os.walk(self.upload_dir):
			for f in files:
				file = os.path.join(base_dir, f)

				if file.find("/en-gb/extension/") != -1:
					new_file = file.replace("/en-gb/extension/", "/english/")
					os.makedirs(os.path.dirname(new_file))
					shutil.move(file, new_file)
					to_delete.add(os.path.dirname(file))
				elif file.find("/extension/") != -1:
					new_file = file.replace("/extension/", "/")

					if not os.path.isdir(os.path.dirname(new_file)):
						os.makedirs(os.path.dirname(new_file))

					shutil.move(file, new_file)
					to_delete.add(os.path.dirname(file))

					if file.find("/controller/") != -1 or file.find("/model/") != -1:
						with open(new_file, "r+") as f0:
							count = 0

							while count < 10000:
								count += 1

								line = f0.readline()
								if line == -1:
									break

								match = re.search(r'class\s+(Controller|Model)Extension', line)

								if match:
									new_line = line.replace("Extension", "").strip("\n") + (" " * 9) + "\n"
									f0.seek(f0.tell() - len(line) - 1, 0)
									f0.write(new_line)
									break

						self.php_lint(new_file)

		for folder in sorted(to_delete, reverse=True):
			if os.path.isdir(folder):
				os.removedirs(folder)

	def clean_up(self):
		profiler_label = "Clen Up"
		self.profiler.start(profiler_label)
		subprocess.run(["rm", "-r", self.tmp_dir])
		self.profiler.stop(profiler_label)

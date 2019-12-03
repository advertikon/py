import re
import os
import shutil

from profiler import Profiler


class FileManager:
	package_manager = None
	files = []
	tmp_dir = ".crawler_tmp/"
	upload_dir = ".crawler_tmp/upload/"
	admin_translations = set()
	catalog_translations = set()
	common_translations = set()

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

		# print(self.files)
		self.collect_dependencies()
		print('Files count: {}'.format(len(self.files)))

		self.profiler.stop(profiler_label)

	def filter(self, file):
		if not self.filter_package_files(file):
			return False

		result = self.filter_file(file)

		if result == True:
			return True
		elif result == False:
			return False

		result = self.filter_folder(file)

		if result == True:
			return True
		elif result == False:
			return False

		result = self.filter_regex(file)

		if result == True:
			return True
		elif result == False:
			return False

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
		folder = os.path.dirname(file)

		if folder in self.package_manager.get_include_folders():
			return True

		if folder in self.package_manager.get_exclude_folders():
			return False

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
		file_with_dependencies = None
		count = 0

		for file1 in self.files:
			if file1.startswith("admin/controller"):
				file_with_dependencies = file1

		if file_with_dependencies is None:
			print(self.error_color("No files with dependencies found"))
			return

		with open(file_with_dependencies, 'r') as f:
			while count < 200:
				line = f.readline()

				if line.find("*/") != -1:  # end of comment block
					return

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
				self.files.append(file)
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
		package_name = self.package_manager.get_oc3_package_name()
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
				f.write("$_['heading_title'] = 'My Extension'")
			else:
				for t in mandatory_translations:
					f.write(t)

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
					if line.find("$_['heading_title']") != -1 or\
						line.find("$_['text_" + self.package_manager.get_code() + "']") != -1 or\
						line.find("$['caption_") != -1:
						out.append(line)

		return out

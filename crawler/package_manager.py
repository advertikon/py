import glob
import os
from lxml import etree


class PackageManager:
	"""package manager class"""
	package_file_name = ".crawler"
	packages = None
	module = None
	fields = {
		"code": "",
		"version": "",
		"include_file": "",
		"include_folder": "",
		"exclude_file": "",
		"exclude_folder": "",
		"include_regex": "",
		"exclude_regex": "",
		"crc": ""
	}

	include_files_list = None
	exclude_files_list = None
	include_folders_list = None
	exclude_folders_list = None
	include_regex_list = None
	exclude_regex_list = None
	is_extended = None
	code = None
	version = None
	crc = None  # package CRC
	saved_crc = None  # CRC read from file system
	crawler_dir = "/var/www/html/crawler/"
	oc3_package_text = "-OC-23-3-"
	oc2_package_text = "-OC-20-22-"

	def __init__(self):
		if not os.path.isfile(self.package_file_name):
			print("\033[0;31mNOT A CRAWLER DIRECTORY\033[0m")

	def import_all(self):
		if not os.path.isfile(self.package_file_name):
			self.create_package_file()

	def create_package_file(self):
		root = etree.Element('packages')
		self.save_xml(root)

	def save(self):
		self.save_xml(self.read_packages())

	def save_xml(self, xml):
		xml_string = etree.tostring(xml, pretty_print=True, xml_declaration=True, encoding="utf-8")

		try:
			with open(self.package_file_name, "wb") as xml_writer:
				xml_writer.write(xml_string)
		except IOError as e:
			print(e)

	def add_empty_package(self, name):
		root = self.read_packages()
		package = etree.SubElement(root, "package", extended="1")

		for k in self.fields:
			element = etree.SubElement(package, k)

			if "code" == k:
				element.text = name
			else:
				element.text = self.fields[k]

		self.save()

	def read_packages(self):
		if self.packages is not None:
			return self.packages

		if not os.path.isfile(self.package_file_name):
			self.create_package_file()

		parser = etree.XMLParser(remove_blank_text=True)
		self.packages = etree.parse(self.package_file_name, parser).getroot()

		return self.packages

	def import_packages(self):
		import pathlib

		print("Importing packages")

		for f_name in pathlib.Path(".").glob("*package"):
			print('Importing {}'.format(f_name))
			is_extended = str(f_name).find('#') == -1
			data = {}
			to_save = {}

			with open(str(f_name), "r") as f:
				content = f.read()

			for line in content.split("\n"):
				val = line.split(":")
				k = val[0].strip()

				if len(val) > 1:
					v = val[1].strip()
				else:
					v = ""

				data[k] = v

			if self.has_package(data.get('code'), is_extended):
				print('Package {} already exists'.format(data.get('code')))
				continue

			for k in self.fields:
				to_save[k] = data.get(k)

			self.add_package(to_save, is_extended)

		self.save()

	def has_package(self, name, is_extended):
		for p in self.read_packages():
			if p.xpath('code')[0].text == name and \
					((p.get('extended') == '1' and is_extended) or (p.get('extended') == '0' and not is_extended)):
				return True

		return False

	def add_package(self, data, is_extended):
		if is_extended:
			e = "1"
		else:
			e = "0"

		package = etree.SubElement(self.read_packages(), "package", extended=e)

		for k in data:
			item = etree.SubElement(package, k)
			item.text = data[k]

	def list_packages(self):
		count = 1

		for p in self.read_packages():
			if p.get('extended') == '1':
				extended = '(extended)'
			else:
				extended = ''

			print('{:2d} - {} {}'.format(count, p.xpath('code')[0].text, extended))
			count += 1

	def load_module(self, number):
		self.module = self.read_packages()[number-1]

	def get_include_files(self):
		if self.module is None:
			raise KeyError('No nodule is selected')

		if self.include_files_list is not None:
			return self.include_files_list

		nodes = self.module.xpath('include_file')
		self.include_files_list = []
		files = None

		if nodes:
			files = nodes[0].text

		if not files:
			return self.include_files_list

		for f in files.split(","):
			self.include_files_list.append( f.strip() )

		return self.include_files_list

	def get_exclude_files(self):
		if self.module is None:
			raise KeyError('No nodule is selected')

		if self.exclude_files_list is not None:
			return self.exclude_files_list

		nodes = self.module.xpath('exclude_file')
		self.exclude_files_list = []
		files = None

		if nodes:
			files = nodes[0].text

		if not files:
			return self.exclude_files_list

		for f in files.split(","):
			self.exclude_files_list.append( f.strip() )

		return self.exclude_files_list

	def get_include_folders(self):
		if self.module is None:
			raise KeyError('No nodule is selected')

		if self.include_folders_list is not None:
			return self.include_folders_list

		nodes = self.module.xpath('include_folder')
		self.include_folders_list = []
		files = None

		if nodes:
			files = nodes[0].text

		if not files:
			return self.include_folders_list

		for f in files.split(","):
			self.include_folders_list.append( f.strip().strip('/') )

		return self.include_folders_list

	def get_exclude_folders(self):
		if self.module is None:
			raise KeyError('No nodule is selected')

		if self.exclude_folders_list is not None:
			return self.exclude_folders_list

		nodes = self.module.xpath('exclude_folder')
		self.exclude_folders_list = []
		files = None

		if nodes:
			files = nodes[0].text

		if not files:
			return self.exclude_folders_list

		for f in files.split(","):
			self.exclude_folders_list.append( f.strip().strip('/') )

		return self.exclude_folders_list

	def get_include_regex(self):
		if self.module is None:
			raise KeyError('No nodule is selected')

		if self.include_regex_list is not None:
			return self.include_regex_list

		nodes = self.module.xpath('include_regex')
		self.include_regex_list = []
		files = None

		if nodes:
			files = nodes[0].text

		if not files:
			return self.include_regex_list

		for f in files.split(","):
			self.include_regex_list.append( f.strip() )

		return self.include_regex_list

	def get_exclude_regex(self):
		if self.module is None:
			raise KeyError('No nodule is selected')

		if self.exclude_regex_list is not None:
			return self.exclude_regex_list

		nodes = self.module.xpath('include_regex')
		self.exclude_regex_list = []
		files = None

		if nodes:
			files = nodes[0].text

		if not files:
			return self.exclude_regex_list

		for f in files.split(","):
			self.exclude_regex_list.append( f.strip() )

		return self.exclude_regex_list

	def get_is_extended(self):
		if self.module is None:
			raise KeyError('No nodule is selected')

		if self.is_extended is not None:
			return self.is_extended

		if self.module.get('extended') == '1':
			self.is_extended = True
		else:
			self.is_extended = False

		return self.is_extended

	def get_code(self):
		if self.module is None:
			raise KeyError('No nodule is selected')

		if self.code is not None:
			return self.code

		nodes = self.module.xpath('code')

		if nodes:
			self.code = nodes[0].text

		if not self.code:
			raise KeyError("Package does not contain code")

		return self.code

	def get_crc(self):
		if self.module is None:
			raise KeyError('No nodule is selected')

		if self.crc is not None:
			return self.crc

		nodes = self.module.xpath('crc')

		if nodes:
			self.crc = nodes[0].text
		else:
			self.crc = ""

		return self.crc

	def get_version(self):
		latest_version = None  # at config

		if self.module is None:
			raise KeyError('No nodule is selected')

		if self.version is not None:
			return self.version

		nodes = self.module.xpath('version')

		if nodes and nodes[0].text:
			latest_version = nodes[0].text
		else:
			latest_version = '0.0.1'

		saved_version = self.get_saved_version()  # at crawler folder

		if self.version_compare(saved_version, latest_version) > 0:
			self.version = self.increment_version(saved_version)  # disc wins
		else:
			if self.is_crc_equals():
				self.version = latest_version  # config wins, only if files are the same
			else:
				self.version = self.increment_version(latest_version)

		self.update_version()

		return self.version

	def get_oc3_package_name(self):
		base = ''

		if not self.get_is_extended():
			base = '-base'

		return '{}{}/{}{}v{}{}.ocmod'.format(
			self.crawler_dir,
			self.get_code(),
			self.get_code(),
			self.oc3_package_text,
			self.get_version(),
			base)

	def get_package_regex(self):
		base = ''
		package_text = self.oc3_package_text # Oc2 and OC3 should have the same version

		if not self.get_is_extended():
			base = '-base'

		return '{}{}v(\d+\.\d+\.\d+){}.ocmod\.zip'.format(
			self.get_code(),
			package_text,
			base)

	def get_package_dir(self):
		if self.module is None:
			raise KeyError('No nodule is selected')

		return self.crawler_dir + self.get_code() + "/"

	def get_saved_version(self):
		import glob
		import re
		versions = []

		for f in glob.glob(self.get_package_dir()+"*"):
			file = os.path.basename(f)
			reg = self.get_package_regex()
			match = re.match(reg, file)

			if match:
				versions.append(match.group(1))
			else:
				raise KeyError("Failed to detect version")

		if len(versions) > 0:
			return self.get_latest_version(versions)
		else:
			return ''

	@staticmethod
	def version_compare(v1, v2):
		major1, minor1, patch1 = v1.split(".")
		major2, minor2, patch2 = v2.split(".")

		major1 = int(major1)
		minor1 = int(minor1)
		patch1 = int(patch1)
		major2 = int(major2)
		minor2 = int(minor2)
		patch2 = int(patch2)

		if major1 != major2:
			return major1 - major2

		if minor1 != minor2:
			return minor1 - minor2

		return patch1 - patch2

	def get_latest_version(self, v_list):
		if len(v_list) == 0:
			raise KeyError('Versions list is empty')

		latest = v_list[0]

		for v in v_list:
			if self.version_compare(v, latest) > 0:
				latest = v

		return latest

	@staticmethod
	def increment_version(version):
		major, minor, patch = version.split(".")
		patch = int(patch) + 1

		return '{}.{}.{}'.format(major, minor, patch)

	def update_version(self):
		if self.module is None:
			raise KeyError('No nodule is selected')

		print('Package version: {}({})'.format(self.version, self.saved_crc))

		for node in self.module:
			if node.tag == "version":
				node.text = self.version

			if node.tag == "crc":
				node.text = self.saved_crc

	def is_crc_equals(self):
		if self.saved_crc is None:
			raise KeyError("CRC is not provided")

		crc1 = self.get_crc()
		crc2 = self.saved_crc
		res = crc1 == crc2

		return res

	def set_saved_crc(self, crc):
		self.saved_crc = crc

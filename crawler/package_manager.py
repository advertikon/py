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
	}

	include_files_list = None
	exclude_files_list = None
	include_folders_list = None
	exclude_folders_list = None
	include_regex_list = None
	exclude_regex_list = None

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
		print(xml_string)
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

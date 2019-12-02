import re
import os

from profiler import Profiler


class FileManager:
	package_manager = None
	files = []

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
		print('Count: {}'.format(len(self.files)))

		self.profiler.stop(profiler_label)

	def filter(self, file):
		if not self.filter_package_files(file):
			return False

		result = self.filter_file(file)

		if result == True:
			print('Filter in', file)
			return True
		elif result == False:
			print('Filter out', file)
			return False

		result = self.filter_folder(file)

		if result == True:
			print('Filter in', file)
			return True
		elif result == False:
			print('Filter out', file)
			return False

		result = self.filter_regex(file)

		if result == True:
			print('Filter in', file)
			return True
		elif result == False:
			print('Filter out', file)
			return False

		return False

	@staticmethod
	def filter_package_files(file):
		parts = file.split("/")

		if parts[0] in ["admin", "catalog", "image" ]:
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
			if re.match(r, file ):

				return True

		for r in self.package_manager.get_exclude_regex():
			if re.match(r, file):
				return True

		return None

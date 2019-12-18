from package_manager import PackageManager
from file_manager import FileManager
from profiler import Profiler
import sys


pm = PackageManager()

print("What to do:")
print("s - select a package and repack it")
print("n - create new empty package")
print("i - import old packages")

action = input("")

if action == "n":
	name = input("Package name: ")
	pm.add_empty_package(name)

elif action == "i":
	sure = input("Are you sure (y/n): ")

	if sure != 'y':
		sys.exit(0)

	pm.import_packages()

elif action == 's':
	pm.list_packages()
	number = input("Select a module number: ")

	try:
		n = int(number)
	except ValueError:
		print("Number expected")
		sys.exit(1)

	profiler = Profiler()
	profiler_label = "Process"
	profiler.start(profiler_label)
	pm.load_module(n)
	fm = FileManager(pm)
	fm.make_oc3()
	fm.make_oc2()
	pm.save()  # apply version and crc changes
	fm.clean_up()
	profiler.stop(profiler_label)

import time


class Profiler:
	stack = {}

	def start(self, label):
		self.stack[label] = time.time()

	def stop(self, label):
		last = list(self.stack.keys())[-1]

		if last != label:
			raise KeyError('label mismatch')

		start_time = self.stack[label]
		del self.stack[label]
		print('{}{:>20}: {:2.2f} sec'.format(' ' * len(self.stack), label, time.time() - start_time))

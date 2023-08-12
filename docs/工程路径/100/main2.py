import modules
print(dir(modules))
# ['__all__', '__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__path__', '__spec__', 'a']

# AttributeError: module 'modules' has no attribute 'module_1'
modules.module_1.hello()
modules.module_2.hello()
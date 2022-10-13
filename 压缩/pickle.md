normal use of pickle
```python
import pickle
import os

class Ren():
    def __init__(self, name):
        self.name = name

one_man = Ren('Roman')
instance_in = pickle.dumps(one_man)
instance_out = pickle.loads(instance_in)
print(f'name : {instance_out.name}')
```

malicious use of pickle:

```python
import pickle
import os

class Ren():
    def __init__(self, name):
        self.name = name
    def __reduce__(self):
        return (self.__class__, (os.system("winver")))

one_man = Ren('Roman')
instance_in = pickle.dumps(one_man)
instance_out = pickle.loads(instance_in)
print(f'name : {instance_out.name}')
```

so it is the reason to forbin the pickle package when u want to build a customer-safe software.
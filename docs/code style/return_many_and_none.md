origanl thought is a little ugly.
```python
def xxx():
    if condition:
        return None
    else:
        return v_a, v_b

result = xxx()
if result is not None:
    v_a = result[0]
    v_b = result[1]
```

now we integrate all to a class which use member varibles to store non-None return value and fuction return bool value.

```python
class C():
    def __init__(self):
        pass

    def is_xxx(self):
        # why firstly assign the value None? 
        # Because we ensure the excution of next time don't return the cached value of last time.
        self.v_a = None
        self.v_b = None

        if condition:
            return False
        else:
            self.v_a = 1
            self.v_b = 2
            return True

c = C()
if c.is_xxx():
    v_a = c.v_a
    v_b = c.v_b
```
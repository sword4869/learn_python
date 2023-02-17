# exception

## 捕获

`except xxx`的不是对象`except Excepton()`, 而是类名`except Exception`.

```python
### all exception
try:
    ...
except Exception as e:
    raise e

### some standard exception
try:
    ...
except AttributeError:
    ...

### custom exception
class MyException(Exception):
    def __init__:
        pass
```
## raise

```python
raise Exception('dddddddd')
```

## else_finally
```python
try：
    <语句块1>
except：
    <语句块2>
else:
    # Execute without exception
finally:
    # Execute with or without exception
```
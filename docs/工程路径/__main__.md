- [1. 没有安装](#1-没有安装)
  - [1.1. `python mytree`](#11-python-mytree)
  - [1.2. `python -m mytree`](#12-python--m-mytree)
- [2. 已安装](#2-已安装)


---

加入了`__main__.py` 后，我们就可以直接执行包名。`python -m mytree` 和 `python mytree`。

其实执行都是 `mytree/__main__.py`。

```
qqq
├── mytree
│   ├── __main__.py
│   ├── tree.py
```

```python
# __main__.py

import os
print('[__name__]', __name__)
print('[__package__]', __package__)
print('[file position]', (os.path.abspath(__file__)))
print("[I am being accessed from]", os.path.abspath(os.curdir))

# from .tree import main
# main()

import mytree.tree as tree
tree.main()

# import tree
# tree.main()
```


## 1. 没有安装

### 1.1. `python mytree`

不能使用相对导入:
- [ ] `__name__`是`__main__` 失效
- [ ] 不知道 `__package__`
- [x] 将包含`__main__.py`的目录`mytree`加入到 search path `sys.path` 中

```python
# from .tree import main
# ImportError: attempted relative import with no known parent package

# import mytree.tree as tree
# ModuleNotFoundError: No module named 'mytree'

import tree   # 无关working directory
```

```bash
# from .tree import main
qqq $ python mytree
[__name__] __main__
[__package__]
[file position] D:\git\localToolkit\linux_scripts\qqq\mytree\__main__.py
[I am being accessed from] D:\git\localToolkit\linux_scripts\qqq
Traceback (most recent call last):
  File "D:\miniconda\envs\ldm\lib\runpy.py", line 196, in _run_module_as_main
    return _run_code(code, main_globals, None,
  File "D:\miniconda\envs\ldm\lib\runpy.py", line 86, in _run_code
    exec(code, run_globals)
  File "D:\git\localToolkit\linux_scripts\qqq\mytree\__main__.py", line 7, in <module>
    from .tree import main
ImportError: attempted relative import with no known parent package
```
执行路径哪都行：
```bash
# import tree   # 在mytree之外的路径也可以。
linux_scripts $ python qqq/mytree
[__name__] __main__
[__package__]
[file position] D:\git\localToolkit\linux_scripts\qqq\mytree\__main__.py
[I am being accessed from] D:\git\localToolkit\linux_scripts
```

### 1.2. `python -m mytree`

能使用相对导入:
- [ ] `__name__`是`__main__` 失效
- [x]  知道 `__package__`
- [ ] 不会将包含`__main__.py`的目录`mytree`加入到 search path `sys.path` 中


```python
from .tree import main

import mytree.tree as tree

# import tree
# ModuleNotFoundError: No module named 'mytree'
```
只能在 `mytree` 的父目录下执行：
```bash
# import tree 
qqq $ python -m mytree
[__name__] __main__
[__package__] mytree
[file position] D:\git\localToolkit\linux_scripts\qqq\mytree\__main__.py
[I am being accessed from] D:\git\localToolkit\linux_scripts\qqq
Traceback (most recent call last):
  File "D:\miniconda\envs\ldm\lib\runpy.py", line 196, in _run_module_as_main
    return _run_code(code, main_globals, None,
  File "D:\miniconda\envs\ldm\lib\runpy.py", line 86, in _run_code
    exec(code, run_globals)
  File "D:\git\localToolkit\linux_scripts\qqq\mytree\__main__.py", line 8, in <module>
    import tree as tree
ModuleNotFoundError: No module named 'tree'
```

## 2. 已安装

还是 `python -m mytree` 的情况。但是由于已安装到`site-packages`中，所以 search path 是找得到的，就**不局限于执行的工作路径**。


另外，还有一种情况支持`import mytree`————切换到包的目录下。因为"`PYTHONPATH`: 默认值是当前工作目录 working directory"，所以能找到。

```bash
# pip install . 不行,找不到
# 因为development安装，下面进入到mytree文件夹下才行。
$ pip install -e .

# import mytree
mytree $python -m mytree  
[__name__] __main__
[__package__] mytree
[file position] d:\git\localtoolkit\linux_scripts\qqq\mytree\__main__.py
[I am being accessed from] D:\git\localToolkit\linux_scripts\qqq\mytree
```

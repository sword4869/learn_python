- [1. References](#1-references)
- [2. Intro](#2-intro)
  - [2.1. 包、模块、库](#21-包模块库)
  - [2.2. systax](#22-systax)
- [3. Errors](#3-errors)
- [4. `__init__.py`](#4-__init__py)
  - [4.1. `from package import *`](#41-from-package-import-)
  - [4.2. import package](#42-import-package)
  - [4.3. object in `__init__`](#43-object-in-__init__)
  - [4.4. The dir() Function¶](#44-the-dir-function)
- [5. 相对导入](#5-相对导入)
  - [5.1. 几个dot基于`__name__`](#51-几个dot基于__name__)
  - [5.2. main module](#52-main-module)
  - [5.3. 总结`__name__`](#53-总结__name__)
  - [5.4. 关系](#54-关系)
- [6. search path](#6-search-path)
  - [6.1. 查找顺序](#61-查找顺序)
  - [6.2. 三种结构](#62-三种结构)


---


## 1. References

https://realpython.com/absolute-vs-relative-python-imports/#:~:text=Relative%20Imports%20A%20relative%20import%20specifies%20the%20resource,3%2C%20so%20I%20won%E2%80%99t%20be%20covering%20them%20here.

https://zhuanlan.zhihu.com/p/55682016



---

## 2. Intro

### 2.1. 包、模块、库

- 模块Module就是单个的py文件。

- 包Package是一个文件夹，其内包含多个模块，即包含多个py文件。以及包套子包。

- 在python中，库Library就是在说包。

### 2.2. systax

- 导入package 或者 module
    ```python
    import package/module
    from package import subpackage
    from package import module
    ```
    [【2】](./2/src/mod1/mod1_main.py)

- object（class/function/variable）只有from，没有import

    ```python
    from module import object
    # 没有
    # from <package> import <module>.<object>
    ```
    [【1】](./1/main.py)
    [【4】](./4/src/mod1/mod1_main.py)


- import只能导入package/module, 不能object
    ```python
    import module

    # 需要包含__init__.py，否则只是空壳子
    import package

    # 没有
    # import <package>.<module>.<object>
    ```
    [【3】](./3/src/mod1/mod1_main.py)
    [【5】](./5/main.py)
    [【101】](./101/main.py)
    [【6】](./6/main.py)


- 相对引用：只有from，没有import
    ```python
    from . import xxx
    ```
    [【2】](./2/src/mod1/mod1_main.py)



## 3. Errors


- `FileNotFoundError`
    **working directory**：当前执行这条import语句的脚本所在的路径。影响fopen的文件`"./1.txt"`。
    ```python
    # 所以对于包关系来说，在哪里执行都可以
    project$ python main.py
    home$ python FacePic/project/main.py
    ```
    [【1】](./1/src/mod2/mod2_main.py)
    - `img_path = '../deepwater.jpg'`。working directory必须是在`1`下
    - `img_path = '工程路径/deepwater.jpg'`，working directory必须是在`docs`下
    - `img_path = os.path.join(sys.argv[0], '../..', r'deepwater.jpg')`根据`main.py`定位, 所以随便working directory.
    - `img_path = os.path.join(__file__, '../../../..', r'deepwater.jpg')`根据`mod2_main.py`自身定位, 所以随便working directory.
- `ModuleNotFoundError`
  
    **search path**：`sys.path`。影响模块导入。

    - 创新用法了属于是，e.g. `import <package>.<module>.<object>`, `import src.mod1.mod1_main.call`

- `AttributeError`
    
    `sys.path.append`后，`import p2`以为是导入了包，可以调用`p2.module.object`，但其实python只认为这样是导入module。所以，只能`import p2.module`。除此，还能，`from p2 import module`，`from p2.module import object`。
    1. Having an **incorrect import statement**. (use `print(dir(your_module)`) to see what you imported)
    2. Having a **circular dependency** between files, e.g. file A imports file B and vice versa.
    3. Having a local module with the **same name** as an imported module.
    4. Trying to access an attribute that **doesn't exist** on the module.

- `SyntaxError`：创新用法了属于是
    - import使用相对路径，e.g. `import ..mod2.mod2_main as mod2_main`
    - `from <package> import <module>.<object>`, `from ..mod2 import mod2_main.show`
    - `import <package>.<module>.<object>`

- `ValueError: attempted relative import beyond top-level package`
    相对导入的点超过了`__name__`的点。

- `ImportError: attempted relative import with no known parent package`
    main module里使用相对导入，`from .src.mod1.mod1_main import call`, `from . import src`

## 4. `__init__.py`

在python3.3后，包内就不用创建个`__init__.py`文件来标识此为包了，标识为包的作用不用了。

但是还有别的用处：package下多个module的导入。


```python
├── main.py
└── modules
    ├── __init__.py
    ├── module_1.py
    └── module_2.py
```

### 4.1. `from package import *`

[【100】](./100/main.py)

```python
# main.py

from modules import module_1    # 单个文件没有问题，也不需要 __init__.py
from modules import *           # 多个文件出错，什么都没有导入，这点可以通过dir()来看出
```
If `__all__` is not defined, the statement `from modules import *` does not import all submodules from the package `modules` into the current namespace.

这时候需要你创建`__init__.py`，定义一个列表`__all__ = ["module_name_1", "module_name_2"]`.

PS: `__all__` is taken to be the list of module names that should be imported when `from modules import *` is encountered. 对于 `import package`， `__all__` 是无效的！

### 4.2. import package
[【5】](./5/main.py)
[【101】](./101/modules/__init__.py)

对于没有`__init__.py`处理的`import package`，什么也没有导入
```python
# module_1, module_2实际上没有被导入
import modules
print(dir(modules))
# ['__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__path__', '__spec__', 'a']
```

需要在`__init__.py`导入`module_1, module_2`


### 4.3. object in `__init__`

[【101】](./101/modules/__init__.py)
```python
import modules
print(modules.a)
```
```python
from modules import a
print(a)
```
Remember that importing a package essentially imports the package’s `__init__.py` file as a module.


### 4.4. The dir() Function¶

The built-in function `dir()` is used to find out which names a module defines.

```python
from src import mod2
print(dir(mod2))
# ['__doc__', '__file__', '__loader__', '__name__', '__package__', '__path__', '__spec__', 'mod2_main']
```

## 5. 相对导入

### 5.1. 几个dot基于`__name__`

Note that relative imports are based on **the `__name__` of the current module**. 

具体方法是几个dot`.`就去掉`__name__`的几个点：
- 一个点：同package下的module
    ```python
    # 100/modules/module_1.py

    print(__name__)
    # modules.module_1

    from .module_2 import hello as h
    from . import module_2 
    # 'modules' + 'module_2' = 'modules.module_2'
    ```
- 两个点：兄弟package
    ```python
    # 1/src/mod1/mod1_main.py

    print(__name__)
    # src.mod1.mod1_main

    from ..mod2.mod2_main import show
    # 'src' + 'mod2.mod2_main' = 'src.mod2.mod2_main'
    ```
- 还能堆叠点的数量，只要不至于`__name__`中的点不够，否则出现`ValueError: attempted relative import beyond top-level package`

### 5.2. main module

The name `__name__` of your main module( intended for use as the main module of a Python application) is `__main__`,  you cannot do **relative imports**, must always use **absolute imports**.
Because `__main__` has no dots, Therefore you cannot use `from . import` statements inside it. 

```python
# main.py

# 这都是错的
# from ..utils import xxx
# from . import *

# 只能使用绝对路径
from src import xxx
```

[【4】](./4/main.py)

### 5.3. 总结`__name__`

When a file is loaded, it is given a name (which is stored in its `__name__` attribute).

- execute it directly
    `python main.py`, loaded as the **top-level script** ,its name is `__main__`.
    
- `import` statement
    `__name__`就是`import` statement只关于`package`或`module`(如果有object，那么去掉object)的绝对导入形式，比如，
    - `from src.mod1.mod1_main import call`，那么在`mod1_main`中`__name__`就是`src.mod1.mod1_main`, 
    - `from src import mod1`中`mod1.__name__`就是`src.mod1`
    - `from ..mod2 import mod2_main`中`mod2_main.__name__`就是`src.mod2.mod2_main`.

    
- When a module is loaded from shell command line, the module is run as the top-level script, `python -m package.subpackage1.moduleX`. 
  The `-m` tells Python to load it as a module, not as the top-level script.
    it adds the **current directory** to `sys.path`
    relative imports are resolved using `__package__` rather than `__name__` in this case.

PS：查询方式
要么在被导入的module
```python
# module.py
print(__name__)
```
要么在导入时
```python
# main.py
import module
print(module.__name__)
```
都是同一个结果

### 5.4. 关系

- main module 使用绝对导入来导入其他module
- 被导入的其他module根据 main module 的 import statement 来得到 `__name__`，相对导入又根据此`__name__`找到对应的module
- 其他module也可以像main module一样使用绝对导入，这个绝对导入的import statement 对不对取决于search path找不找得到。

## 6. search path

### 6.1. 查找顺序

面对`import abc`, python 会按这样的顺序查找：
1. `sys.module`. 
    This is a cache of all modules that have been previously imported.
2. standard library / built-in modules. 
    These module names are listed in `sys.builtin_module_names`.
3. `sys.path` (**search path**)
    It is a list of directories.
    When importing the package, Python searches through **search path** looking for the package subdirectory. 搜索search path的每个path内的每个子文件夹为package、每个py文件为module。
    - Python adds **the directory containing the input script** to `sys.path`. e.g. for `python /path/to/script.py`, add `/path/to` to `sys.path`. This is searched first.
        e.g. 
        ```python|
        ├── main.py
        └── modules
            ├── submodules
            |    └── moduleX.py
            ├── module_1.py
            ├── module_2.py
            └── main.py
        ```
        `python modules/main.py`, `import submodules.moduleX`, not `import modules.submodules.moduleX`.
    - `PYTHONPATH` (a list of directory names, with the same syntax as the shell variable `PATH`).
    - 第三方包 (by convention including a `site-packages` directory).

**shadowing the built-in module with our local module**. 因为built-in module 在第二步被导入，第三步又导入重名的local module，local module覆盖了built-in module.


### 6.2. 三种结构
> direct

```python
├── main.py
├── module_1.py
└── module_2.py
```
直接就是`import module_1`


> main module-modules
```python
├── main.py
└── modules
    ├── module_1.py
    └── module_2.py
```
`from modules import module_1`

> cross-module

[【102】](./102/modulesA/main.py)

```python
pro
├── modulesA
|   └── main.py
└── modulesB
    ├── module_1.py
    └── module_2.py
```
`__file__`. In Python 3.8 and earlier, this path is either absolute or relative (depending on how the script was passed to the python interpreter), while in Python 3.9 and later, it is always an absolute path.
```python
import sys
import os

# 这个插入的python main.py的working directory, 不对
# sys.path.insert(0, os.path.abspath('..'))

# 要插入是main.py的位置，sys.path中加入相对位置就行
sys.path.insert(0, os.path.join(__file__, '../..'))
# 另一种写法，绝对位置
# sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from modulesB import module_1
from modulesB import module_2
```


1. `$ python ~/pro/modulesA/main.py`
2. 我们想要`from modulesB import module_1`、`from modulesB import module_2`，即某个文件夹下包含`modulesB`文件夹，那么需要把`~/pro`加入到search path中。
3. `__file__ = ~/pro/modulesA/main.py`，那么需要去掉后面两个, `../..`

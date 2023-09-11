- [1. Architecture](#1-architecture)
  - [1.1. `__init__.py` 决定是否必须 `-e`](#11-__init__py-决定是否必须--e)
- [2. Commands](#2-commands)
  - [2.1. install in “development mode”](#21-install-in-development-mode)
  - [2.2. build](#22-build)
    - [2.2.1. build a wheel](#221-build-a-wheel)
    - [2.2.2. build source distribution (sdist)](#222-build-source-distribution-sdist)
- [3. Attributes](#3-attributes)
  - [3.1. 包名](#31-包名)
  - [3.2. 包位置](#32-包位置)
  - [3.3. 包信息](#33-包信息)
  - [3.4. python版本](#34-python版本)
  - [3.5. 依赖](#35-依赖)
  - [3.6. 可执行脚本](#36-可执行脚本)
- [4. data](#4-data)


---

## 1. Architecture

```bash
project_root_directory
├── setup.py        # and/or setup.cfg, pyproject.toml
└── module_name
    ├── m.py        # 简单的hello()函数
    └── __init__.py
```

### 1.1. `__init__.py` 决定是否必须 `-e`

当没有`__init__.py` 文件是，会出现一个奇特的现象：
- `pip install git+https://github.com/sword4869/mytree.git` 会出现 *ModuleNotFoundError*，
- 而 `pip install -e git+https://github.com/sword4869/mytree.git#egg=mytree` 则不会。

```
>>> import mytree
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ModuleNotFoundError: No module named 'mytree'
```

其实是因为前者安装到`\envs\nerf\Lib\site-packages`中少了东西。

```
\envs\nerf\Lib\site-packages`
├── mytree                      # 这个文件夹因为没有 __init__.py 而没有
│   ├── __init__.py
│   ├── tree.py
│   └── __pycache__
├── mytree-0.0.1.dist-info
│   ├── INSTALLER
│   ├── LICENSE
│   ├── METADATA
│   ├── RECORD
│   ├── REQUESTED
│   ├── WHEEL
│   ├── direct_url.json
│   ├── entry_points.txt
│   └── top_level.txt
```

这下不用 `-e` 和 用 `-e` 都行。


## 2. Commands

> `python setup.py install` 将被 `pip install` 取代
```bash
python setup.py install
pip install .
```

| Old command | New command |
| --- | --- |
| `python setup.py install` | `pip install` |
| `python setup.py develop` | `pip install -e` |
| `python setup.py sdist` | `python -m build` (with build) |
| `python setup.py bdist_wheel` | `python -m build` (with build) |
| `python setup.py test` | `pytest` (usually via tox or nox) |
| `python setup.py upload` | `twine upload` (with twine) |
| `python setup.py check` | `twine check` (this doesn't do all the same checks but it's a start) |
| Custom commands | tox and nox environments |

### 2.1. install in “development mode”

`pip install` 将包复制一份安装到`envs\test\Lib\site-packages`中。
```bash
$ pip list
Package         Version
--------------- -------
mytree          0.0.1
```

`pip install -e` (`-e` is short for `--editabla`， 代表  “editable/development” mode)：不复制包，直接定位到当前工程处。
```bash
$ pip list
Package        Version Editable project location
-------------- ------- ----------------------------------------
ConfigArgParse 1.7
mytree         0.0.1   d:\git\localtoolkit\linux_scripts\mytree
```

区别就是，当安装为可编辑`pip install -e`时，可以在不重新安装的情况下就地编辑项目，对Python源文件的更改将在下次启动解释器过程时反映出来。而`pip install`编辑后需要重新安装。


### 2.2. build

If you run `build` without `--wheel` or `--sdist`, it will build both files for you.

#### 2.2.1. build a wheel
二进制文件

```bash
# 安装build包
pip install build
```

```bash
# 使用build包打包
python -m build --wheel .
```


#### 2.2.2. build source distribution (sdist)

- 包含源码
- 是一个压缩包`*.tar.gz`


```bash
python -m build --wheel 
```

默认包含在 sdist 中的文件:
-   all Python source files implied by the `py_modules` and `packages`
    
-   all C source files mentioned in the `ext_modules` or `libraries`
    
-   scripts specified by the `scripts`
    
-   all files specified by the `package_data` and `data_files` 
    
-   the file specified by the `license_file` option in `setup.cfg` (setuptools 40.8.0+), all files specified by the `license_files` option in `setup.cfg` (setuptools 42.0.0+)
    
-   all files matching the pattern `test/test*.py`
    
-   `setup.py` (or whatever you called your setup script)
-   `setup.cfg`
-   `pyproject.toml` (setuptools 43.0.0+)
    
-   `README`, `README.txt`, `README.rst` (Python 3.7+ or setuptools 0.6.27+), `README.md` (setuptools 36.4.0+)
    
-   `MANIFEST.in`


Default files can even be removed from the sdist with `MANIFEST.in`.

> `MANIFEST.in`


您可能会发现自己想要在源发行版中包含额外的文件，例如`contributors`文件、`docs/`文件夹，或用于测试目的的数据文件目录`data/`。

方法是：添加和删除文件是通过在项目根目录下写入`MANIFEST.in`文件来完成的。



| 命令（文件必须以项目根目录为相对路径给出, 用`/`分隔） | 描述 |
| --- | --- |
| `include pat1 pat2 ...` | 添加文件 |
| `exclude pat1 pat2 ...` | 删除文件 |
| `recursive-include dir-pattern pat1 pat2 ...` | 添加`dir-pattern`目录下的文件 |
| `recursive-exclude dir-pattern pat1 pat2 ...` | 删除`dir-pattern`目录下的文件 |
| `global-include pat1 pat2 ...` | 添加所有在源代码树中任何位置并且与任何列出的模式匹配的文件 |
| `global-exclude pat1 pat2 ...` | 删除所有在源代码树中任何位置并且与任何列出的模式匹配的文件 |
| `graft dir-pattern` | 添加所有在`dir-pattern`目录下的文件 |
| `prune dir-pattern` | 删除所有在`dir-pattern`目录下的文件 |

`graft example*` will include a directory named `examples` in the project root but will not include `docs/examples/`.

## 3. Attributes
```python
from setuptools import setup, find_packages

setup()
```
[Attributes](https://packaging.python.org/en/latest/guides/distributing-packages-using-setuptools/#entry-points)

### 3.1. 包名
-  `name`(可以包含`_`,`-`) 是在`pip list`中显示的包名
-  `module_name`(不可以包含`-`)是在`python -m module_name`和`import module_name`的包名

### 3.2. 包位置
-   `packages`是应包含在分发包的列表。我们可以使用 `find_packages()` 自动发现所有包和子包，而不是手动列出每个包。在这种情况下，包列表将是`module_name`，因为它是唯一存在的包。

```python
setup(
    ...
    packages=find_packages(),
    ...
)
```

### 3.3. 包信息

-   `version` 是包版本
-   `author`并`author_email`用于识别包的作者。
-   `description` 是一个简短的，一句话的包的总结。
-   `long_description`是包的详细说明。这显示在Python Package Index的包详细信息包中。`long_description_content_type`告诉索引什么类型的标记用于长描述。
-   `url`是项目主页的URL。对于许多项目，这只是一个指向GitHub，GitLab，Bitbucket或类似代码托管服务的链接。
-   `classifiers`告诉pypi的信息（发布包用的）

```python
setup(
    ...
    version="0.0.1",
    author="OpenAI",
    description="Stability Generative Models",
    long_description=open("README.md", "r", encoding="utf-8").read(),
    long_description_content_type="text/markdown",
    url="https://github.com/Stability-AI/generative-models",
    ...
)
```
### 3.4. python版本
```python
    python_requires=">=3.8",
```

### 3.5. 依赖
-   `install_requires`：打包时自动下载这些依赖包。


```python
    install_requires=[
        'torch',
        'numpy',
        'tqdm',
    ],
```

### 3.6. 可执行脚本

比`python -m module_name`（写了`__main__.py`）还要简洁：直接输入`your_exe_name`。

```python
    entry_points={
        'console_scripts': [
            'your_exe_name = module_name.m:hello',
        ]
    }
```
`'your_exe_name = module_name.m:main'`的syntax：
- `your_exe_name`:
  - 安装后会生成一个可执行文件：`D:\miniconda\envs\test\Scripts\your_exe_name.exe`
  - 所以可以直接在命令行执行
    ```bash
    任意位置 $your_exe_name
    hello, this is the print text of hello() function in module_name/m.py
    ```
- `module_name.m:hello` 相当于 `from module_name.m import hello`
  `module_name:hello_init` 相当于 `from module_name import hello_init`(定义在`__init__.py`中)


PS: 除了命令行脚本 `console_scripts`，还有GUI脚本 [gui_scripts](https://setuptools.pypa.io/en/latest/userguide/entry_point.html#gui-scripts)


---

```python
import pkg_resources
setup(
    packages=find_packages(exclude=["tests*"]),
    py_modules=["clip"],
    # <<<
    install_requires=[
        str(r)
        for r in pkg_resources.parse_requirements(
            open(os.path.join(os.path.dirname(__file__), "requirements.txt"))
        )
    ],
    # <<<
    extras_require={'dev': ['pytest']},
    # <<<
    include_package_data=True,
)
```

## 4. data

https://docs.python.org/3/distutils/setupscript.html#distutils-installing-scripts

https://setuptools.pypa.io/en/latest/userguide/datafiles.html

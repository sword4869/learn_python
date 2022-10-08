- [1. venv & virtualenv](#1-venv--virtualenv)
- [2. venv command](#2-venv-command)
  - [2.1. create](#21-create)
  - [2.2. activate & deactivate](#22-activate--deactivate)
  - [2.3. example](#23-example)
- [3. virtualenv command](#3-virtualenv-command)
  - [3.1. install](#31-install)
  - [3.2. create](#32-create)
  - [3.3. activate & deactivate](#33-activate--deactivate)
- [4. other](#4-other)
  - [4.1. pip](#41-pip)
  - [4.2. 在脚本中指定编译器](#42-在脚本中指定编译器)

---
# 1. venv & virtualenv

venv:
- Since Python 3.3, `venv` has been integrated into the standard library. So you don't need to install venv module.
- 只能在3.3版本以后，2.x用不了


virtualenv:
- 同时支持 python2 和 python3


venv & virtualenv:
- `venv` is a subset of `virtualenv`. So if you want to use full capacities, you need to install `virtualenv`.
- venv和virtualenv创建虚拟环境，只能使用当前系统已经安装好的python，**不能指定系统不存在的python环境版本**
- broken system python
virtual environments are mere shells, that contain little within themselves, and borrow most from the system python (this is what you installed, when you installed python itself). This does mean that if you upgrade your system python your virtual environments might break, so watch out. The upside of this, referring to the system python, is that creating virtual environments can be fast.
> question: is this like docker? System python and virtual python is a stack architecture.
> Q1: If you download a package in your virtual environment, when you deleted it, is there still hava a package quick load in other environment using the same package. What's more, when you don't delete it and use it in other virtual environment, what happened? 
> Q2: This broken problem, could it happen to the conda?

# 2. venv command
## 2.1. create

```bash
# ENVIRONMENT contain path, such as 
# tutorial(current directory),
# ~/hello-world/tutorial(non-current directory)
$ python3.8 -m venv ENVIRONMENT
```
containing a copy of the Python interpreter, `python3.8`.


A common directory location for a virtual environment `ENVIRONMENT` is `.venv`. When you download modules, the location of installed modules is here.

The `venv` module is often in **project** directory, every project configurates a `.venv` virtual environment. When you want to delete the project, you also delete this virtual environment. `rm -rf ENVIRONMENT`

## 2.2. activate & deactivate

```bash
$ source ENVIRONMENT/bin/activate

$ deactivate
```

Then, all package installed will be in directory `ENVIRONMENT`.
## 2.3. example

```bash
# get into project directory
$ cd ~/PROJECT

# create a python virtual environment, named hello
$ python3 -m venv .venv

# activate it
$ source .venv/bin/activate

# please upgrade before the installation of any package.
$ pip install --upgrade pip
```

# 3. virtualenv command
## 3.1. install

```bash
$ pip install virtualenv

$ virtualenv --version
virtualenv 20.16.5 from /home/sword/.local/lib/python3.8/site-packages/virtualenv/__init__.py
```


## 3.2. create

```bash
# virtualenv ENVIRONMENT
$ virtualenv .venv
```
> 继承包

virtualenv从版本20开始，默认就是`--no-site-packages`了，默认就是不继承父环境的包。创建的虚拟环境是一个不带任何第三方包的“干净”的Python运行环境。

如果有教程告诉你，`--no-site-packages`选择不继承父环境的包，这个命令已经废弃了。

那么，如果你现在想要继承父环境的包，怎么办？使用`--system-site-packages`

> python不同版本

```bash
# 指定路径
$ virtualenv --python=/usr/bin/python3.8 .venv

# 自动寻找系统上已安装的python3.8位置
$ virtualenv --python=3.8 .venv

# 不能安没有的python
$ virtualenv --python=3.9 .venv
RuntimeError: failed to find interpreter for Builtin discover of python_spec='3.9'
```
## 3.3. activate & deactivate

```bash
$ source ENVIRONMENT/bin/activate

$ deactivate
```
# 4. other



## 4.1. pip 
`pip install --user package_name`

使用`--user`仅安装在当前用户的路径下，其他用户看不见；虚拟环境中无需使用该配置，因为用户目录在该环境下不可见。

## 4.2. 在脚本中指定编译器


```python
#!/usr/bin/env python
```
这种写法在你机器上安装了多个版本的python的时候有意义，这样声明的时候，会去取你机器的 PATH 中指定的第一个 python 来执行你的脚本。如果这时候你又配置了虚拟环境的话，那么这样写可以保证脚本会使用你虚拟环境中的 python 来执行。

而不是`#!/usr/bin/python`，写死了，就是要 `/usr/bin/python`的 python 来执行你的脚本。
- [1. venv & virtualenv](#1-venv--virtualenv)
- [2. command](#2-command)
  - [2.1. create](#21-create)
  - [2.2. activate](#22-activate)
  - [2.3. example](#23-example)
- [3. summary](#3-summary)
  - [3.1. other](#31-other)
  - [3.2. pip](#32-pip)
  - [第一行](#第一行)

---
# 1. venv & virtualenv

Since Python 3.3, `venv` has been integrated into the standard library. So you don't need to install venv module.
But `venv` is a subset of `virtualenv`. So if you want to use full capacities, you need to install `virtualenv`.

```bash
$ pip install virtualenv
```


# 2. command
## 2.1. create

```bash
# ENVIRONMENT contain path, such as 
# tutorial(current directory),
# ~/hello-world/tutorial(non-current directory)
$ python3.8 -m venv ENVIRONMENT
```
containing a copy of the Python interpreter.


A common directory location for a virtual environment is `.venv.`. When you download modules, the location of installed modules is here.

The `/venv` is often in project directory, every project configurates a `.venv` virtual environment. When you want to delete the project, you also delete this virtual environment.

## 2.2. activate

```bash
$ source ENVIRONMENT/bin/activate
```

Then, all package installed will be in directory `ENVIRONMENT`.
## 2.3. example

```bash
# get into project directory
$ cd ~/PROJECT

# create a python virtual environment, named hello
$ python3 -m venv hello

# activate it
$ source hello/bin/activate

# please upgrade before installation
$ pip install --upgrade pip
```
# 3. summary

## 3.1. other

virtual environments are mere shells, that contain little within themselves, and borrow most from the system python (this is what you installed, when you installed python itself). This does mean that if you upgrade your system python your virtual environments might break, so watch out. The upside of this, referring to the system python, is that creating virtual environments can be fast.


> question: is this like docker? System python and virtual python is a stack architecture.
> Q1: If you download a package in your virtual environment, when you deleted it, is there still hava a package quick load in other environment using the same package. What's more, when you don't delete it and use it in other virtual environment, what happened? 
> Q2: This broken problem, could it happen to the conda?



## 3.2. pip 
`pip install --user package_name`

使用`--user`仅安装在当前用户的路径下，其他用户看不见；虚拟环境中无需使用该配置，因为用户目录在该环境下不可见。

## 第一行


```python
#!/usr/bin/env python
```
这种写法在你机器上安装了多个版本的python的时候有意义，这样声明的时候，会去取你机器的 PATH 中指定的第一个 python 来执行你的脚本。如果这时候你又配置了虚拟环境的话，那么这样写可以保证脚本会使用你虚拟环境中的 python 来执行。

而不是`#!/usr/bin/python`，写死了，就是要 `/usr/bin/python`的 python 来执行你的脚本。
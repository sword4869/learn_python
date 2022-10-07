- [1. 进入目录 & 当前工作目录](#1-进入目录--当前工作目录)
- [2. 列出文件和目录](#2-列出文件和目录)
- [3. create directory](#3-create-directory)
- [4. remove](#4-remove)
- [5. exist](#5-exist)
- [6. 相对路径问题](#6-相对路径问题)
---

```python
import os
```
# 1. 进入目录 & 当前工作目录 

```python
# 当前工作目录
wd = os.getcwd()

# 进入目录
os.chdir(newPath)
```
# 2. 列出文件和目录

```python
# 当前工作目录
os.listdir()

# 指定目录下
os.listdir(newPath)
```
# 3. create directory
```python
# 单级目录
# 如果目录有多级，则创建最后一级，如果最后一级目录的上级目录有不存在的，则会抛出一个 OSError
os.mkdir(path)

# 多级目录
os.makedirs(path)
# exist_ok：是否在目录已存在时触发异常。如果exist_ok为False（默认值），则在目标目录已存在的情况下触发FileExistsError异常；如果exist_ok为True，则不会触发异常。
os.makedirs(path, exist_ok=True)
```
常用 `makedirs`
# 4. remove

```python

# remove file, 不能删除目录
os.remove(filePath) 

os.rmdir(emptyDirectory) 

# 递归删除一系列空文件夹
# 当下目录下有`world/hh`，world下只有hh，hh里空，os.removedirs('world/hh')，hh是空文件夹被删，world是空文件被删除，到当前目录为止
os.removedirs(bottomEmptyDirectory)
```
# 5. exist

```python
# file and directory are ok
if os.path.exists(newPath):

# 其子文件也适用
os.path.exists('test/world.txt')
```

```python
# 最后可以有或没有`/`
# './root/test/runoob.txt'
os.path.join('./root/','test/','runoob.txt')
```

# 6. 相对路径问题
> 原本

`src.py`:
```python
# src.py中需要文件readme.txt，写法是`./reademe.txt`
input_path = './readme.txt'
```
```bash
# 那么我们就必须要在项目根目录下执行
~/Project$ python src.py

# 失败，这里认为readme.txt是在~/readme.txt
~$ python Project/src.py
```
> src.py相对于readme.txt的相对路径，再将结果转换为绝对路径

`src.py`:
```python
parentPath = os.path.dirname(__file__)
input_path = os.path.abspath(os.path.join(parentPath, './readme.txt'))
```

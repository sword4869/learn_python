- [1. 进入目录 & 当前工作目录](#1-进入目录--当前工作目录)
- [2. 列出文件和目录](#2-列出文件和目录)
- [3. create directory](#3-create-directory)
- [4. remove](#4-remove)
- [5. exist](#5-exist)
- [6. 相对路径问题](#6-相对路径问题)
- [7. 环境变量](#7-环境变量)
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
# 7. 环境变量

1、os.environ() 详解
在 python 中通过 os.environ 可以获取有关系统的各种信息

1.1 简介
通过 os.environ 获取环境变量，什么是环境变量呢？环境变量是程序和操作系统之间的通信方式。有些字符不宜明文写进代码里，比如数据库密码，个人账户密码，如果写进自己本机的环境变量里，程序用的时候通过 os.environ.get() 取出来就行了。这样开发人员本机测试的时候用的是自己本机的一套密码，生产环境部署的时候，用的是公司的公共账号和密码，这样就能增加安全性。os.environ 是一个字典，是环境变量的字典。“HOME” 是这个字典里的一个键，如果有这个键，返回对应的值，如果没有，则返回 none

1.2 常见 key 字段
key 字段详解：os.environ.keys() 主目录下所有的 key

windows：
```python
os.environ['HOMEPATH']:当前用户主目录。
os.environ['TEMP']:临时目录路径。
os.environ["PATHEXT"]:可执行文件。
os.environ['SYSTEMROOT']:系统主目录。
os.environ['LOGONSERVER']:机器名。
os.environ['PROMPT']:设置提示符。
```
linux：
```python
os.environ['USER']:当前使用用户。
os.environ['LC_COLLATE']:路径扩展的结果排序时的字母顺序。
os.environ['SHELL']:使用shell的类型。
os.environ['LAN']:使用的语言。
os.environ['SSH_AUTH_SOCK']:ssh的执行路径。
```

1.3 os.environ.get() 用法
os.environ 是一个字典，是环境变量的字典，可以通过 get 方法获取键对应的值（注意 os.environ 的类型并不是 `<class ‘dict’>`，不是所有字典的函数都能用）

os.environ.get() 是 python 中 os 模块获取环境变量的一个方法，如果有这个键，返回对应的值，如果没有，则返回 none
```
import os
print(os.environ.get("HOME"))
```
也可以设置默认值，当键存在时返回对应的值，不存在时，返回默认值

```
print(os.environ.get("HOME", "default"))	#环境变量HOME不存在，返回	default
```
1.4 环境变量用法总结–设置、修改、获取、删除、判断
一、设置系统环境变量
```
os.environ['环境变量名称']='环境变量值' #其中key和value均为string类型
os.putenv('环境变量名称', '环境变量值')
os.environ.setdefault('环境变量名称', '环境变量值')
```
二、修改系统环境变量
```
os.environ['环境变量名称']='新环境变量值' #也可以用来设置新变量
```
三、获取系统环境变量
```
os.environ['环境变量名称']
os.getenv('环境变量名称')
os.environ.get('环境变量名称', '默认值')	#默认值可给可不给，环境变量不存在返回默认值
```
四、删除系统环境变量
```
del os.environ['环境变量名称']
del(os.environ['环境变量名称'])
```
五、判断系统环境变量是否存在
```
'环境变量值' in os.environ   # 存在返回 True，不存在返回 False
```

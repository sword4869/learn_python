- [1. os](#1-os)
  - [1.1. Intro](#11-intro)
  - [1.2. function](#12-function)
    - [1.2.1. 进入目录 \& 当前工作目录](#121-进入目录--当前工作目录)
    - [1.2.2. 列出文件和目录](#122-列出文件和目录)
    - [1.2.3. create directory](#123-create-directory)
    - [1.2.4. remove](#124-remove)
    - [1.2.5. path](#125-path)
      - [1.2.5.1. exist](#1251-exist)
      - [1.2.5.2. 相对路径与绝对路径](#1252-相对路径与绝对路径)
      - [1.2.5.3. 路径拼接](#1253-路径拼接)
  - [1.3. example](#13-example)
    - [1.3.1. 图片路径](#131-图片路径)
  - [1.4. 环境变量](#14-环境变量)
---

# 1. os

## 1.1. Intro

```python
import os
```

## 1.2. function
### 1.2.1. 进入目录 & 当前工作目录 

```python
# 当前工作目录
wd = os.getcwd()

# 进入目录
os.chdir(newPath)
```
### 1.2.2. 列出文件和目录
一级目录
```python
# 当前工作目录
os.listdir()

# 指定目录下
os.listdir(newPath)
```

`walk`可以深入到子目录中， 展示所有的文件
```python
# root 表示当前正在访问的文件夹路径
# dirs 表示该文件夹下的子目录名list
# files 表示该文件夹下的文件list
for root, dirs, files in os.walk("..", topdown=False):
    # 用途一：遍历文件
    for name in files:
        print(os.path.join(root, name))

    # 用途二：遍历所有的文件夹
    for name in dirs:
        print(os.path.join(root, name))
```
### 1.2.3. create directory
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
### 1.2.4. remove

```python

# remove file, 不能删除目录
os.remove(filePath) 

os.rmdir(emptyDirectory) 

# 递归删除一系列空文件夹
# 当下目录下有`world/hh`，world下只有hh，hh里空，os.removedirs('world/hh')，hh是空文件夹被删，world是空文件被删除，到当前目录为止
os.removedirs(bottomEmptyDirectory)
```
### 1.2.5. path 

#### 1.2.5.1. exist

```python
# file and directory are ok
if os.path.exists(newPath):
    pass
```

#### 1.2.5.2. 相对路径与绝对路径

```python
a = 'images/166.png'

# 绝对路径
abspath = os.path.abspath(a)    # E:\\learn_python\\images\\1663935316.png

# 父目录
dirname = os.path.dirname(abspath)  # E:\\learn_python\\images

# basename返回路径最后一个子路径
basename = os.path.basename(a)  # 'images/166.png' -> '166.png'
basename2 = os.path.basename(dirname) # 'E:\\learn_python\\images' -> 'images'
```

dirname对相对路径可能失效
```python
a = 'images/166.png'

dir1 = os.path.dirname(a)     # 'images'
abs1 = os.path.abspath(dir1)  # 'E:\\learn_python\\images'

dir2 = os.path.dirname(dir1)  # ''
abs2 = os.path.abspath(dir2)  # 'E:\\learn_python'

# 到''在dirname就不变了
dir3 = os.path.dirname(dir2)  # ''
abs3 = os.path.abspath(dir3)  # 'E:\\learn_python'

# 所以 dirname 要绝对路径
abs = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(a)))) # 'E:\\'
```
#### 1.2.5.3. 路径拼接

```python
# 每个子路径的结尾可以有或没有`/`
# './root/test/runoob.txt'
os.path.join('./root/','test/','runoob.txt')
```

路径中的分隔符
```python
print(os.sep, os.path.sep)
# 文件的路径分隔符是'\'，在Linux上是'/'
```

## 1.3. example

### 1.3.1. 图片路径
```python
# 根目录+图片目录
imgdir = os.path.join(basedir, 'images')
# 既listdir又join
imgs = [os.path.join(imgdir, f) for f in sorted(os.listdir(imgdir))]
# 后缀判断
imgs = [f for f in imgs if any([f.endswith(ex) for ex in ['JPG', 'jpg', 'jpeg', 'png', 'PNG']])]
```

## 1.4. 环境变量

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

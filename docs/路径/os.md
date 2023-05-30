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
      - [1.2.5.4. dir与name分离](#1254-dir与name分离)
      - [1.2.5.5. 替换~](#1255-替换)
  - [1.3. example](#13-example)
    - [1.3.1. 图片路径](#131-图片路径)
  - [1.4. 环境变量](#14-环境变量)
    - [1.4.1. 获取 key 字段](#141-获取-key-字段)
    - [1.4.2. 设置系统环境变量](#142-设置系统环境变量)
    - [1.4.3. 删除系统环境变量](#143-删除系统环境变量)
    - [1.4.4. 判断系统环境变量是否存在](#144-判断系统环境变量是否存在)
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

#### 1.2.5.4. dir与name分离
```python
os.path.split('some.pdf')
# ('', 'some.pdf')

os.path.split('log/1/2/some.pdf')
# ('log/1/2', 'some.pdf')
```

#### 1.2.5.5. 替换~

expanduser函数，它可以将参数中开头部分的 `~` 替换为当前用户的home目录并返回

```python
import os

new_path = "~/test_dir"
os.makedirs(new_path)
# 不能将 ~/test_dir 识别为/home/USER/test_dir
# 反而是理解为是一个相对路径, 在当前路径下创建了一个`~/test_dir`目录.
# 也就是说, 把`~`当作了一个普通字符, 而不是代表`/home/USER`的根目录位置.

new_path_2 = os.path.expanduser(new_path)
print(new_path_2)
# /home/USER/test_dir
os.makedirs(new_path_2)
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

在 python 中通过 `os.environ` 可以获取有关系统的各种信息


### 1.4.1. 获取 key 字段

大小写无所谓
- `os.environ["HOME"]`: 如果有这个键，返回对应的值，如果没有，则抛出异常 `KeyError`
  ```python
  >>> os.environ["HOME"]
  'C:\\Users\\lab'
  >>> os.environ['HOME1']
  KeyError: 'HOME1'
  ```

- `os.environ.get()`: 如果有这个键，返回对应的值; 如果没有，则返回 `None`; 也可以设置默认值，当键存在时返回对应的值，不存在时，返回默认值
  ```
  >>> print(os.environ.get("HOME"))
  C:\Users\lab
  >>> print(os.environ.get("HOME1")) 
  None
  >>> print(os.environ.get("HOME1", "default")) 
  default
  ```
- `os.getenv()`: 如果有这个键，返回对应的值; 如果没有，则返回 `None`
  ```python
  >>> os.getenv('环境变量名称') == None
  True
  >>> os.getenv('home')         
  'C:\\Users\\lab'
  ```
- `os.environ.keys()` 主目录下所有的 key-value
  ```python
  >>> os.environ.keys()
  KeysView(environ('COMSPEC': 'C:\\Windows\\system32\\cmd.exe', 'CONDA_DEFAULT_ENV': 'nerf', 'CONDA_EXE':
  'D:\\miniconda\\Scripts\\conda.exe', 'CONDA_PREFIX': 'D:\\miniconda\\envs\\nerf', 'CONDA_PREFIX_1': 'D:\\miniconda', 'CONDA_PROMPT_M
  ODIFIER': '(nerf) ', 'CONDA_PYTHON_EXE': 'D:\\miniconda\\python.exe', 'CONDA_SHLVL': '2', 
  ```
### 1.4.2. 设置系统环境变量
```python
# 其中 key 和 value 均为 str 类型
os.environ['环境变量名称'] = '环境变量值' 
os.putenv('环境变量名称', '环境变量值')
os.environ.setdefault('环境变量名称', '环境变量值')
```

### 1.4.3. 删除系统环境变量
```python
# 只是在当前脚本下临时删除
del os.environ['环境变量名称']
```
### 1.4.4. 判断系统环境变量是否存在
```python
# 存在返回 True，不存在返回 False
if '环境变量值' in os.environ:

if '环境变量值' in os.environ:
  a = os.environ['环境变量值']

a = os.environ['环境变量值']
if a != None:
```

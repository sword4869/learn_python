- [1. 路径](#1-路径)
  - [1.1. 位置](#11-位置)
  - [1.2. 划分`/`: 注意，结尾不要带`/`](#12-划分-注意结尾不要带)
  - [1.3. 划分后缀`.`](#13-划分后缀)
  - [1.4. 后缀判断](#14-后缀判断)
  - [1.5. 路径拼接](#15-路径拼接)
- [2. 列出文件路径](#2-列出文件路径)
- [3. exist](#3-exist)
- [4. 当前工作目录 \& 进入目录](#4-当前工作目录--进入目录)
- [5. 文件夹和文件都能删](#5-文件夹和文件都能删)
- [6. 创建文件夹](#6-创建文件夹)

---

## 1. 路径

### 1.1. 位置

影响 `os.makedirs`: 
- `expanduser`: 替换`~`
   
    ```python
    new_path_2 = os.path.expanduser("~/test_dir")
    # /home/admin/test_dir

    os.makedirs("~/test_dir")
    # 把`~`当作了一个普通字符，理解为是一个相对路径
    # 在当前路径下创建了一个 名为`~/test_dir`目录.
    ```

- `abspath`: 绝对路径。
    
    ```python
    # 绝对路径
    abspath = os.path.abspath('images/166.png')    
    # E:\\learn_python\\images\\1663935316.png

    # 前者不可用于os.makedirs
    print(os.path.join(args.out_root, args.out_article, '..'))
    print(os.path.abspath(os.path.join(args.out_root, args.out_article, '..')))
    # `D:\git\dd\docs/a/aaa.md\..`, os.makedirs创建了名为 `aaa.md` 文件夹
    # `D:\git\dd\docs\a`
    ```
    绝对路径返回的值不会带 `~`，但是会错误理解输入的路径。
    ```python
    >>> os.path.expanduser('~/aa')
    '/home/lab/aa'
    >>> os.path.abspath('~/aa')
    '/home/lab/git/GAVA/~/aa'
    ```

其他：
- `dirname`: 文件或者文件夹的父目录
    
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
### 1.2. 划分`/`: 注意，结尾不要带`/`

!!! note 与字符串划分的区别
    因为不同平台的分隔符不同，字符串划分只是写死的`/`，`os`库则是自适应的。
    ```python
    # 路径中的分隔符
    # windows
    >>> print(os.sep, os.path.sep)
    \ \
    # linux
    >>> print(os.sep, os.path.sep)
    / /
    ```

- 手动split

    ```python
    >>> 'images/166.png'.split('/')[-1]   
    '166.png'

    # 智能
    >>> 'images/166.png'.split(os.sep)[-1]   
    >>> 'images\\166.png'.split(os.sep)[-1]   
    # >>> 'images\166.png'.split(os.sep)[-1]     
    # 'imagesv.png'
    ```
- `basename`: 返回最后一个分隔符(`/` 或者 `\`)后面的
   
    ```python
    >>> os.path.basename('images/166.png')
    '166.png'

    # os.path.basename('images/166.png/')
    # # 空。所以结尾不要`/`

    # os.path.basename('E:\\learn_python\\images\\1663935316.png') 
    # # '1663935316.png'
    ```

- `split`: 同`basename`一样的机制，返回前面的和后面的
 
    ```python
    >>> os.path.split('log/1/2/some.pdf')[1]
    'some.pdf'

    # os.path.split('some.pdf')
    # # ('', 'some.pdf')

    # os.path.split('log/1/2/some.pdf')
    # # ('log/1/2', 'some.pdf')

    # os.path.split('log/1/2')
    # # ('log/1', '2')

    # os.path.split('log/1/2/')
    # # ('log/1/2', '')

    # os.path.split('E:\\learn_python\\images\\1663935316.png')    
    # #('E:\\learn_python\\images', '1663935316.png')
    ```
### 1.3. 划分后缀`.`
- 手动split
    
    ```python
    >>> 'log/1/2/some.pdf'.split('.')[1]
    'pdf'
    ```
- `splitext`: 前缀和后缀。根据`.`划分, `.`包含在后缀里。
    
    ```python
    >>> os.path.splitext('log/1/2/some.pdf')[1]
    '.pdf'

    # os.path.splitext('some.pdf')
    # # ('some', '.pdf')

    # os.path.splitext('log/1/2/some.pdf')
    # # ('log/1/2/some', '.pdf')‘

    # os.path.splitext('log/1/2')
    # # ('log/1/2', '')

    # os.path.splitext('log/1/2/')
    # # ('log/1/2/', '')
    ```
### 1.4. 后缀判断

```python
# 后缀判断
imgs = [f for f in imgs if any([f.endswith(ex) for ex in ['JPG', 'jpg', 'jpeg', 'png', 'PNG']])]
# imgs = [f for f in imgs if any([ex in f for ex in ['JPG', 'jpg', 'jpeg', 'png', 'PNG']])]
```

### 1.5. 路径拼接

```python
# 每个子路径的结尾可以有或没有`/`
>>> os.path.join('./root/','test','runoob.txt')
'./root/test/runoob.txt'
# 最后的/则是自定义
>>> os.path.join('./root/','test','runoob.txt/') 
'./root/test/runoob.txt/
```


## 2. 列出文件路径
```python
# 当前工作目录
os.listdir()

# 指定目录下
os.listdir(newPath)
```
```python
for file_name in sorted(os.listdir(file_directory)):
```

```python
# basename
imgs = [file_name for f in sorted(os.listdir(file_directory))]

# 既listdir又join
imgs = [os.path.join(file_directory, f) for f in sorted(os.listdir(file_directory))]
```

## 3. exist

```python
# file and directory are ok
if os.path.exists(newPath):
    pass
```

注意：`newPath` 不能是 `None`，所以会看到有先替换`None`为`""`再判断的操作
```python
>>> os.path.exists(None) 
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "D:\Applications\miniconda\envs\nerf\lib\genericpath.py", line 19, in exists
    os.stat(path)
TypeError: stat: path should be string, bytes, os.PathLike or integer, not NoneType
```
```python
if newPath is None:
    newPath = ""
if os.path.exists(newPath):
    pass
```
## 4. 当前工作目录 & 进入目录

```python
# 当前工作目录
wd = os.getcwd()

# 进入目录
os.chdir(newPath)
```

## 5. 文件夹和文件都能删

`os.remove(filePath)` 只能删除文件，不能删除目录

`os.rmdir(emptyDirectory)` 只能删除空目录，不能删除文件

`os.removedirs(bottomEmptyDirectory)` 递归删除一系列空文件夹

`shutil.rmtree(directory)` 只能删除目录（可以删除非空目录），不能删除文件


```python
import os
import shutil
def remove_file_directory(path):
    if not os.path.exists(path):
        return 
    if os.path.isfile(path):
        os.remove(path)
    else:
        shutil.rmtree(path)
```

## 6. 创建文件夹

确保创造：
- 既可以是多级目录，`mkdir -p`的效果
- 也是如果存在就不动原来的东西
```python
import os
os.makedirs(directory, exist_ok=True)

'''
# 单级目录
# 如果目录有多级，则创建最后一级，
# 如果最后一级目录的上级目录有不存在的，则会抛出一个 OSError
os.mkdir(directory)

# 多级目录
# exist_ok=False：是否在目录已存在时触发异常。
#     如果exist_ok为False（默认值），则在目标目录已存在的情况下触发FileExistsError异常；
#     如果exist_ok为True，则不会触发异常。
os.makedirs(directory)
'''
```


创造干净的:
```python
import os
import shutil

shutil.rmtree(directory, ignore_errors=True)
os.makedirs(directory, exist_ok=True)
```
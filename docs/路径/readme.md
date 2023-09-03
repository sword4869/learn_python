- [1. 路径](#1-路径)
  - [1.1. 位置](#11-位置)
  - [1.2. 划分`/`: 注意，结尾不要带`/`](#12-划分-注意结尾不要带)
  - [1.3. 划分后缀`.`](#13-划分后缀)
  - [1.4. 后缀判断](#14-后缀判断)
- [2. 列出文件路径](#2-列出文件路径)
- [3. 文件夹和文件都能删](#3-文件夹和文件都能删)
- [4. 创建文件夹](#4-创建文件夹)

---

## 1. 路径


### 1.1. 位置
- `expanduser`: 替换`~`
    ```python
    new_path_2 = os.path.expanduser("~/test_dir")
    # /home/admin/test_dir
    ```
- `abspath`: 绝对路径
    ```python
    # 绝对路径
    abspath = os.path.abspath('images/166.png')    
    # E:\\learn_python\\images\\1663935316.png
- `dirname`: 父目录
    ```python
    # 父目录
    dirname = os.path.dirname('images/166.png')  
    # E:\\learn_python\\images
    ```

### 1.2. 划分`/`: 注意，结尾不要带`/`

!!! note 与字符串划分的区别
    因为不同平台的分隔符不同，字符串划分只是写死的`/`，`os`库则是自适应的。

- 
    ```python
    >>> 'images/166.png'.split('/')[-1]   
    '166.png'
    ```
- `basename`: 返回最后一个`/`后面的
    ```python
    >>> os.path.basename('images/166.png')
    '166.png'

    # os.path.basename('images/166.png/')
    # # 空。所以结尾不要`/`

    # os.path.basename('E:\\learn_python\\images\\1663935316.png') 
    # # '1663935316.png'
    ```

- `split`: 同`basename`一样都是根据最后一个`/`分开的，返回前面的和后面的
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
- 
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
    # # ('log/1/2/some', '.pdf')

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

## 2. 列出文件路径
```python
for file_name in sorted(os.listdir(file_directory)):
```
```python
imgs = [file_name for f in sorted(os.listdir(file_directory))]

# 既listdir又join
imgs = [os.path.join(file_directory, f) for f in sorted(os.listdir(file_directory))]
```

## 3. 文件夹和文件都能删

`shutil.rmtree(directory)`不能删除文件，可以删除非空目录

`os.remove(filePath)` 只能删除文件，不能删除目录

`os.rmdir(emptyDirectory)`只能删除空目录
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

## 4. 创建文件夹

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
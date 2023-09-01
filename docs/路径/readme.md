- [路径](#路径)
- [列出文件路径](#列出文件路径)
- [1.1. 文件夹和文件都能删](#11-文件夹和文件都能删)
- [1.2. 创建文件夹](#12-创建文件夹)

---

## 路径

```python
new_path_2 = os.path.expanduser("~/test_dir")
# /home/admin/test_dir
```
```python
# 绝对路径
abspath = os.path.abspath('images/166.png')    
# E:\\learn_python\\images\\1663935316.png

# 父目录
dirname = os.path.dirname('images/166.png')  
# E:\\learn_python\\images
```
```python
# basename返回路径最后一个子路径
basename = os.path.basename('images/166.png')
# '166.png'

basename2 = os.path.basename('images/166.png')
# 'images'
```

- `split`: dirpath与filename。其实是根据最后一个`/`分开的。
```python
os.path.split('some.pdf')
# ('', 'some.pdf')

os.path.split('log/1/2/some.pdf')
# ('log/1/2', 'some.pdf')

os.path.split('log/1/2')
# ('log/1', '2')

os.path.split('log/1/2/')
# ('log/1/2', '')
```

- `splitext`: 前缀和后缀。根据`.`划分, `.`包含在后缀里。
```python
os.path.splitext('some.pdf')
# ('some', '.pdf')

os.path.splitext('log/1/2/some.pdf')
# ('log/1/2/some', '.pdf')

os.path.splitext('log/1/2')
# ('log/1/2', '')

os.path.splitext('log/1/2/')
# ('log/1/2/', '')
```

## 列出文件路径
```python
for file_path in sorted(os.listdir(path)):
```
## 1.1. 文件夹和文件都能删

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

## 1.2. 创建文件夹

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

shutil.rmtree(directory)
os.makedirs(directory, exist_ok=True)
```
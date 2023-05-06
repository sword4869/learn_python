

## 文件夹和文件都能删

`shutil.rmtree(directory)`不能删除文件
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

## 创建文件夹

确保创造：
- 既可以是多级目录，`mkdir -p`的效果
- 也是如果存在就不动原来的东西
```python
import os
os.makedirs(path, exist_ok=True)
```

创造干净的:
```python
import os
import shutil

remove_file_directory(path)
os.makedirs(path, exist_ok=True)
```
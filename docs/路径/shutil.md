- [1. copy file](#1-copy-file)
- [2. copy directory](#2-copy-directory)
- [3. remove directory](#3-remove-directory)
- [4. move directory](#4-move-directory)

---
## 1. copy file

```python
import shutil import

shutil.copy(src, dst)
shutil.copy2(src, dst)

# dst is directory
filename = shutil.copy('./f/g/.gitignore', './f')       # './f\\.gitignore'
# dst is file
filename = shutil.copy('./f/g/.gitignore', './f/.g')    # './f/.g'
```
Copies the file `src` to the file or directory `dst`
- If `dst` specifies a **directory**, the file will be copied into `dst` using the base filename from `src`. 
- If `dst` specifies a **file** that already exists, it will be **replaced**. 
- Returns the path to the newly created file.

`copy()` copies the file data and the file’s permission mode. Other metadata, like the file’s **creation and modification times**, is not preserved. To preserve all file metadata from the original, use `copy2()` instead.

## 2. copy directory

```python
shutil.copytree(src, dst)
shutil.copytree(src, dst, ignore=shutil.ignore_patterns('*.pyc', 'tmp*'))
shutil.copytree(src, dst, dirs_exist_ok=True)


directoryName = shutil.copytree('./f/g', './aaa')   # './aaa'
directoryName = shutil.copytree('./f/g', './aaa', dirs_exist_ok=True)   # './aaa'
```
将 `src` 文件夹里面的内容复制到 `dst`文件夹里面。
- 如果 `dst`文件夹不存在，那么就会创建一个 `dst` 文件夹
- 如果 `dst`文件夹已存在。
    If `dirs_exist_ok` is false (the default) and `dst` already exists, a `FileExistsError` is raised. 
    If `dirs_exist_ok` is true, the copying operation will continue if it encounters existing directories, and files within the dst tree will be **overwritten** by corresponding files from the `src` tree.

## 3. remove directory

将这个文件夹及其内容删除
```python
shutil.rmtree(directory)

shutil.rmtree('./aaa')
```
但是不能删除文件，`directory`要是一个文件名，报错。


## 4. move directory

如果 `dst` 文件夹存在，将 `src`文件夹及其内容搬进`dst`中。
如果 `dst` 文件夹不存在，将 `src`文件夹及其内容搬进`dst`所在父目录处，并重命名为`dst`。
```python
shutil.move(src, dst)

shutil.move('./f/g', './aaa')
```
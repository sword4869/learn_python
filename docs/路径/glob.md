# 快速获取文件的路径**列表**，而且是**绝对路径**


```python
from glob import glob

data_dir = r'C:\Users\lab\git\NeuLF\dataset\CanClip\images_4'
images = sorted(glob(f'{data_dir}/*.jpg') + glob(f'{data_dir}/*.png'))
# ['C:\\Users\\lab\\git\\NeuLF\\dataset\\CanClip\\images_4\\img001.png',
#  'C:\\Users\\lab\\git\\NeuLF\\dataset\\CanClip\\images_4\\img002.png']
```

These patterns: `glob.glob("../images")`错，`glob.glob("../images/*")`对

- Asterisk (*): Matches zero or more characters.
- Question mark (?): Matches exactly one character.

# 递归查找

```python
from glob import iglob

path = '/Users/tara/ml_guides/' + '**/*.ipynb'
for file in iglob(path, recursive=True):
    ...
```
we can use glob to find all files **in a directory and its subdirectories** that match a search pattern.
- the argument `recursive=True` tells glob to search all **sub-directories**. When the recursive argument is set to False(default), we only search in the folder specified in our search path.

- `iglob` differs from glob in that it returns an iterator “which yields the same values as glob without storing them all simultaneously,”
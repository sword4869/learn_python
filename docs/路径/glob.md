`glob` is used to return all file **absolute paths** that match a specific pattern.


These patterns:
- Asterisk (*): Matches zero or more characters.
- Question mark (?): Matches exactly one character.
- `glob.glob("../images")`没用！`glob.glob("../images/*")`


```python
import glob

data_dir = r'C:\Users\lab\git\NeuLF\dataset\CanClip\images_4'
image_paths = glob.glob(f"{data_dir}/*.png")
# ['C:\\Users\\lab\\git\\NeuLF\\dataset\\CanClip\\images_4\\img001.png',
#  'C:\\Users\\lab\\git\\NeuLF\\dataset\\CanClip\\images_4\\img002.png']
```

```python
path = '/Users/tara/ml_guides/' + '**/*.ipynb'
for file in glob.iglob(path, recursive=True):
    ...
```
we can use glob to find all files **in a directory and its subdirectories** that match a search pattern.
- the argument `recursive=True` tells glob to search all **sub-directories**. When the recursive argument is set to False(default), we only search in the folder specified in our search path.

- `iglob` differs from glob in that it returns an iterator “which yields the same values as glob without storing them all simultaneously,”
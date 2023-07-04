- [1. basic](#1-basic)
- [2. Global options](#2-global-options)
  - [2.1. pytorch的例子](#21-pytorch的例子)
  - [2.2. 临时源的例子](#22-临时源的例子)
- [3. other source](#3-other-source)

# 1. basic

```
numpy
docopt == 0.6.1
SomeProject >= 1.2, < 2.0
requests >= 2.8.1
requests == 2.8.*
```

# 2. Global options

- The following options have an effect on the entire pip install run
- must be specified **on their individual lines**.
- 会在安装包前都扫描完全有的options后，才安装包。所以，不论写在哪里都行，比如，一开始写在文件开头，写在文件末尾，写在安装的中间。
- 正因为全扫描完，所以如果出现冲突，就得分文件。比如，index-url不兼容（不是包安随便哪个index-url都能运行的情况），一个包指定index-url，另一个指定安装别的index-url，那么就得拆分成不同`requirements_01.txt`，一个一个文件安装。


```
-i, --index-url
只有一个，再写一个就会代替。

--extra-index-url

--no-index

-c, --constraint

-r, --requirement

-e, --editable

-f, --find-links

--no-binary

--only-binary

--prefer-binary

--require-hashes

--pre

--trusted-host

--use-feature
```


## 2.1. pytorch的例子
`pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu117`

```
--extra-index-url https://download.pytorch.org/whl/cu117
torch 
torchvision 
torchaudio 
```

用国内源下的`torch`,`torch+gpu`都失败`torch.version.cuda = None`

## 2.2. 临时源的例子
```
--index-url https://mirrors.bfsu.edu.cn/pypi/web/simple	
--trusted-host https://mirrors.bfsu.edu.cn
numpy
```

# 3. other source
```
pip @ https://github.com/pypa/pip/archive/22.0.2.zip
./downloads/numpy-1.9.2-cp34-none-win32.whl
http://wxpython.org/Phoenix/snapshot-builds/wxPython_Phoenix-3.0.3.dev1820+49a8884-cp34-none-win_amd64.whl
```
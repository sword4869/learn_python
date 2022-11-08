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

The following options have an effect on the entire pip install run, and must be specified **on their individual lines**.

```
-i, --index-url

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
`pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu116`

```
--extra-index-url https://download.pytorch.org/whl/cu116
torch 
torchvision 
torchaudio 
```

## 2.2. 临时源的例子
```
--index-url https://pypi.tuna.tsinghua.edu.cn/simple
--trusted-host https://pypi.tuna.tsinghua.edu.cn
numpy
```

# 3. other source
```
pip @ https://github.com/pypa/pip/archive/22.0.2.zip
./downloads/numpy-1.9.2-cp34-none-win32.whl
http://wxpython.org/Phoenix/snapshot-builds/wxPython_Phoenix-3.0.3.dev1820+49a8884-cp34-none-win_amd64.whl
```
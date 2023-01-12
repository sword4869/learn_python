- [1. Introduction](#1-introduction)
  - [1.1. conda, virtualenv(venv)](#11-conda-virtualenvvenv)
  - [1.2. Conda, Miniconda, Anaconda](#12-conda-miniconda-anaconda)
- [2. Installation \& Configuration](#2-installation--configuration)
  - [2.1. Software Resoures:](#21-software-resoures)
  - [2.2. Conda Source](#22-conda-source)
  - [2.3. in shell](#23-in-shell)
    - [2.3.1. linux](#231-linux)
    - [2.3.2. windows](#232-windows)
- [3. Basic Command](#3-basic-command)
  - [3.1. Managing conda](#31-managing-conda)
  - [3.2. Managing environments](#32-managing-environments)
  - [3.3. Managing packages](#33-managing-packages)
- [4. Other](#4-other)
  - [4.1. Need to use pip](#41-need-to-use-pip)
  - [4.2. packages that conda can install](#42-packages-that-conda-can-install)

# 1. Introduction

## 1.1. conda, virtualenv(venv)

与venv, virtualenv不同的是，conda能创建系统上没有安装的python版本。

## 1.2. Conda, Miniconda, Anaconda

Conda is a package manage tool. Miniconda and Anaconda are the free minimal installers for conda.

Miniconda is a small, bootstrap version of Anaconda. So it is same to use the conda command in Miniconda and Anaconda.

Anaconda contains many things that are not commonly used. It is too large. For save disk usage, We can install it manually using miniconda.

PS: When you choose use conda, the conda itself contains a python interpreter. So you can uninstall the original python (the packages between the orginal python and conda's python are not interconnected, the original python is s useless).

# 2. Installation & Configuration

## 2.1. Software Resoures:

- [miniconda download](https://docs.conda.io/en/latest/miniconda.html)]
- [anaconda download](https://www.anaconda.com/products/distribution)

下载完毕后，记得更新下conda。

## 2.2. Conda Source

[bfsu 北外的源主页](https://mirrors.bfsu.edu.cn/help/anaconda/)
  
the path of file `.condarc` is 
- `C:\Users\<USERNAME>\.condarc`(win)
- `~/.condarc`(linux)

```bash
# Linux: nothing
# Win10: `conda config --set show_channel_urls yes` to produce this file.
# 换了个北外的源，阿里、中科大、清华都挺满
$ vim ~/.condarc

channels:
  - defaults
show_channel_urls: true
ssl_verify: false
default_channels:
  - https://mirrors.bfsu.edu.cn/anaconda/pkgs/main
  - https://mirrors.bfsu.edu.cn/anaconda/pkgs/r
  - https://mirrors.bfsu.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.bfsu.edu.cn/anaconda/cloud
  msys2: https://mirrors.bfsu.edu.cn/anaconda/cloud
  bioconda: https://mirrors.bfsu.edu.cn/anaconda/cloud
  menpo: https://mirrors.bfsu.edu.cn/anaconda/cloud
  pytorch: https://mirrors.bfsu.edu.cn/anaconda/cloud
  pytorch-lts: https://mirrors.bfsu.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.bfsu.edu.cn/anaconda/cloud
```

> SSLError(MaxRetryError('HTTPSConnectionPool(host=\'mirrors.bfsu.edu.cn\', port=443): Max retries exceeded with url: /anaconda/pkgs/main/linux-64/repodata.json (Caused by SSLError(SSLError("bad handshake: Error([(\'SSL routines\', \'ssl3_get_server_certificate\', \'certificate verify failed\')])")))'))

在`~/.condarc`中加一句`ssl_verify: false`

## 2.3. in shell

### 2.3.1. linux
In linux, we set environmental variable.
```bash
$ vim ~/.bashrc
export PATH="/home/USER/anaconda3/bin:$PATH"

$ source ~/.bashrc
```

### 2.3.2. windows

In windows, there is no needs to set Environment Variable of conda.

In your terminal,  you find `conda acvtivate env1` is not working because the lack of Environment Variable. But `conda init` provide a solution that modify the terminal startup configuration so that your terminal can directly be the conda environment after it is opened.

```bash
# get into the conda's Scripts installation location，where contains a executable file of conda. such conda.sh, conda.exe
$ cd ~/anaconda/bin/

# linux's bash shell
$ ./conda init bash
# powershell
$ ./conda init powershell
# Win's cmd
$ ./conda.exe init cmd.exe



# close shell and restart, you should see `(base)`
(base) $
```
```bash
# using all kinds of shell
# - bash
# - cmd.exe
# - fish
# - powershell
# - tcsh
# - xonsh
# - zsh
$ ~/anaconda/bin/conda init --all
```
```bash
# undo the all shells' effect
$ conda init --reverse
```

> win10, git-bash

1. 激活命令是`conda init bash`。git-bash被认为是`bash`。

2. 如果出现激活成功却在使用`conda activate ENRIONMENT`时报错：
  - 为什么git-bash找不到
    `conda init`创建一个 `.bash_profile`文件来配置，但 老版本的`git-bash`使用 `.bashrc`配置文件，新的git-bash也使用`.bash_profile`自然没用问题。
  - 我的解决方案是：
    复制`C:\Users\<username>\.bash_profile`为`.bashrc`.

3. 输入`conda activate`，却报错，UnicodeEncodeError: 'gbk' codec can't encode character. 
  这是发生在git-bash读取环境变量时，因为你的环境变量中有个路径含有中文，删除掉它或者给它改成英文名字就好。
# 3. Basic Command

## 3.1. Managing conda

```bash
conda --version
```

```bash
# update the conda's version
conda update conda
```

## 3.2. Managing environments

When you begin using conda, you already have a default environment named `base`.

> create a enviroment

- python version is as same as base.

```bash
# -n ENVIRONMENT, --name ENVIRONMENT
conda create --name ENVIRONMENT
```

- another python version

```bash
# -y: confirm all choices
conda create --name ENVIRONMENT python=3.9 -y
```

> activate (switch) to a certain environment

```bash
# For conda 4.6 and upper, simply type `activate ENVIRONMENT`
conda activate ENVIRONMENT
```

> lists all your environments

```bash
conda info --envs
```

or

```bash
conda env list
```

> deactivate


```bash
# exit conda virtual environment
(ENVIRONMENT)$ conda deactivate
$ 
```

```bash
# activate nothing denotes back to base.
(ENVIRONMENT)$ conda activate
(base)$
```

> remove environment

```bash
conda remove --name ENVIROMENT --all
```

## 3.3. Managing packages

To find a package you have already installed, first activate the environment you want to search

> list all packages in this environment

```bash
conda list
```

> seach package version

```bash
conda search PACKAGE
```

> install package

```bash
conda install PACKAGE
```

> update

```bash
conda update PACKAGE
```

update all packages

```bash
conda update all
```

> uninstall package

```bash
conda uninstall PACKAGE
```

or

```bash
conda remove PACKAGE
```

> conda export and import package lists

We want Environment 2 has same packages.

Environment 1: export

```bash
# --explicit, -e
conda list --explicit > D:/requirements.txt
```

Environment 2: import

```bash
conda install --file FILE
```

or directly create a new environment with packages installed.

```bash
conda create --name ENVIRONMENT python=3.8 --file FILE
```
# 4. Other



## 4.1. Need to use pip

When the package does not exist in conda, we need to install it with pip in the conda's environment.

The package installed by pip, `conda list`'s the `Build` attribute is `pypi`.

- (conda -> pip) Use pip only after conda.
  Install as many requirements as possible with conda, then use pip.
- (conda -> pip -> conda) Create a new environment.
  After conda -> pip, conda is now unaware of these changes by pip and may make modifications that would break the environment. So, rather than continue to conda in this environment(conda -> pip -> conda), it is better to create a new environment (conda -> pip).
- Use conda environments for isolation
  Create a conda environment to isolate any changes pip makes. Care should be taken to avoid running pip in the "base/root" environment.
- Store conda and pip requirements in text files
  `pip install -r requirement.txt `, `pip freeze > requirements.txt`, 
  `conda list --explicit > requirements.txt`, `conda install --file requirement.txt`.

## 4.2. packages that conda can install

```python
conda install git

# if your python doesn't hava installed pip
conda install pip

# Installing latest CUDA Releases
conda install cuda -c nvidia
# Installing Previous CUDA Releases
conda install cuda -c nvidia/label/cuda-11.3.0
```



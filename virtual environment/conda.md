- [1. Introduction](#1-introduction)
- [2. Conda, Miniconda, Anaconda](#2-conda-miniconda-anaconda)
- [3. Installation & Configuration](#3-installation--configuration)
  - [3.1. Software Resoures:](#31-software-resoures)
  - [3.2. Conda Source](#32-conda-source)
  - [3.3. in shell](#33-in-shell)
    - [3.3.1. conda init](#331-conda-init)
    - [3.3.2. set environmental variable](#332-set-environmental-variable)
- [4. Basic Command](#4-basic-command)
  - [4.1. Managing conda](#41-managing-conda)
  - [4.2. Managing environments](#42-managing-environments)
  - [4.3. Managing packages](#43-managing-packages)
- [5. Advanced Command](#5-advanced-command)
  - [5.1. conda export and import package lists](#51-conda-export-and-import-package-lists)
  - [5.2. Need to use pip](#52-need-to-use-pip)
- [6. VSCode and conda](#6-vscode-and-conda)

# 1. Introduction

Different projects use different python version and different packages version.

e.g. Project A (`python 3.8, tensorflow==2.8.0`), Project B(`python 3.5, tensorflow==2.1.0`)

# 2. Conda, Miniconda, Anaconda

Conda is a package manage tool. Miniconda and Anaconda are the free minimal installers for conda.

Miniconda is a small, bootstrap version of Anaconda. So it is same to use the conda command in Miniconda and Anaconda.

Anaconda contains many things that are not commonly used. It is too large. For save disk usage, We can install it manually using miniconda.

PS: When you choose use conda, the conda itself contains a python interpreter. So you can uninstall the original python (the packages between the orginal python and conda's python are not interconnected, the original python is s useless).

# 3. Installation & Configuration

## 3.1. Software Resoures:

- [miniconda download](https://docs.conda.io/en/latest/miniconda.html)

## 3.2. Conda Source

[conda configuration](https://mirrors.bfsu.edu.cn/help/anaconda/)
  
the path in Win of file `.condarc` is 
- `C:\Users\Administrator\.condarc`(win)
- `~/.condarc`(linux)

```bash
# Linux: nothing
# Win10: `conda config --set show_channel_urls yes` to produce this file.
# 换了个北外的源，阿里、中科大、清华都挺满
$ vim ~/.condarc

channels:
  - defaults
show_channel_urls: true
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

## 3.3. in shell

### 3.3.1. conda init

no needs to set Environment Variable of conda.

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

- 为什么git-bash找不到
  `conda init`创建一个 `.bash_profile`文件来配置shell，但 `git-bash.exe`使用 `.bashrc`配置文件。
- conda 创建 `C:\Users\<username>\.bash_profile`和 bash 需要 `~/.bashrc` ，但是 `~/`不一定等于 `C:\Users\<username>\`。
  

我的解决方案是：
1. 从 VS Code 中的 git-bash 终端运行 `code ~/.bashrc`，确保`.bashrc`在正确的位置创建.
2. 复制`C:\Users\<username>\.bash_profile` 的内容并粘贴到打开的 `.bashrc`.
3. 重新打开 Git 终端。

PS:  输入`conda activate`，却报错，UnicodeEncodeError: 'gbk' codec can't encode character.

这是发生在git-bash读取环境变量时，因为你的环境变量中有个路径含有中文，删除掉它或者给它改成英文名字就好。

### 3.3.2. set environmental variable

If conda init doesn't work, `CommandNotFoundError: No command 'conda init'.`, so we can environmental variable.
```bash
$ vim ~/.bashrc
export PATH="/home/sword/anaconda3/bin:$PATH"

$ source ~/.bashrc
```
# 4. Basic Command

## 4.1. Managing conda

```bash
conda --version
```

```bash
# update the conda's version
conda update conda
```

## 4.2. Managing environments

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

When the environment is deactivated, its name is no longer shown in your prompt, and the asterisk (*) returns to base.

```bash
conda deactivate
```

or

```bash
# activate nothing denotes back to base.
conda activate
```

> remove environment

```bash
conda remove --name ENVIROMENT --all
```

## 4.3. Managing packages

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

# 5. Advanced Command

## 5.1. conda export and import package lists

We want Environment 2 has same packages.

Environment 1

```bash
conda list --explicit > D:/requirements.txt
```

Environment 2

```bash
conda install --file FILE
```

or directly create a new environment with packages installed.

```bash
conda create --name ENVIRONMENT python=3.8 --file FILE
```

## 5.2. Need to use pip

When the package does not exist in conda, we need to install it with pip in the conda's environment.

The package installed by pip, `conda list`'s the `Build` attribute is `pypi`.

- (conda -> pip) Use pip only after conda.
  Install as many requirements as possible with conda, then use pip.
- (conda -> pip -> conda) Create a new environment.
  After conda -> pip, conda is now unaware of these changes by pip and may make modifications that would break the environment. So, rather than continue to conda in this environment(conda -> pip -> conda), it is better to create a new environment (conda -> pip).
- Use conda environments for isolation
  Create a conda environment to isolate any changes pip makes. Care should be taken to avoid running pip in the "base/root" environment.
- Store conda and pip requirements in text files
  `pip freeze > requirements.txt`, `conda list --explicit > requirements.txt`
  `pip install -r requirement.txt `, `conda install -- file requirement.txt`.

# 6. VSCode and conda

[在 Visual Studio Code 中使用 Python 环境](https://code.visualstudio.com/docs/python/environments#_next-steps)


My method:

1. choose vscode python interpreter.
2. vscode setting
   `"python.terminal.activateEnvironment": true`. VSCode suggest setting it as false. But in practice, if you orginally use env1, you switch to other and run a python code, you will find that conda don't activate new vironment. That is because setting activateEnvironment as false .


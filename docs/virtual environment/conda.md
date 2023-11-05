- [1. conda](#1-conda)
  - [1.1. Introduction](#11-introduction)
    - [1.1.1. conda, virtualenv(venv)](#111-conda-virtualenvvenv)
    - [1.1.2. Conda, Miniconda, Anaconda](#112-conda-miniconda-anaconda)
  - [1.2. Installation \& Configuration](#12-installation--configuration)
    - [1.2.1. Software Resoures:](#121-software-resoures)
    - [1.2.2. Conda Source](#122-conda-source)
    - [1.2.3. in shell](#123-in-shell)
      - [1.2.3.1. linux](#1231-linux)
      - [1.2.3.2. windows](#1232-windows)
  - [1.3. Basic Command](#13-basic-command)
    - [1.3.1. Managing conda](#131-managing-conda)
    - [1.3.2. Managing environments](#132-managing-environments)
    - [1.3.3. Managing packages](#133-managing-packages)
  - [1.4. Other](#14-other)
    - [1.4.1. 更新](#141-更新)
    - [1.4.2. 重置base环境](#142-重置base环境)
    - [1.4.3. Need to use pip](#143-need-to-use-pip)
    - [1.4.4. Store conda and pip requirements in text files](#144-store-conda-and-pip-requirements-in-text-files)
    - [1.4.5. ClobberError](#145-clobbererror)
    - [1.4.6. 离线打包](#146-离线打包)
      - [conda pack](#conda-pack)
    - [1.4.7. conda env / yaml](#147-conda-env--yaml)

# 1. conda
## 1.1. Introduction

### 1.1.1. conda, virtualenv(venv)

与venv, virtualenv不同的是，conda能创建系统上没有安装的python版本。

### 1.1.2. Conda, Miniconda, Anaconda

conda是一个通用的包管理器，意思是什么语言的包都可以用其进行管理，自然也就包括Python了。 Miniconda and Anaconda are the free minimal installers for conda.

Miniconda is a small, bootstrap version of Anaconda. So it is same to use the conda command in Miniconda and Anaconda.

Anaconda contains many things that are not commonly used. It is too large. For save disk usage, We can install it manually using miniconda.

PS: When you choose use conda, the conda itself contains a python interpreter. So you can uninstall the original python (the packages between the orginal python and conda's python are not interconnected, the original python is s useless).

## 1.2. Installation & Configuration

### 1.2.1. Software Resoures:

- [miniconda download](https://docs.conda.io/en/latest/miniconda.html)
- [anaconda download](https://www.anaconda.com/products/distribution)

安装不需要sudo权限。

下载完毕后，记得更新下conda。

```bash
conda update -n base conda
```

### 1.2.2. Conda Source

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

### 1.2.3. in shell

#### 1.2.3.1. linux
When you install conda, it will **automatically** set environmental variable by itself.
```bash
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/home/sword/miniconda3/bin/conda' 'shell.bash' 'hook' 2>
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/home/sword/miniconda3/etc/profile.d/conda.sh" ]; then
        . "/home/sword/miniconda3/etc/profile.d/conda.sh"
    else
        export PATH="/home/sword/miniconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<
```


If the above process doesn't work, we can manually set environmental variable.

```bash
$ vim ~/.bashrc
export PATH="/home/USER/anaconda3/bin:$PATH"

$ source ~/.bashrc
```

#### 1.2.3.2. windows

In windows, there is no needs to set Environment Variable of conda.

In your terminal,  you find `conda acvtivate env1` is not working because the lack of Environment Variable. But `conda init` provide a solution that modify the terminal startup configuration so that your terminal can directly be the conda environment after it is opened.

```bash
# get into the conda's Scripts installation location，where contains a executable file of conda. such conda.sh, conda.exe
$ cd D:\Applications\miniconda\Scripts

# powershell
$ ./conda.exe init powershell
# Win's cmd
$ ./conda.exe init cmd.exe


# using all kinds of shell
# - bash
# - cmd.exe
# - fish
# - powershell
# - tcsh
# - xonsh
# - zsh
$ ./conda.exe init --all

# close shell and restart, you should see `(base)`
(base) $

# undo the all shells' effect
$ conda init --reverse
```
> 报错：
```
. : 无法加载文件
C:\Users\Admin\Documents\WindowsPowerShell\profile.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅
https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 3
+ . 'C:\Users\Admin\Documents\WindowsPowerShell\profile.ps1'
+   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```
powershell的权限问题，`learn_linux\docs\advance\shell美化\oh-my-posh\readme.md`

> win10, git-bash

1. 激活命令是`conda init bash`。git-bash被认为是`bash`。

2. 如果出现激活成功却在使用`conda activate ENRIONMENT`时报错：
  - 为什么git-bash找不到
    `conda init`创建一个 `.bash_profile`文件来配置，但 老版本的`git-bash`使用 `.bashrc`配置文件，新的git-bash也使用`.bash_profile`自然没用问题。
  - 我的解决方案是：
    复制`C:\Users\<username>\.bash_profile`为`.bashrc`.

3. 输入`conda activate`，却报错，UnicodeEncodeError: 'gbk' codec can't encode character. 
  这是发生在git-bash读取环境变量时，因为你的环境变量中有个路径含有中文，删除掉它或者给它改成英文名字就好。
## 1.3. Basic Command

### 1.3.1. Managing conda

```bash
conda --version
```

```bash
# update the conda's version
conda update -n base conda
```

### 1.3.2. Managing environments

When you begin using conda, you already have a default environment named `base`.

> create a enviroment

- python version is as same as base.

```bash
# -n ENVIRONMENT, --name ENVIRONMENT
conda create -n ENVIRONMENT
```

- another python version

```bash
# -y: confirm all choices
conda create -n ENVIRONMENT python=3.9 -y
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

return to base environment
```bash
# exit conda virtual environment
(ENVIRONMENT)$ conda deactivate
```
or
```bash
# activate nothing denotes back to base.
(ENVIRONMENT)$ conda activate
```

> remove environment

```bash
# 先去base，不然自己删除自己会出错
conda deactivate
conda remove -n ENVIROMENT --all
```

### 1.3.3. Managing packages

To find a package you have already installed, first activate the environment you want to search


> seach package version

```bash
conda search PACKAGE
```

> install package

```bash
conda install PACKAGE
conda install -n ENVIROMENT PACKAGE
```

相比pip install，多走一步缓存。
1. 通过`conda install xxx`的方式安装的库都会放在Anaconda的`pkgs`目录下，如`anaconda\pkgs\numpy-1.18.1-py36h48dd78f_1`。这样的好处就是，当在某个环境下已经下载好了某个库，再在另一个环境中还需要这个库时，就可以直接从pkgs目录下将该库复制至新环境。
2. 在一个环境中需要这个库时，就可以直接从`pkgs`目录下将该库复制至新`site-packages`。效果如同`pip install`。
3. 和pip安装一样，不同的conda环境下有不同的包，`site-packages`。

> update

update a certain packages

```bash
# 当前环境
conda update PACKAGE

# 指定某个环境下的包
conda update -n ENVIROMENT PACKAGE
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
如果通过`conda uninstall xxx`删除当前环境下某个库时，删除的只是当前环境下`site-packages`目录中该库的内容，它的效果和通过`pip uninstall xxx`是一样的。如果再到另一个环境中通过`conda install xxx`下载这个库，则还是通过将`pkgs`目录下的库复制到当前环境。若要清空这个`pkgs`下的已下载库，可以通过命令
```bash
conda clean -a
```

> list all packages in this environment

```bash
conda list
conda list -n ENVIROMENT
```

```bash
(base)$ conda list
# conda environments:
#
base                  *  /home/USER/miniconda3
myenv                    /home/USER/miniconda3/envs/myenv
test                     /home/USER/miniconda3/envs/test
```
`*`表示当前所在环境。

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


## 1.4. Other

### 1.4.1. 更新

```bash
# 更新conda
conda update -n base conda

# 更新当前环境的python版本
conda update python
```

### 1.4.2. 重置base环境


```bash
conda list --revisions
conda install --rev 0
```
第一条命令可以看到不同版本的历史。
第二条命令的0代表要恢复到的版本

### 1.4.3. Need to use pip

When the package does not exist in conda, we need to install it with pip in the conda's environment.

The package installed by pip, `conda list`'s the `Build` attribute is `pypi`.

- (conda -> pip) Use pip only after conda.
  Install as many requirements as possible with conda, then use pip.
- (conda -> pip -> conda) Create a new environment.
  After conda -> pip, conda is now unaware of these changes by pip and may make modifications that would break the environment. So, rather than continue to conda in this environment(conda -> pip -> conda), it is better to create a new environment (conda -> pip).
- Use conda environments for isolation
  Create a conda environment to isolate any changes pip makes. Care should be taken to avoid running pip in the "base/root" environment.
### 1.4.4. Store conda and pip requirements in text files
- `pip install -r requirement.txt `, `pip freeze > requirements.txt`, 
    如果只用pip安装，那么没有问题
    但是混合了conda install后，就会出现`Cython @ file:///croot/cython_1676568029361/work`。所以，这种情况下用`conda list =e`。

- 只通过conda install的包`conda list --explicit > requirements.txt`, `conda install --file requirement.txt`.

- 通过conda和pip install的包`conda list -e > requirements.txt`, `conda install --file requirement.txt`.

### 1.4.5. ClobberError

`This transaction has incompatible packages due to a shared path.`

解法：
```bash
conda clean --all
```

### 1.4.6. 离线打包
#### conda pack

1. install
```bash
conda install conda-pack -y
# pip install conda-pack
```

2. pack on computer-A
```bash
# output `myenv.tar.gz`
conda pack -n myenv

# output `othername.tar.gz`
conda pack -n myenv -o othername.tar.gz
```
> This is usually due to `pip` uninstalling or clobbering conda managed files,
resulting in an inconsistent environment. Please check your environment for
conda/pip conflicts using `conda list`, and fix the environment by ensuring
only one version of each package is installed (conda preferred).

```bash
conda pack -n myenv --ignore-missing-files
```

3. unpack on computer-B
  - source(不用安装conda)
    ```bash
    # uncompress
    mkdir -p myenv
    tar -xvf myenv.tar.gz -C myenv

    # activate
    source myenv/bin/activate

    # deactivate
    source deactivate
    ```
  - [安装conda](https://www.zhihu.com/question/60431332/answer/2176114645)
    ```bash
    # uncompress
    mkdir -p $Anaconda/envs/myenv
    tar -xvf myenv.tar.gz -C $Anaconda/envs/myenv

    # 可以看到该环境了
    conda env list

    # conda-unpack
    Anaconda/envs/wrfpy/Scripts/conda-unpack
    ```
    实际上，可以直接本地的环境压缩传上去，完全不用conda pack
    ```bash
    local$ tar -cvf $Anaconda/envs/myenv/*
    remote$ mkdir -p $Anaconda/envs/myenv
    remote$ tar -xvf myenv.tar.gz -C $Anaconda/envs/myenv
    remote$ conda env list
    ```

### 1.4.7. conda env / yaml

What command should I execute to install packages from my YAML file？

`conda-env` command 
```bash
conda env export > environment.yaml

# 根据 yaml 文件创建环境
conda env create -n my_env --file ENV.yaml
# 根据 yaml 文件更新已经创建的环境
conda env update -n my_env --file ENV.yaml
```

然而安起来，还是总出问题。不如requirements.txt
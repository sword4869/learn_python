- [1. README](#1-readme)
  - [1.1. 问题一：系统python（apt安装的）还是conda的python？](#11-问题一系统pythonapt安装的还是conda的python)
  - [1.2. 问题二：conda install 还是 pip install](#12-问题二conda-install-还是-pip-install)
    - [1.2.1. 自己的环境时](#121-自己的环境时)
    - [1.2.2. 项目环境时](#122-项目环境时)

# 1. README
## 1.1. 问题一：系统python（apt安装的）还是conda的python？


**conda的python**！

理由：

> 系统python没有pip

出现场景的电脑系统：linux。

linux现在不带系统python3，`apt install python3`后发现安的python没有pip。

所以，与其用系统的python，不如直接安装conda，python和pip都有。

> 系统python没有环境管理功能

想要为一个项目创建一个单独的conda环境，python版本和库版本。如果使用系统python的话，就要卸载原来的python库，重新安装。

## 1.2. 问题二：conda install 还是 pip install

### 1.2.1. 自己的环境时

**conda install**！因为你是写着写着突然要安一个包。

> conda缓存

conda install把包缓存在`miniconda3/pkgs`下。

所以，想要创个新环境快点，而不是每次都重新下，就conda install。

> conda下没有

再去pip。

### 1.2.2. 项目环境时

**pip install**！有requirements.txt，那么直接全用pip安装`pip install -r requirements.txt`


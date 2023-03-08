- [1. notebook](#1-notebook)
  - [1.1. jupyter](#11-jupyter)
    - [1.1.1. 如何在 Jupyter Notebook 中切换 conda 虚拟环境？](#111-如何在-jupyter-notebook-中切换-conda-虚拟环境)
    - [1.1.2. 插件](#112-插件)
  - [1.2. VSCode](#12-vscode)
    - [1.2.1. 格式化](#121-格式化)
    - [1.2.2. 快捷键](#122-快捷键)
  - [1.3. 问题](#13-问题)
    - [1.3.1. 提示](#131-提示)
    - [1.3.2. 转换markdown](#132-转换markdown)

# 1. notebook

## 1.1. jupyter

### 1.1.1. 如何在 Jupyter Notebook 中切换 conda 虚拟环境？
```bash
conda install -n myenv ipykernel
conda install -n myenv nb_conda_kernels
conda activate myenv    # this is the environment for your project and code
jupyter notebook
```

安装好后，打开 jupyter notebook 就会显示所有的 conda 环境啦，点击随意切换。

![](https://img-blog.csdnimg.cn/img_convert/a87689a7f4efa74318f3882edba5b084.png)


### 1.1.2. 插件
conda 安的不行，就出来三个插件，用pip
```bash
conda activate myenv

pip install jupyter_contrib_nbextensions

jupyter contrib nbextension install

pip install jupyter_nbextensions_configurator

jupyter nbextensions_configurator enable
``` 
Autopep8：轻轻一击就能获得简洁代码

Autoscroll：限制输出空间

Codefolding: 折叠函数、if、for……

Collapsible Headings：折叠markdown title

ExecuteTime：执行时间

Go to Current Running Cells

Hide Header， Hide input，Hide input all

Hinterland：提示补全

Live Markdown Preview

Table of Contents (2)： 目录导航

隐藏代码输入：隐藏过程，展示结果

ExecuteTime：显示单元格的耗时

variable inspector：跟踪你的工作空间




## 1.2. VSCode

### 1.2.1. 格式化

选了右上角的conda环境, 提示 `Formatter yapf is not installed. Install?` `There is no Pip installer available in the selected environment.`

其实, jupyter noterbook 使用格式化程序时用的还是 系统python环境. 

你得 ctrl+shift+p, `Python: Select Interpreter`, 选择你的conda环境, 这才能格式化.

### 1.2.2. 快捷键

- Enter : 转入编辑模式

- 运行
  
  Shift-Enter : 运行本单元，选中或插入（最后一个Cell的时候）下个单元
  
  Ctrl-Enter : 运行本单元
  
  Alt-Enter : 运行本单元，在其下插入新单元

- Code/Markdown
  
  Y : 单元转入代码状态
  
  M :单元转入markdown状态 （目前尚不支持R 原生状态）

- Move cursor
  
  Up : 选中上方单元
  
  K : 选中上方单元

  Down : 选中下方单元

  J : 选中下方单元

  C: 复制单元

  V: 粘贴单元

  X: 剪贴单元

  Z: 恢复删除的单元 

- Manage cell

  A : 在上方插入新单元
  
  B : 在下方插入新单元

  D,D : 删除选中的单元

  Alt + ↑ / ↓ :向上/向下移动行

- Coding
  
  Ctrl + D: 选择一个/多个（相同）词

  Ctrl + / : 切换行注释

## 1.3. 问题
### 1.3.1. 提示
jupyter中代码提示也太慢了、太不全了吧，安装了插件Hinterland也不行，简直就是脱离了编译器写代码的感觉，这让我自己写，写不出来啊。

还是得vscode的notebook。

但是vscode没有目录啊，凑活吧。
### 1.3.2. 转换markdown

先用jupyter写，写好了变成markdown
```python
pip install jupyter_contrib_nbextensions
jupyter nbconvert --to markdown source.ipynb
```

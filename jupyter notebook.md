# Jupyter notebook

## 插件

Table of Contents 目录导航

隐藏代码输入：隐藏过程，展示结果

ExecuteTime：显示单元格的耗时

variable inspector：跟踪你的工作空间

Autopep8：轻轻一击就能获得简洁代码

# VSCode Jupyter notebook

## 格式化

选了右上角的conda环境, 提示 `Formatter yapf is not installed. Install?` `There is no Pip installer available in the selected environment.`

其实, jupyter noterbook 使用格式化程序时用的还是 系统python环境. 

你得 ctrl+shift+p, `Python: Select Interpreter`, 选择你的conda环境, 这才能格式化.

## 快捷键

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
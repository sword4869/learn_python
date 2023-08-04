
- [1. 启动](#1-启动)
- [2. 退出pdb](#2-退出pdb)
- [3. 查看源代码](#3-查看源代码)
- [4. 断点](#4-断点)
  - [4.1. 添加](#41-添加)
  - [4.2. 4、清除断点](#42-4清除断点)
  - [4.3. 禁用启用](#43-禁用启用)
  - [4.4. 忽略断点（运行n次）](#44-忽略断点运行n次)
  - [4.5. 条件断点](#45-条件断点)
- [5. 变量](#5-变量)
  - [5.1. 打印变量值](#51-打印变量值)
  - [5.2. 判断变量类型](#52-判断变量类型)
- [6. 逐行调试命令](#6-逐行调试命令)
- [7. 查看函数参数](#7-查看函数参数)

---

## 1. 启动


pdb有3种用法：

- `python3 -m pdb filename.py`
    - 不用额外修改源代码，在命令行下直接运行就能调试
    - 从文件的第一行开始

    ```python
    print('hello')
    l = 9

    print('world')
    print('world2')
    ```
    ```bash
    $ python3 -m pdb t.py
    > d:\git\learn_python\__pycache__\t.py(1)<module>()
    -> print('hello')
    (Pdb)
    ```
- 在被调试的代码中添加一行代码然后再正常运行代码

    ```python
    print('hello')
    l = 9
    import pdb; pdb.set_trace()
    print('world')
    print('world2')
    ```
    ```bash
    $ python .\__pycache__\t.py
    hello
    > d:\git\learn_python\__pycache__\t.py(4)<module>()
    -> print('world')
    (Pdb)
    ```

- 上述命令在python3.7 新版功能: 内置函数 `breakpoint()` 来代替。

    ```python
    print('hello')
    l = 9
    breakpoint()
    print('world')
    print('world2')
    ```


当你在命令行看到下面这个提示符时，说明已经正确打开了pdb
```bash
(Pdb) 
```

## 2. 退出pdb

`q(uit)`

退出调试器。 被执行的程序将被中止。

## 3. 查看源代码

当前位置（将要执行，还没执行的行）在代码中会用 `->` 这个符号标出来

`l(ist) [first[, last]]`:
- `l(ist)`: 查看当前位置前后5行源代码(共11行)
- `l(ist) 10`: 查看第10行周围的行
- `l(ist) 1, 20`: 查看第1行到第20行
 
`ll`/`longlist`: 查看当前函数或框架的所有源代码

## 4. 断点


`c(ont(inue))`:  执行到断点才停止。

### 4.1. 添加

```
b(reak) [([filename:]lineno | function) [, condition]]
tbreak [([filename:]lineno | function) [, condition]]
```
`tbreak` 临时断点，在第一次命中时会自动删除。

`tbreak` 的参数与 `break` 相同，下面只以 `break` 举例：
- `b`: 查看断点。显示所有断点（包括临时断点）
- `b lineno`: 在当前文件的第 lineno 行处设置一个断点
- `b filename:lineno`: 在 其他文件 filename 的第 lineno 行处设置一个断点
- `b function`: 在该函数执行的第一行设置断点

```bash
(Pdb) b 1
Breakpoint 1 at d:\git\check_git.py:1

(Pdb) tbreak 3
Breakpoint 2 at d:\git\check_git.py:3

(Pdb) b
Num Type         Disp Enb   Where
1   breakpoint   keep yes   at d:\git\check_git.py:1
2   breakpoint   del  yes   at d:\git\check_git.py:3
```


### 4.2. 4、清除断点

命令：

`cl(ear) [filename:lineno | bpnumber ...]`
- `cl`: 清除所有断点（但会先提示确认）
- `cl filename:lineno`：清除此行上的所有断点。当前文件也得指明，不然和删除断点序号的重复了。
- `cl bpnumber`: 单个断点序号。`cl bpnumber bpnumber2`: 多个断点序号（以空格分隔）

如果参数是 filename:lineno，则。如果参数是空格分隔的断点编号列表，则清除这些断点。如果不带参数，则）。

```
(Pdb) cl   
Clear all breaks? y
Deleted breakpoint 1 at d:\git\check_git.py:1
Deleted breakpoint 2 at d:\git\check_git.py:3

(Pdb) cl ../check_git.py:3
Deleted breakpoint 2 at d:\git\check_git.py:3


(Pdb) cl 1 2
Deleted breakpoint 1 at d:\git\check_git.py:1
Deleted breakpoint 2 at d:\git\check_git.py:3
```
### 4.3. 禁用启用

`disable [bpnumber ...]`
禁用断点，断点以空格分隔的断点编号列表给出。

`enable [bpnumber ...]`
启用指定的断点。

```
(Pdb) b
Num Type         Disp Enb   Where
7   breakpoint   keep yes   at d:\git\check_git.py:1
8   breakpoint   keep yes   at d:\git\check_git.py:3
9   breakpoint   keep yes   at d:\git\check_git.py:7

(Pdb) disable 7
Disabled breakpoint 7 at d:\git\check_git.py:1

(Pdb) b
Num Type         Disp Enb   Where
7   breakpoint   keep no    at d:\git\check_git.py:1
8   breakpoint   keep yes   at d:\git\check_git.py:3
9   breakpoint   keep yes   at d:\git\check_git.py:7

(Pdb) enable 7
Enabled breakpoint 7 at d:\git\check_git.py:1

(Pdb) b
Num Type         Disp Enb   Where
7   breakpoint   keep yes   at d:\git\check_git.py:1
8   breakpoint   keep yes   at d:\git\check_git.py:3
9   breakpoint   keep yes   at d:\git\check_git.py:7
```


### 4.4. 忽略断点（运行n次）

`ignore bpnumber [count]`

给指定断点设置一个忽略计数。当忽略计数为0时，断点变为活动状态；当非0时，则计数在断点命中且未被禁用时递减；如果省略忽略计数，则忽略计数设置为0；

- `ignore bpnumber [count]`： 忽略 count 次
- `ignore bpnumber`: 取消忽略

配合`c`运行n次。PS：`breakpoint already hit 4 times`感觉是不是错了。
```bash
> d:\git\learn_python\__pycache__\t.py(2)<module>()
-> for i in range(10):
(Pdb) l
  1     breakpoint()
  2  -> for i in range(10):
  3         print(i)
  4         print('hello', i)
[EOF]
(Pdb) b 3
Breakpoint 1 at d:\git\learn_python\__pycache__\t.py:3
(Pdb) ignore 1 3
Will ignore next 3 crossings of breakpoint 1.
(Pdb) c
0
hello 0
1
hello 1
2
hello 2
> d:\git\learn_python\__pycache__\t.py(3)<module>()
-> print(i)
(Pdb) b
Num Type         Disp Enb   Where
1   breakpoint   keep yes   at d:\git\learn_python\__pycache__\t.py:3
        breakpoint already hit 4 times
```
### 4.5. 条件断点

`condition bpnumber [condition]`
为断点设置一个新 condition，它是一个表达式，且它的计算值为 true 时断点才起作用。如果没有给出 condition，则删除现有条件，也就是将断点设为无条件。
```bash
(Pdb) b 3
Breakpoint 1 at d:\git\learn_python\__pycache__\t.py:3
(Pdb) condition 1 i==9 
New condition set for breakpoint 1.
(Pdb) c
0
hello 0
1
hello 1
2
hello 2
3
hello 3
4
hello 4
5
hello 5
6
hello 6
7
hello 7
8
hello 8
> d:\git\learn_python\__pycache__\t.py(3)<module>()
-> print(i)
(Pdb) i
9
(Pdb) b
Num Type         Disp Enb   Where
1   breakpoint   keep yes   at d:\git\learn_python\__pycache__\t.py:3
        stop only if i==9
        breakpoint already hit 10 times
```

## 5. 变量

### 5.1. 打印变量值

- `p expression`在当前上下文中计算表达式并打印其值。
- `pp expression`：更美观的打印
- `print()` 也可以使用，但它不是一个调试器命令，它只是执行 Python print() 函数。

```bash
(Pdb) p l
9
(Pdb) pp l
9
(Pdb) print(l)
9
```

### 5.2. 判断变量类型

`whatis expression`

```bash
(Pdb) whatis l
<class 'int'>

(Pdb) type(l)
<class 'int'>
```

## 6. 逐行调试命令

- `s(tep)`
    下一行。step 进入被调用函数内部并停止

- `n(ext)`
    下一行。next 不进入函数函数。

- `unt(il) [lineno]`
    如果不带参数，则下一行，直到行号比当前行大时停止。

- `r(eturn)`
    非函数，则下一行
    在函数中，会直接执行到函数返回处。

- `j(ump) lineno`
    设置即将运行的下一行。仅可用于堆栈最底部的帧。
    它可以往回跳来再次运行代码，也可以往前跳来跳过不想运行的代码。
    需要注意的是，不是所有的跳转都是允许的 -- 例如，不能跳转到 for 循环的中间或跳出 finally 子句。

    ```bash
    (Pdb) l
    1     breakpoint()
    2  -> print('hello')
    3     l = 9
    4     print('world')
    5     print('world2')
    [EOF]

    (Pdb) j 4
    > d:\git\learn_python\__pycache__\t.py(4)<module>()
    -> print('world')

    (Pdb) p l
    *** NameError: name 'l' is not defined
    ```


## 7. 查看函数参数

`a`: 在函数中时打印函数的参数和参数的值

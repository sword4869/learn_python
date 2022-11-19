- [os库](#os库)
- [subprocess库](#subprocess库)

# os库
- 库：`import os`
- 使用命令：`os.system('')`
- 缺点：每次使用一下`os.system('')`命令，就会弹出一个cmd窗口，然后执行完毕后关闭。如果多次使用的话，就很烦。
```python
import os

# adb shell xxx的封装
def execute(cmd):
    adbShell = "adb shell {cmdStr}"
    str = adbShell.format(cmdStr=cmd)
    print(str)
    os.system(str)


if __name__ == '__main__':
    # 完整命令的
    os.system("adb shell input keyevent 4")
    # adb shell xxx的封装
    execute("input keyevent 4")
```

# subprocess库
- 库：`import subprocess`
- 使用命令：`subprocess.run('', shell = True)`
- 特点：解决`os`库的问题，cmd窗口静默后台执行，不会弹出来烦你。`shell=True`表示命令将通过shell执行（默认`shell=False`）

PS：[python之subprocess模块详解--小白博客](https://www.cnblogs.com/zhou2019/p/10582716.html)
```python
import subprocess

if __name__ == '__main__':
    for i in range(50):
        subprocess.run("adb shell input keyevent 4",shell=True)
        print(i)
```


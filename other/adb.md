- [1. 链接问题](#1-链接问题)
  - [1.1. kill-server与start-server](#11-kill-server与start-server)
  - [1.2. 显示](#12-显示)
  - [1.3. 有线链接](#13-有线链接)
  - [1.4. 无线链接](#14-无线链接)
- [2. 常用](#2-常用)
  - [2.1. 权限root](#21-权限root)
  - [2.2. 文件传送 adb push与adb pull](#22-文件传送-adb-push与adb-pull)
  - [2.3. 安装软件 install](#23-安装软件-install)
  - [2.4. 卸载软件 uninstall](#24-卸载软件-uninstall)
- [3. adb shell终端](#3-adb-shell终端)
  - [3.1. 进入和退出](#31-进入和退出)
  - [3.2. input keyevent](#32-input-keyevent)
  - [3.3. input tap](#33-input-tap)
  - [3.4. input swipe](#34-input-swipe)
  - [3.5. screencap命令](#35-screencap命令)
  - [3.6. 获取手机屏幕分辨率](#36-获取手机屏幕分辨率)
  - [3.7. 同linux文件系统](#37-同linux文件系统)
    - [3.7.1. （1）ls](#371-1ls)
    - [3.7.2. （2）pwd](#372-2pwd)
    - [3.7.3. （3）cd](#373-3cd)
    - [3.7.4. （4）rm](#374-4rm)
    - [3.7.5. （5）mkdir](#375-5mkdir)
    - [3.7.6. （6）touch](#376-6touch)
    - [3.7.7. （7）cp](#377-7cp)
    - [3.7.8. （8）mv](#378-8mv)
- [4. 总结](#4-总结)
  - [4.1. 截图并传输到电脑上](#41-截图并传输到电脑上)
  - [设备大小](#设备大小)


---
# 1. 链接问题
## 1.1. kill-server与start-server
```bash
adb kill-server			#杀死连接的设备
adb start-server		#启动连接搜寻设备
```

## 1.2. 显示
```bash
adb devices
```

## 1.3. 有线链接
插上手机线后，开发者也打开后，usb调试也打开，然后在终端输入
```bash
adb devices
```
## 1.4. 无线链接
1. 将手机和电脑连在同一个局域网WIFI下
2. 查看手机的IP address (in Settings → About phone → Status).
3. **链接手机和电脑的数据线**
```bash
adb tcpip 5555
```
4. 现在**可以拔掉插头了**
5. 比如你的手机IP是`192.168.1.101`
```bash
adb connect 192.168.1.101:5555
```

# 2. 常用

## 2.1. 权限root
```bash
adb root
```
## 2.2. 文件传送 adb push与adb pull
push推送到手机上，pull从手机上提取出来

【命令格式: `<a>`$\to$`<b>`，都是从左到右的。】
- `adb push <电脑local> <手机remote>`

- `adb pull <手机remote> <电脑local>`

文件保存的路径为你使用adb命令时的当前目录

电脑的路径可为绝对路径：如`adb pull /sdcard/myworldstring/02.png D:/Mystring`
也可为只省略当前路径前缀的相对路径，如当前是`D:/`，
`adb pull sdcard/myworldstring/02.png Mystring`


## 2.3. 安装软件 install
新的应用（该应用未安装）：`adb install apk路径`
 
应用已安装，重安装覆盖： `adb install -r apk路径`

## 2.4. 卸载软件 uninstall
完全卸载：`adb uninstall 应用包(xxxx.xxx.com)`
卸载后保存软件配置和缓存文件：`abd uninstall -k 应用包(xxxx.xcom)`


# 3. adb shell终端
## 3.1. 进入和退出
> 进入

```bash
adb shell
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190929201039881.png)
这样输入在这个命令之下的命令就不用打`adb shell`。
比如：`adb shell input tap 400 800`，触摸屏幕（400,800）点，就可以进入adb shell模式简写为`input tap 455 838`
```
volume@lenovo:~$ adb shell
PD1616:/ $ input tap 455 838 
```

> 退出

```bash
exit
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190929202311208.png)

## 3.2. input keyevent
input keyevent值
```bash
input keyevent 3		// Home主界面
input keyevent 4		// Back
input keyevent 24		// Volume+
input keyevent 25		// Volume-
input keyevent 82		// Menu ，调出应用列表
input keyevent 26		// Power,电源键。并不能唤醒屏幕，只能锁屏

input keyevent 61		// "KEYCODE_TAB",制表符
input keyevent 62		// "KEYCODE_SPACE",空格
input keyevent 66		// "KEYCODE_ENTER",回车
input keyevent 67		// "KEYCODE_DEL",删除光标前面的字符
input keyevent 112		// "KEYCODE_DEL",删除光标后面的字符

input keyevent 19		// Up
input keyevent 20		// Down
input keyevent 21		// Left
input keyevent 22		// Right
input keyevent 23		// Select(Ok)
```

## 3.3. input tap
```
input tap x y
```
模拟触屏一次，以左上角为原点，横轴是x轴，纵轴是y轴
如：`input tap 400 500`，触摸(400,500)

## 3.4. input swipe
```bash
input swipe <x1> <y1> <x2> <y2>[<duration(ms)>]
```
模拟滑屏，从(x1,y1)到(x2,y2)，持续duration(ms)按压时间

## 3.5. screencap命令
【格式】
`screencap -p [FILENAME]`
在当下屏幕上截图，后面的路径是图片在设备中的文件路径（这个FILENAME在这里是绝对路径/sdcard/1.png）
- `-p`: save the file as a png.


## 3.6. 获取手机屏幕分辨率
```bash
wm size
```
## 3.7. 同linux文件系统
### 3.7.1. （1）ls
`ls sdcard/MyWorldString`	显示xxx路径下的所有文件
使用-a参数：`ls -a sdcard/Download`，显示xxx路径下的所有文件（包括隐藏的）
- `-i`：输出文件索引编号和文件
- `-n`：输出UIDS、GIDS、文件列表。
- `-R`：输出当前路径下所有目录中的文件。
- `-s`：输出文件的大小（以块数为单位)和文件


备注：内存卡是sdcard
### 3.7.2. （2）pwd
`pwd`，查看当前路径

### 3.7.3. （3）cd
`cd sdcard/MyWorldString`	进入到xxx目录

### 3.7.4. （4）rm
`rm sdcard/MyWorldString`	删除文件或目录
- `-d`：删除testDemo目录以及目录中的所有文件和子目录，即使文件不为空
- `-f`：强制删除
- `-r`：删除testDemo目录以及目录中的所有文件和子目录

### 3.7.5. （5）mkdir
`adb shell mkdir/sdcard/Download`，创建xxx文件夹
- `-m`：创建文件夹并给文件夹赋予读写执行的权限
- `-p`：adb shell mkdir -p/sdcard/Download/Demo/test1，如果Demo目录不存在，执行该条命令会创建Demo目录和其子目录test1


### 3.7.6. （6）touch
`touch [options] <file >`		创建空白文件或改变文件时间戳



### 3.7.7. （7）cp
`cp [options] <source> <dest>`
如：`cp /sdcard/Download/Demo/test1.log /sdcard/Download/` ，把test1.log复制到/sdcard/Download/路径下
复制文件，不能用于文件夹之间的复制，该版本尝试无法进行目录复制。

### 3.7.8. （8）mv
`mv [options] <source> <dest>`
移动或者重命名文件。
移动文件：
`mv /sdcard/Download/test1.log /sdcard/Download/Demo/`
重命名：
`mv /sdcard/Download/Demo/test1.log  /sdcard/Download/Demo/test.lg`

# 4. 总结
## 4.1. 截图并传输到电脑上
```bash
# 1.截屏保存在手机中，是/sdcard/1.png
# 2.上传到电脑上
# 3.删除手机中保存的图片
adb shell screencap -p /sdcard/1.png
adb pull /sdcard/1.png
adb shell rm /sdcard/1.png
```
```python
import subprocess
import PIL

def get_screen():
    '''screen shot and upload'''
    cmds = ['adb shell screencap -p /sdcard/1.png',
            'adb pull /sdcard/1.png',
            'adb shell rm /sdcard/1.png']
    for cmd in cmds:
        subprocess.check_output(cmd, shell=True)
    return Image.open('1.png').convert("RGB")
```

## 设备大小
```python
import re
import subprocess

def get_size():
    '''width x height'''
    cmd = 'adb shell wm size'
    size = subprocess.check_output(cmd, shell=True)
    size = bytes.decode(size)
    size = re.findall('[0-9]+', size)
    return (int(size[0]), int(size[1]))
```
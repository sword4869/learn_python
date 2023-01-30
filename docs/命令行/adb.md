```python
import subprocess

if __name__ == '__main__':
    # adb多重点击
    for i in range(50):
        subprocess.run("adb shell input keyevent 4", shell=True)
        print(i)
```


# 修改手机时间

`adb shell date xxx`，但如果root了但不彻底，就得用su的方式
```bash
$ adb shell
$ su
# date '20:45:00'
Mon Jan 30 20:45:00 CST 2023
# date
Mon Jan 30 20:45:00 CST 2023

# date '10:10'
# date '10:10:10'
# date 100112361981.55

# exit
$ // exit后时间才生效
```

```python
def big_clip(self, str_time):
    def small_clip(cmd):
        pg.typewrite(cmd)
        pg.press('enter')

    small_clip(f"date '{str_time}'")
    small_clip('exit')
    small_clip('su')
```
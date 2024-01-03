- [1. 主窗口](#1-主窗口)
  - [1.1. 确认关闭](#11-确认关闭)
- [2. 弹出窗口](#2-弹出窗口)
  - [2.1. popup](#21-popup)
  - [2.2. progressbar, debug](#22-progressbar-debug)
- [3. 元素类](#3-元素类)
  - [3.1. Table](#31-table)


---

```bash
pip install PySimpleGUI
```
```
>>> import PySimpleGUI as psg
>>> psg.main()
```
## 1. 主窗口

```python
import PySimpleGUI as psg

# 行 列
layout = [
    [psg.Text("Name "), psg.Input()],
    # key: 约定是是一个大写字符串，前后跟一个"-"字符。但是，可以任何字符串
    [psg.Text("Address "), psg.Input(key="-AD-")],
    [psg.Text(key="-OUT-"), psg.Button("tap1", key="-OK-"), psg.Button("tap2"), psg.Exit()],
]
window = psg.Window(
    "HelloWorld",
    layout,
    # no_titlebar=True,  # 无边框
    disable_close=True,  # 禁用关闭
    alpha_channel=0.8,  # 窗口的不透明度
    grab_anywhere=True,  # 窗口可移动
    keep_on_top=True,  # 窗口将保持在当前窗口之上
    resizable=True    # resize
)

while True:
    event, values = window.read()
    print(event, values)
    # -OK- {0: '', '-AD-': ''}

    # None 即 psg.WIN_CLOSED
    if event in (None, "Exit"):
        break
    # button有两种方式：
    elif event == "-OK-":   # button_text 被 key 取代
        window["-OUT-"].update("tap1")
        # 禁用button, 一样两种
        window["-OK-"].update(disabled=True)
    elif event == "tap2":   # 直接使用 button_text
        window["-OUT-"].update("tap2")
        window["-OK-"].update(disabled=False)
window.close()
```
### 1.1. 确认关闭
```python
import PySimpleGUI as psg

layout = [
    [psg.Text('Hello')],
]
window = psg.Window("Calculator", layout, enable_close_attempted_event=True)
while True:
    event, values = window.read()
    print(event, values)

    if (
        event == psg.WINDOW_CLOSE_ATTEMPTED_EVENT
        and psg.popup_yes_no("Do you really want to exit?") == "Yes"
    ):
        break
    if event == psg.WIN_CLOSED:
        break
```

## 2. 弹出窗口
### 2.1. popup


| 类型 | 参数 | 说明 |
| --- | --- | --- |
| Any | \*args | 要在弹出窗口中显示的值 |
| Str | title | 窗口的可选标题。 |
| (str, str) 或 None | button\_color | 显示按钮的颜色（文本颜色、按钮颜色） |
| Str | background\_color | 窗口背景色 |
| Str | text\_color | 文字颜色 |
| Bool | auto\_close | 如果为True，窗口将自动关闭 |
| Int | auto\_close\_duration | 在自动关闭窗口之前保持窗口打开的时间（以秒为单位） |
| Bool | non\_blocking | 如果为 True 则将立即从函数返回，而无需等待用户输入。 |
| Tuple\[font\_name, size, modifiers\] | font | 指定字体系列、大小等。元组或单个字符串格式"名称大小样式"。 |
| Bool | grab\_anywhere | 如果为 True 则可以抓取任意位置移动窗口。 |
| (int, int) | Location | 在屏幕上显示窗口左上角的位置。 默认为屏幕居中的窗口 |
| Bool | keep\_on\_top | 如果为 True，窗口将保持在所有当前窗口之上 |
| Bool | modal | 如果为 True，则弹出窗口的行为类似于模态窗口。 默认 = True |

```python
import PySimpleGUI as psg

### 返回值可以确定点击了
print(psg.popup("Hello World")) # OK
print(psg.popup_ok("Hello World"))  # OK
print(psg.popup_cancel("Hello World")) # Cancelled
print(psg.popup_error("Hello World")) # Error
print(psg.popup_scrolled("1\n2", title="Scrolled Popup"))    # OK


### 选项
ch = psg.popup_ok_cancel(
    "Press OK to proceed: ", "Press Cancel to stop", title="OKCancel"
)
print(f"You pressed {ch}")  # OK Cancel

ch = psg.popup_yes_no("Do you want to Continue?", title="YesNo")
print("You clicked: ", ch)  # Yes No


### select
text = psg.popup_get_text("Enter your name", title="Textbox")
print("You entered: ", text)

file = psg.popup_get_file("Select a file", title="File selector")
print("File selected: ", file)

folder = psg.popup_get_folder("Get folder", title="Folder selector")
print("Folder selected: ", folder)
```

### 2.2. progressbar, debug

```python
import PySimpleGUI as psg
import time

for i in range(100):
    cancel = psg.one_line_progress_meter(
      'Progress Meter', 
      i, 
      100,
      'Character Counter',
      grab_anywhere=True
    )
    if cancel == False:
        break
        
    psg.Print(i)

    time.sleep(0.1)
# 当从主窗口弹出时，需要手动关闭
# psg.one_line_progress_meter_cancel()
```

## 3. 元素类

### 3.1. Table

```python
import PySimpleGUI as psg

rows = [
    ["Rajeev", 23, 78],
    ["Rajani", 21, 66],
    ["Rahul", 22, 60],
    ["Robin", 20, 75],
]
headings = ["Name", "Age", "Marks"]

tbl1 = psg.Table(
    values=rows,
    headings=headings,
    auto_size_columns=True,
    display_row_numbers=True,
    justification="center",
    key="-TABLE-",
    selected_row_colors="red on yellow",
    enable_events=True,
    expand_x=True,
    expand_y=True,
    enable_click_events=True,  # event: ('-TABLE-', '+CLICKED+', (0, 1))
)
layout = [[tbl1], [psg.Button("add")]]
window = psg.Window("Table Demo", layout, size=(715, 200), resizable=True)
while True:
    event, values = window.read()
    print("event:", event, "values:", values)
    if event == psg.WIN_CLOSED:
        break
    if "+CLICKED+" in event:
        psg.popup("You clicked row:{} Column: {}".format(event[2][0], event[2][1]))
    if "add" in event:
        rows.append(["John", 22, 22])
        tbl1.update(values=rows)
window.close()
```
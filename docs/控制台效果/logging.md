- [1. 显示级别](#1-显示级别)
- [2. 显示格式](#2-显示格式)
- [3. 写入文件](#3-写入文件)
- [4. PS : 没人这么写](#4-ps--没人这么写)


---

## 1. 显示级别
```python
import logging

# 默认显示级别是`logging.WARNING`

# 不显示
logging.debug('a debug message')
logging.info('an info message')
# 显示
logging.warning('a warning message')
logging.error('an error message')
logging.critical('a critical message')

# WARNING:root: a warning message
# ERROR:root: an error message
# CRITICAL:root: a critical message
```
修改级别 `logging.basicConfig(level=logging.INFO)`

```python
import logging
logging.basicConfig(level=logging.INFO)

logging.debug("Harmless debug Message")
logging.info("Just an information")
logging.warning("Its a Warning")
logging.error("Did you try to divide by zero")
logging.critical("Internet is down")

'''
INFO:root:Just an information
WARNING:root:Its a Warning
ERROR:root:Did you try to divide by zero
CRITICAL:root:Internet is down
'''
```
## 2. 显示格式
format : `'%(asctime)s - %(name)s - %(levelname)s - %(message)s'`
```python
import logging
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    datefmt="%m/%d/%Y %H:%M:%S",
)
logging.warning('a message')

# 09/06/2023 22:05:55 - root - WARNING - a message
```

## 3. 写入文件
```python
import logging
logging.basicConfig(
    filename='app.log', 
    filemode='w', 
)
logging.warning('This gets logged to a file')

# WARNING:root:This gets logged to a file
```
同 `print()` 一样会自动换行。

重启程序（重新导入库了）会重写文件，清空历史。

同一个程序中，就会接着写入。

## 4. PS : 没人这么写
```python
import logging
format_log = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
logging.basicConfig(filename='app.log', filemode='w', format=format_log)

# Creating an object
logger = logging.getLogger()

# Setting the threshold of logger to DEBUG
logger.setLevel(logging.DEBUG)

# Test messages
logger.debug("Harmless debug Message")
logger.info("Just an information")
logger.warning("Its a Warning")
logger.error("Did you try to divide by zero")
logger.critical("Internet is down")
```
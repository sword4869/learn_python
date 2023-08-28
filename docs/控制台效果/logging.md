## direct
As we didn’t set the configurations, by default the logging and info messages aren’t logged. 
```python
import logging

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
To make them noticeable we need to set the configuration manually: `logging.basicConfig(level=logging.DEBUG)`

format : `'%(asctime)s - %(name)s - %(levelname)s - %(message)s'`
```python
import logging
logging.basicConfig(
    level=logging.DEBUG, 
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    datefmt="%m/%d/%Y %H:%M:%S",
)
logging.debug('a debug message')

# 08/28/2023 19:19:16 - root - DEBUG - a debug message
```
```python
import logging
format_log = '%(name)s - %(levelname)s - %(message)s'
logging.basicConfig(filename='app.log', filemode='w', format=format_log)
logging.warning('This gets logged to a file')

# root - WARNING - This gets logged to a file
```
PS : 没人这么写
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
# time



## 某天的昨天
```python
from time import *

# 1 天=86400 秒
one_day = 86400

# 某天
t0_struct = strptime('2020-12-31','%Y-%m-%d')
t0_second = mktime(t0_struct)

# 昨天
t1_second = t0_second - one_day*1
t1_struct = localtime(t1_second)
t1_str = strftime('%Y-%m-%d', t1_struct)

print(t1_str)
'''2020-12-30'''
```

```python
# 如today = '2020-02-12'，day_count = 1，表示明天'2020-02-13'
def get_day(today, day_count):
    # 1 天=86400 秒
    one_day = 86400
    # 某天
    t0_struct = time.strptime(today,'%Y-%m-%d')
    t0_second = time.mktime(t0_struct)

    # toyday + day_count天
    t1_second = t0_second + one_day*day_count
    t1_struct = time.localtime(t1_second)
    t1_str = time.strftime('%Y-%m-%d', t1_struct)
    return t1_str
```

## 比较时间大小
1. 转化成相同格式的字符串后，直接比较字符串。如`'2020-01-30' < '2020-02-12`
<https://blog.csdn.net/sandalphon4869/article/details/104455348>

2. 转化成秒数历元时间，比较浮点数大小
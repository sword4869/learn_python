
- UTC/GMT
    GMT（Greenwich Mean Time）， 格林威治时。
    UTC（Coodinated Universal Time），协调世界时，又称世界统一时间、世界标准时间、国际协调时间。
    GMT是前世界标准时，UTC是现世界标准时。UTC 比 GMT更精准，但在不需要精确到秒的情况下，二者可以视为等同。
    在中国为UTC+8
    `Sat, 28 Jan 2023 23:39:22 GMT`


- timestamp
    时间戳（timestamp）的方式：通常来说，时间戳表示的是从1970年1月1日00:00:00开始按秒计算的偏移量。
    - `time.time()`是`1609387280.3342752`秒
    - `time.time_ns()`是`1685863994995683900`纳秒

- struct_time
    九位元组。
    如，定义变量是`t = struct_time((2020, 12, 31, 11, 56, 7, 3, 366, -1))`，
    输出显示是`time.struct_time(tm_year=2020, tm_mon=8, tm_mday=29, tm_hour=23, tm_min=39, tm_sec=44, tm_wday=5, tm_yday=242, tm_isdst=0)`

- str_time

    ```yml
    %y 两位数的年份表示(00-99)
    %Y 四位数的年份表示(000-9999)

    %m 月份(01-12)
    %b 本地简化的月份名称, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    %B 本地完整的月份名称, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    
    %d 月内中的一天(0-31)
    
    %H 24小时制小时数(0-23)
    %I 12小时制小时数(01-12)

    %p AM,PM

    %M 分钟数(00-59)
    %S 秒(00-59)

    %w 星期(0-6) ，星期天为星期的开始, ['0', '1', '2', '3', '4', '5', '6']
    %a 本地简化星期名称, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    %A 本地完整星期名称, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
    ---

    %j 年内的一天(001-366)

    %U 一年中的星期数(00-53) 星期天为星期的开始
    %W 一年中的星期数(00-53) 星期一为星期的开始

    %Z 当前时区的名称

    %% %号本身

    ---

    %d 本地相应的日期表示和时间表示
    
    %x 本地相应的年月日表示
    %X 本地相应的时分秒表示
    ```

    ```python
    struct_time = t.str_time2struct_time(format_st='%x-%X', str_time='01/01/23-21:12:14')
    print(t.struct_time2str_time(format_st='年%y-%Y | 月%m-%b-%B | 日%d | 时%H-%I | 上午下午%p | 分秒%M-%S | 星期几%w-%a-%A', struct_time=struct_time))
    print(t.struct_time2str_time(format_st='年内第几天%j | 星期下标%U-%W | 时区%Z | %%', struct_time=struct_time))
    print(t.struct_time2str_time(format_st='%c | %x | %X', struct_time=struct_time))
    # 年23-2023 | 月01-Jan-January | 日01 | 时21-09 | 上午下午PM | 分秒12-14 | 星期几0-Sun-Sunday
    # 年内第几天001 | 星期下标01-00 | 时区中国夏令时 | %
    # Sun Jan  1 21:12:14 2023 | 01/01/23 | 21:12:14
    ```

    ```python
    # 第几周的不同：%U %W
    >>> t1 = strptime('2020-01-05 11:56:07','%Y-%m-%d %H:%M:%S');
    >>> strftime('%U %W', t1);
    01 00
    ```
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/20201231123023705.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NhbmRhbHBob240ODY5,size_16,color_FFFFFF,t_70)

```python
import time

'''
def timestamp2struct_time(self, timestamp=time.time()):

这是错的，只会一直是程序最初运行的时间。因为timestamp=time.time()，这个是写死的，编译器就会固定。
'''
class TimeTransformer:
    def timestamp2struct_time(self, timestamp=None):
        if timestamp == None:
            timestamp = time.time()
        return time.localtime(timestamp)

    def struct_time2timestamp(self, struct_time=None):
        if struct_time == None:
            struct_time = time.localtime()
        return time.mktime(struct_time)

    def struct_time2str_time(self, format_st='%Y-%m-%d %H:%M:%S', struct_time=None):
        if struct_time == None:
            struct_time = time.localtime()
        return time.strftime(format_st, struct_time)

    def str_time2struct_time(self, format_st='%Y-%m-%d %H:%M:%S', str_time=None):
        if str_time == None:
            str_time = self.struct_time2str_time()
        return time.strptime(str_time, format_st)

    def timestamp2str_time(self, timestamp=None, format_st='%Y-%m-%d %H:%M:%S'):
        if timestamp == None:
            timestamp = time.time()
        return self.struct_time2str_time(format_st, self.timestamp2struct_time(timestamp))

    def str_time2timestamp(self, format_st='%Y-%m-%d %H:%M:%S', str_time=None):
        if str_time == None:
            str_time = self.struct_time2str_time()
        return self.struct_time2timestamp(self.str_time2struct_time(format_st, str_time))

    def GMTplus8(self, format_st, str_time):
        return self.timestamp2str_time(self.str_time2timestamp(format_st, str_time) + 8 * 60 * 60)

def main():
    print(time.time())
    print(time.localtime())

    t = TimeTransformer()
    print(t.timestamp2struct_time())
    print(t.struct_time2timestamp())
    print(t.struct_time2str_time())
    print(t.str_time2struct_time())
    print(t.timestamp2str_time())
    print(t.str_time2timestamp())

    str_time = 'Sat, 28 Jan 2023 23:39:22 GMT'
    format_st = '%a, %d %b %Y %X GMT'
    st = t.GMTplus8(format_st, str_time)
    print(st)   # 2023-01-29 07:39:22
    
    # 如果是写死的默认参数，这里打印出来的时间就不动
    while True:
        t = TimeTransformer().struct_time2str_time()
        print(t)


if __name__ == '__main__':
    main()
```
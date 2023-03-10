[Python之可变参数，*参数，**参数，以及传入*参数，**参数解包，*args，**kwargs的理解](https://blog.csdn.net/cadi2011/article/details/84871401)

定义函数
```python
# def printStr(普通参数, 默认值参数="默认值", *参数, **参数):
def my_first_blood(name, age=0, *args, **kwargs):
    # args = (), tuple
    # kwargs = {}, dict
    print(name)
    print(age)
    print(args)
    print(kwargs)

# "王" | 32 | "北京", "海淀" | style="开心"
my_first_blood("王", 32, "北京", "海淀", style="开心")
# 王
# 32
# ('北京', '海淀')
# {'style': '开心'}
```
解包
```python
first = (1,2,3)
print(*first)
# 1 2 3

second = [1,2,3]
print(*second)
# 1 2 3
 
third = "123"
print(*third)
# 1 2 3

fourth = range(4)
print(*fourth)
# 0 1 2 3
```
```python
def printStr(first, **dict):
    pass

d = {"name": "tyson", "age":"99"}
printStr(100, **d)
# 等同于 printStr(100, name="tyson", age="99") 
```
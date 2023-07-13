- [1. 字典dict](#1-字典dict)
  - [1.1. 1.字典类型定义](#11-1字典类型定义)
    - [1.1.1. {}](#111-)
    - [1.1.2. dict()](#112-dict)
    - [1.1.3. dict.fromkeys()](#113-dictfromkeys)
  - [1.2. 2.字典处理函数及方法](#12-2字典处理函数及方法)
    - [1.2.1. 修改字典](#121-修改字典)
    - [1.2.2. 获取值](#122-获取值)
    - [1.2.3. 返回所有信息](#123-返回所有信息)
    - [1.2.4. 删除](#124-删除)
    - [1.2.5. 拷贝](#125-拷贝)


---
# 1. 字典dict
## 1.1. 1.字典类型定义
理解映射：

- 映射是一种键（索引）和值（数据）的对应

- 序列类型有0...N整数作为数据的默认索引

字典类型：

（1）字典是键值对的集合，**键值对之间无序**

（2）采用大括号`{}`和`dict()`创建，键值对用冒号`:`表示

（3）字典的键唯一，值可以相同。

格式：
 
`<字典变量>={<键1>:<值1>,<键2>:<值2>}`
 
`<字典变量>[<键>]`
 
`<字典变量>[<键>]=<值>`

### 1.1.1. {}
```python
# 生成一个字典
d = {"中国": "北京", "美国": "华盛顿", "法国": "巴黎"}
print(d)
# {'中国': '北京', '美国': '华盛顿', '法国': '巴黎'}
 
# []用来向字典变量中索引或增加元素
print(d["中国"])
#'北京'
 
# 生成一个空的字典
de = {}
print(type(de))
# <class 'dict'>
```

### 1.1.2. dict()
引号
```python
# 需要引号
a = {
    'type': 'SetValPipelineHook', 
    'training': True
}
# 不需要引号
b = dict(type='SetValPipelineHook', training=True)
```
数字作为键的问题
```python
a = {
    '1': 2,
    1: 3
}
print(a['1'], a[1])
# 2 3

# 不可以以数字作为值
# b = dict(1=2)
# SyntaxError: expression cannot contain assignment, perhaps you meant "=="?
```
zip
```python
list1 = ['Author', 'age', 'sex']
list2 = ['Python当打之年', 99, '男']
dic4 = dict(zip(list1, list2))
```
### 1.1.3. dict.fromkeys()

```python
list1 = ['Author', 'age', 'sex']
dic1 = dict.fromkeys(list1)
dic2 = dict.fromkeys(list1, 'Python当打之年')

# dic1 = {'Author': None, 'age': None, 'sex': None}
# dic2 = {'Author': 'Python当打之年', 'age': 'Python当打之年', 'sex': 'Python当打之年'}
```
## 1.2. 2.字典处理函数及方法
函数或方法；

- `len(d)`：返回字典d中元素的个数
- `k in d`：判断键k是否在字典d中，如何在返回True，否则返回False

 
### 1.2.1. 修改字典

- `<字典变量>[<键>]=<值>`: 新增或者修改。
- `d1.update(d2)`：如果被更新的字典中己包含对应的键-值对，那么原键-值对会被覆盖，如果被更新的字典中不包含对应的键-值对，则添加该键-值对

删除：
- `d.pop(k,<default=None>)`: 删除字典给定键 key 所对应的值，返回值为被删除的值。key值必须给出。 否则，返回default值。不指定默认值还是报错，`d.pop('中国1')`报错，`d.pop('中国1', 111)`返回111
- `d.popitem()`：弹出最后一个键值对，以元组形式返回。空则报错`KeyError: 'popitem(): dictionary is empty'`
### 1.2.2. 获取值

- 没就报错，`KeyError: 'xxx'`
  - `<字典变量>[<键>]`
  - `d.popitem()`: 最后一个，且删除
- 不报错，没就返回默认值：
  - `d.get(k,<default=None>)`
  - `d.pop(k,<default=None>)`: 且删除
### 1.2.3. 返回所有信息

- `d.item()`：返回字典d中所有键值对信息，`[(k,v), (k,v)]`

- `d.keys()`：返回字典d中所有的键信息，`[k, k]`
 
- `d.values()`：返回字典d中所有的值信息，`[v, v]`

```python
d = {"中国": "北京", "美国": "华盛顿", "法国": "巴黎"}
print(d.items())
print(d.keys())
print(d.values())
# dict_items([('中国', '北京'), ('美国', '华盛顿'), ('法国', '巴黎')])
# dict_keys(['中国', '美国', '法国'])
# dict_values(['北京', '华盛顿', '巴黎'])
```

### 1.2.4. 删除

```python
d.clear()      # 清空字典所有条目
del d['中国']  # 删除字典的某个键值对        
del d          # 删除字典
```
### 1.2.5. 拷贝

`copy()` 用于返回一个字典的半深拷贝。
```python
list1 = ['Author', 'age', 'sex']
list2 = ['Python当打之年', 99, '男']
dic1 = dict(zip(list1, list2))

dic2 = dic1 # 浅拷贝: 引用对象
dic3 = dic1.copy() # 深拷贝父对象（一级目录），子对象（二级目录）不拷贝，还是引用
dic1['age'] = 18

# dic1 = {'Author': 'Python当打之年', 'age': 18, 'sex': '男'}
# dic2 = {'Author': 'Python当打之年', 'age': 18, 'sex': '男'}
# dic3 = {'Author': 'Python当打之年', 'age': 99, 'sex': '男'}
```
其中 dic2 是 dic1 的引用，所以输出结果是一致的，dic3 父对象进行了深拷贝，不会随dic1 修改而修改，子对象是浅拷贝所以随 dic1 的修改而修改，注意父子关系。

拓展深拷贝：copy.deepcopy()
```python
import copy

list1 = ['Author', 'age', 'sex']
list2 = ['Python当打之年', [18,99], '男']
dic1 = dict(zip(list1, list2))

dic2 = dic1
dic3 = dic1.copy()
dic4 = copy.deepcopy(dic1)
dic1['age'].remove(18)
dic1['age'] = 20

# dic1 = {'Author': 'Python当打之年', 'age': 20, 'sex': '男'}
# dic2 = {'Author': 'Python当打之年', 'age': 20, 'sex': '男'}
# dic3 = {'Author': 'Python当打之年', 'age': [99], 'sex': '男'}
# dic4 = {'Author': 'Python当打之年', 'age': [18, 99], 'sex': '男'}
dic2 是 dic1 的引用，所以输出结果是一致的；dic3 父对象进行了深拷贝，不会随dic1 修改而修改，子对象是浅拷贝所以随 dic1 的修改而修改；dic4 进行了深拷贝，递归拷贝所有数据，相当于完全在另外内存中新建原字典，所以修改dic1不会影响dic4的数据

```




```python
d={"中国":"北京","美国":"华盛顿","法国":"巴黎"}


#### 键 key

print(d.keys())
# dict_keys(['中国', '美国', '法国'])	    #可以for遍历

print("中国"in d)               # True
print("中国"in d.keys())        # True

#### 值 value

print(d.values())
# dict_values(['北京', '华盛顿', '巴黎'])

print("北京"in d.values())      # True


#### 键值对
for k in d:
    print(k, ',', d[k])

# 中国 北京
for k, v in d.items():
    print(k, ',', v)

'''
中国 , 北京
美国 , 华盛顿
法国 , 巴黎
'''
```
```python
print(d.get("中国","伊斯兰堡"))
# '北京'
 
print(d.get("巴基斯坦","伊斯兰堡"))
# '伊斯兰堡'
 
print(d.popitem())
# ('法国', '巴黎')
# 增加相同元素会出现更新
 
d={}
 
# 增加元素方法1：d[新增键]=新值
d["a"]=1;d["b"]=2
print(d)
# {'a': 1, 'b': 2}
 
# 更新现象
d["b"]=3
print(d)
# {'a': 1, 'b': 3}
 
# 增加元素方法2：d1.update(d2)
d2={'c':3}
d.update(d2)
print(d)
# {'a': 1, 'b': 3, 'c': 3}
 
# 更新现象
d3={'c':9}
d.update(d3)
print(d)
# {'a': 1, 'b': 3, 'c': 9}
```
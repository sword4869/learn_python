# json
内置库

## json_str
> 转化
```python
import json

data = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}

# 将 Python 对象编码成 JSON 字符串(可以观察到是双引号)
json_str = json.dumps(data)
print(json_str)
print(type(json_str))

'''
{"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}
<class 'str'>
'''
```



> 加载
```python
import json

jsonData = '{"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}'
text = json.loads(jsonData)
print(text)

'''
{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
'''
```
## json文件
> 写入
```python
import json

data = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
with open("some.json", "w", encoding='utf-8') as f:
    json.dump(data, f)
```
> 读取
```python
import json

with open("some.json", encoding='utf-8') as f:
    text = json.loads(f.read())
    print(text)

print(type(text))

'''
{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
dict
'''
```
## Advance

### 中文问题

```python
import json

data = {'a': 1, 'b': '坐忘道'}

json_str = json.dumps(data)
print(json_str)
# {"a": 1, "b": "\u5750\u5fd8\u9053"}

json_str_ok = json.dumps(data).encode('utf-8').decode('unicode_escape')
print(json_str_ok)
# {"a": 1, "b": "坐忘道"}
```
### 缩进

```python
import json

data = {'a': 1, 'b': {'c': 3}}
with open("some.json", "w", encoding='utf-8') as f:
    # 默认缩进是0, 现在每层前缩进4个空格
    json.dump(data, f, indent=4)
'''
{
    "a": 1,
    "b": {
        "c": 3
    }
}
'''
```
## 注意
### 不能跳步创造数组或字典
```python
d = {'size':1}
d['world'] = 'fuck'
# 不能一步到位
# d['fuck1']['fuck2'] = 'fuck!!!!'
```
```python
e = {'size':1, 'fuck1':{}}
e['fuck1']['fuck2'] = 'fuck!!!!'
e

'''
{'size': 1, 'fuck1': {'fuck2': 'fuck!!!!'}}
'''
```
```python
f = {'size':1, 'fuck1':[]}
# f['fuck1'][0] = 'create is bad' 不行
f['fuck1'].append('first')
print(f)
f['fuck1'][0] = 'alter is ok'
print(f)

'''
{'size': 1, 'fuck1': ['first']}
{'size': 1, 'fuck1': ['alter is ok']}
'''
```

# 传入字典而不是数组

整体是一个字典
```python
data = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
# data = [{'a': 1}, {'b': 2}, {'c': 3}, {'d': 4}, {'e': 5}] 列表是错的
json_str = json.dumps(data)
```
# 和字典的区别

json字符串:
- 里面必须是双引号, 而不是单引号

- 这是字符串, 而不是字典类型

```python
import json
# json_str
jsonData = '{"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}'

text = json.loads(jsonData)
print(text)
```

json文件:
```json
{"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}
```

# json中不能有注释
```json
// comment
{
  "key": "value" // comment
}
```

解法：
使用字段key加前缀做注释key

例如加入属性的key是`xyz`, 则`?xyz`作为注释字段。这样的好处是，没有重名的字段，完全符合JSON协议。常用的前缀还有`#,` `_`, `__`等
```json
{
  "name": "Roman",
  "?name": "defines a nickname"
}
```

# json的对象不能以逗号结尾

```json
{
  "name": "Roman",
}
```

错误的

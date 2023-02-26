- [1. file](#1-file)
  - [1.1. 文件名的问题](#11-文件名的问题)
    - [1.1.1. 禁止字符](#111-禁止字符)
    - [1.1.2. 不可以见字符](#112-不可以见字符)

# 1. file
## 1.1. 文件名的问题
### 1.1.1. 禁止字符
```python
fileName = '"stop，things".html'
with open(fileName, 'w', encoding='utf-8') as fp:
    ...
```
问题不是中文字符`，`，而是文件的命名规则，不能带有`"`。所有的禁止字符是英文符号`" ? : * < > | \ /`（英文的引号不行`"`，但是中文的引号可以`“”`）

### 1.1.2. 不可以见字符

```python
fileName = 'father\u200b.html'
with open(fileName, 'w', encoding='utf-8') as fp:
    print('es')
```
`\u200b`之类的字符就是不可见字符，直接替换`s = s.replace('\u200b', '')`可以。

但是并不是只有`\u200b`这一个，还有类似`\x10`之类乱七八槽的。

所以我们用`c.isprintable()`来判断。


```python
def getStr(s):
    s = s.replace('"', '')
    s = s.replace('?', '')
    s = s.replace(':', '')
    s = s.replace('*', '')
    s = s.replace('<', '')
    s = s.replace('>', '')
    s = s.replace('|', '')
    s = s.replace('\\', '')
    s = s.replace('/', '')

    # unprintable char
    s = ''.join(c for c in s if c.isprintable())
    return s
```
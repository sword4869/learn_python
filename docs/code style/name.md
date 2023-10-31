- [1. Casing conventions](#1-casing-conventions)
- [2. Variables](#2-variables)
  - [2.1. Variables should be nouns](#21-variables-should-be-nouns)
  - [2.2. iterables](#22-iterables)
  - [2.3. key-values](#23-key-values)
  - [2.4. bool](#24-bool)
  - [2.5. 拒绝通用词](#25-拒绝通用词)
- [3. Functions](#3-functions)
  - [3.1. Functions should be verbs](#31-functions-should-be-verbs)
  - [3.2. 使用专业术语](#32-使用专业术语)
- [4. Class](#4-class)
  - [4.1. Suffixes are fine](#41-suffixes-are-fine)
  - [4.2. When to create a function or a class in Python?](#42-when-to-create-a-function-or-a-class-in-python)

---

# 1. Casing conventions

naming conventions:

- Pascal case:
  
  The first letter in the identifier and the first letter of each subsequent concatenated word are capitalized. For example: `BackColor`.

- Camel case:
  
  The first letter of an identifier is lowercase and the first letter of each subsequent concatenated word is capitalized. For example: `backColor`

- underscore:
  
  `back_color`

By default follow these naming conventions:

| Type                  | Public                  | Private                |
| --------------------- | ----------------------- | ----------------------- |
| Packages(directories) | `lower_with_under`    ||
| Modules(files)        | `lower_with_under.py` ||
| Functions and methods | `lower_with_under()`  | `_lower_with_under()` |
| Classes               | `CapWords`            ||
| Constants             | `ALL_CAPS_UNDER`      | `_ALL_CAPS_UNDER`     |

Disclaimer about "private": Mark your private method/function with a single initial underscore to state it's intended for private use only and live with it.



# 2. Variables
## 2.1. Variables should be nouns

Should always be nouns, never verbs (which clarifies the difference between functions).

Good examples:

```python
plane = Plane()
customer_id = 5
KEY_COMPARISON = "abc"
```

Bad examples:

```python
fly = Plane()
get_customer_id = 5
COMPARE_KEY = "abc"
```

If your variable/constant is a list or collection, make it plural!

## 2.2. iterables

plural
```python
customer_ids = {5, 12, 22}

users = ['Rocky', 'leey']

# Even if it contains only one item
planes = [3] 
```
```python
for user in users:
    pass
```
## 2.3. key-values
key-values
```python
students_scores = {
    'Rocky': 100,
    'leey': 60
}
```
## 2.4. bool
用 ‘has’ 或 ‘is’ 前缀命名 。

对于保存布尔值的变量，对其命名的时候将 ‘has’ 或 ‘is’ 作为其前缀，可以使它们在代码中的可读性更强：
```python
is_succeed = True
has_cache = False
```
## 2.5. 拒绝通用词
1、写代码的时候，不管是全局变量还是局部变量，都应该避免使用 ‘list’、‘dict’、‘elements’ 等词作为变量名，它们会使代码变的难以阅读、理解。

2、像 ‘abs’、‘str’、‘eval’ 等内置函数也应该避免使用，防止出现在当前命名空间中被屏蔽的尴尬情况。

3、一些列的前缀和后缀。虽然在编程中非常常见，但事实上应该避免出现在函数和类名称中，比如 ‘object’、‘handle’、‘do’ 等词，这样做的原因是它们的含义模糊，摸棱两可，并且没有向实际名称中添加任何信息。

4、许多包的名称都应该被避免，诸如 ‘tools’、‘utils’、‘core’ 的名称很大可能会变成一大堆不相关的、质量非常差的代码片段，虽然它们在名称上并没有本质的错误，但为了防止问题的出现，还是直接将其作为自己自定义包的命名扼杀在萌芽状态为好。
# 3. Functions

## 3.1. Functions should be verbs

Functions and methods represent an action or actionable stuff.

Actions are clearly stated by verbs.

A few good examples from REAL projects I worked on before:

```python
def get_orders():
    ...

def acknowledge_event():
    ...

def get_delivery_information():
    ...

def publish():
    ...
```

A few bad examples:

```python
def email_send():
    ...

def api_call():
   ...

def specific_stuff():
   ...
```

`email_send` is more suitabe to use as a entity of a class.

```python
email_send.title = "title"
email_send.dispatch()
```

Exceptions to this rule are just a few but they exist.

- Creating a `main()` function to be invoked in the main entry point of your application is a good reason to skip this rule.
- Using `@property` to treat a class method as an attribute is also valid.
## 3.2. 使用专业术语
这个算是第一条的延申，拒绝通用词，相反的使用特定领域特定的专业术语，比如下面的代码：

def calculation(datas):
    for data in datas:
        yield data ** 2
这部分代码的命名就有些问题，比如函数名 calculation 是计算的意思，计算分很多种，到底计算什么呢？这样很不直观，如果是换成下面这样：

def squares(numbers):
    for number in numbers
        yield number ** 2
这种的命名就比第一种清晰明了很多。

# 4. Class

## 4.1. Suffixes are fine

Always name it in **singular** instead of plural.

Prefer classes with self explanatory names. It's fine to have suffixes like `Service`, `Strategy`, `Middleware`.

Example of usage without suffix:

```python
email = Email() # inferred usage example
email.title = "Title"
email.body = create_body()
email.send_to = "guilatrova.dev"

send_email(email)
```

If you name it just as "Email", its purpose is not clear. Someone might think it may represent an entity. So You should name it "EmailSender" or "EmailService".

## 4.2. When to create a function or a class in Python?

Consider the same storages module with 4 functions:

```python
def format_for_debug(some_data):
    ...

def save_debug(some_data):
    """Prints in the screen"""
    formatted_data = format_for_debug(some_data)
    print(formatted_data)


def create_s3(bucket):
    """Create s3 bucket if it doesn't exists"""
    ...

def save_s3(some_data):
    s3 = create_s3("bucket_name")
    ...
```

I can see two groups of functions and no reason to keep them in different modules as they seem small, thus I'd enjoy having them defined as classes:

```python
class DebugStorage:
    def format_for_debug(self, some_data):
        ...

    def save_debug(self, some_data):
        """Prints in the screen"""
        formatted_data = self.format_for_debug(some_data)
        print(formatted_data)


class S3Storage:
    def create_s3(self, bucket):
        """Create s3 bucket if it doesn't exists"""
        ...

    def save_s3(self, some_data):
        s3 = self.create_s3("bucket_name")
        ...
```

Here's a rule of thumb:

- Always start with functions
- Grow to classes once you feel you can group different subsets of functions

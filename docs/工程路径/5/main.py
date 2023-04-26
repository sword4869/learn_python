import src

print(dir(src))

# for i in dir(src):
#     print(exec(i))

src.mod1.mod1_main.call()   
# 报错，AttributeError: module 'src.mod1' has no attribute 'mod1_main'
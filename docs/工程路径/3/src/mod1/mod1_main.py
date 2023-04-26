import src.mod2.mod2_main as mod2_main

# import ..mod2.mod2_main as mod2_main 
# SyntaxError: invalid syntax
# Relative imports cannot be used with "import .a" form; use "from . import a" instead


def call():
    mod2_main.show()
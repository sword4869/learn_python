- [1. Structure your Python project](#1-structure-your-python-project)
  - [1.1. The reasoning behind a src directory](#11-the-reasoning-behind-a-src-directory)
  - [1.2. Creating modules and entry points](#12-creating-modules-and-entry-points)
  - [1.3. Defining main for modules](#13-defining-main-for-modules)

---

# 1. Structure your Python project

```
<project>
├── src
│   ├── <module>/*
│   │    ├── __init__.py
│   │    ├── __main__.py
│   │    └── many_files.py
│   │
│   └── tests/*
│        └── many_tests.py
│
├── .gitignore
├── pyproject.toml
└── README.md
```

- src directory
- `__main__.py`



## 1.1. The reasoning behind a src directory

keep all your module files inside a `src` dir, and all tests living side by side with it.

Example of without src: 
```
non_recommended_project
├── <module_a>/*
│     ├── __init__.py
│     └── many_files.py
│
├── .gitignore
│
├── tests/*
│    └── many_tests.py
│
├── pyproject.toml
│
├── <module_b>/*
│     ├── __init__.py
│     └── many_files.py
│
└── README.md
```

It's boring to have things, `module_a` and `module_b` in this case, so apart due to the alphabetical sorting of the IDE.

The main reason behind the src dir is to keep active project code concentrated inside a single directory while settings, CI/CD setup, and project metadata can reside outside of it.


## 1.2. Creating modules and entry points

Every application has an entry point.

It means that there's a single module that runs your application. It can be either a single script or a big module.

Whenever you're creating an entry point, make sure to add a condition to ensure it's being executed and not imported:

```python
def execute_main():
    ...


if __name__ == "__main__":  # 👈 Add this condition
    execute_main()
```

By doing that you ensure that any imports won't trigger your code by accident. Unless it's explicitly executed.

## 1.3. Defining main for modules

You might have noticed some python packages that can be invoked by passing down `-m` like:

```bash
python -m pytest
python -m tryceratops
python -m faust
python -m flake8
python -m black
```
Such packages are treated almost like regular commands since you can also run them as:
```
pytest
tryceratops
faust
flake8
black
```
To make this happen you need to specify a single `__main__.py` file inside your main module.

Don't forget you still need to include the check `__name__ == "__main__"` inside your `__main__.py` file.

When you install your module, you can run your project as `python -m example_module`.
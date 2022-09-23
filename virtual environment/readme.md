# create

```bash
# ENVIRONMENT contain path, such as 
# tutorial(current directory),
# ~/hello-world/tutorial(non-current directory)
$ python3.8 -m venv ENVIRONMENT
```
containing a copy of the Python interpreter


A common directory location for a virtual environment is `.venv.`

# activate

```bash
$ source ENVIRONMENT/bin/activate
```

# summary

## venv & virtualenv

Since Python 3.3, `venv` has been integrated into the standard library.
`venv` is a subset of `virtualenv`.

## other

virtual environments are mere shells, that contain little within themselves, and borrow most from the system python (this is what you installed, when you installed python itself). This does mean that if you upgrade your system python your virtual environments might break, so watch out. The upside of this, referring to the system python, is that creating virtual environments can be fast.


> question: is this like docker? System python and virtual python is a stack architecture.
> Q1: If you download a package in your virtual environment, when you deleted it, is there still hava a package quick load in other environment using the same package. What's more, when you don't delete it and use it in other virtual environment, what happened? 
> Q2: This broken problem, could it happen to the conda?
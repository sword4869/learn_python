

## conda env / yaml

What command should I execute to install packages from my YAML file？

`conda-env` command 
```bash
conda env export > environment.yaml

# 根据 yaml 文件创建环境
conda env create -n my_env --file ENV.yaml
# 根据 yaml 文件更新已经创建的环境
conda env update -n my_env --file ENV.yaml
```

import os
import sys
# -d 只显示目录
# -a 显示所有文件
# -L num  显示几层 ，不显示隐藏文件


def print_color(color, argv):
    if color == "green":
        print("\033[32m", argv, "\033[0m")
    elif color == "red":
        print("\033[31m", argv, "\033[0m")
    elif color == "yellow":
        print("\033[33m", argv, "\033[0m")
    else:
        print(argv)


def is_hidden(file):
    file_name = os.path.basename(file)
    if file_name[0] == '.':
        return True
    else:
        return False



def get_len_of_listdir(lst):
    len_of_listdir = 0
    for file in lst:
        len_of_listdir += 1
    return len_of_listdir


def tree_dir(dir,layer=0):
    files = sorted(os.listdir(dir))
    file_lst=[]
    dir_lst=[]
    for file in files:
        file_path = os.path.join(dir, file)
        if os.path.isfile(file_path):
            file_lst.append(file)
        else:
            dir_lst.append(file)
    len_of_listdir = len(dir_lst)
    len_of_listfile = len(file_lst)
    

    index = 0
    for file in file_lst:
        file_path = os.path.join(dir, file)
        print("│   " * (layer), end="")
        if index == len_of_listfile -1 and len_of_listdir == 0:
            print("└── ", end="")
        else:
            print("├── ", end="")
        print(file)
        index += 1


    index = 0
    for file in dir_lst:
        file_path = os.path.join(dir, file)        
        print("│   " * (layer), end="")
        if index == len_of_listdir - 1:
            print("└── ", end="")
        else:
            print("├── ", end="")

        print_color("green", file)
        index += 1
        tree_dir(file_path,layer + 1)

def parse_option(op_str):
    print("option:" + op)
    import re
    layer_limit = False
    layer_max = 0
    direct_only = False
    show_hidden_file = False
    # search layer limit
    match_str = format("-L[\s]+\d")
    search_ret = re.search(match_str, op_str)
    if search_ret is not None:
        # print(search_ret.group(0))
        layer_limit = True
        match_str = format("\d")
        search_ret = re.search(match_str, search_ret.group(0))
        if search_ret is not None:
            # print(search_ret.group(0))
            layer_max = search_ret.group(0)
    # search hidden cfg
    match_str = format("-a")
    search_ret = re.search(match_str, op_str)
    if search_ret is not None:
        # print(search_ret.group(0))
        show_hidden_file = True
    # search direct only
    match_str = format("-d")
    search_ret = re.search(match_str, op_str)
    if search_ret is not None:
        # print(search_ret.group(0))
        direct_only = True
    return show_hidden_file, direct_only, layer_limit, layer_max


if __name__ == '__main__':
    # file_name = sys.argv[0]
    # if len(sys.argv) < 2:
    #     print_color("red", "args invalid\n")
    #     sys.exit(1)
    # path_dir = sys.argv[1]
    # op = ""
    # for idx in range(len(sys.argv)):
    #     if idx >= 2:
    #         op += " " + sys.argv[idx]
    # show_hidden_file, direct_only, layer_limit, layer_max = parse_option(op)
    
    tree_dir('docs')
    sys.exit(0)


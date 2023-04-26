from PIL import Image
import os
import sys

def show():
    # 图片的引入
    
    # 【1】
    img_path = '../deepwater.jpg'
    
    # 【2】
    img_path = '工程路径/deepwater.jpg'
    
    # 【3】工程路径/1/main.py → ../.. → 工程路径/deepwater.jpg
    img_path = os.path.join(sys.argv[0], '../..', r'deepwater.jpg')

    # 【4】工程路径/1/src/mod2/mod2_main.py → ../../../.. → 工程路径/deepwater.jpg
    img_path = os.path.join(__file__, '../../../..', r'deepwater.jpg')
    
    img = Image.open(img_path)
    img.show()
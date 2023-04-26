from PIL import Image
import os
import sys


def show():
    # 图片的引入
    img_path = os.path.join(sys.argv[0], '../..', r'deepwater.jpg')
    img = Image.open(img_path)
    img.show()
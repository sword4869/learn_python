import sys
import os
sys.path.insert(0, os.path.join(__file__, '../..'))

from modulesB import module_1
from modulesB import module_2


module_1.hello()
module_2.hello()
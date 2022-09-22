import argparse

parser = argparse.ArgumentParser()
parser.add_argument('-i', '--integer', type=int)
parser.add_argument('-iF', '--inputfile', type=str)
args = parser.parse_args()
print('hello', args)
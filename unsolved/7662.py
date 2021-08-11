import sys

class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinTree:
    def __init__(self):
        self.root = None
        self.minValue = None
        self.maxValue = None


T = int(sys.stdin.readline())

for _ in range(T):
    k = int(sys.stdin.readline())
    
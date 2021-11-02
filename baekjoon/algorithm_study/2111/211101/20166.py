import sys
from collections import defaultdict
input = sys.stdin.readline
N, M, K = map(int, input().split())
grid = [input().rstrip() for _ in range(N)]
godlike = [input().rstrip() for _ in range(K)]
strs = defaultdict()
dy = (0, 1, 1, 1, 0, -1, -1, -1)
dx = (1, 1, 0, -1, -1, -1, 0, 1)

def DFS():
    pass

for i in range(N):
    for j in range(M):
        DFS()
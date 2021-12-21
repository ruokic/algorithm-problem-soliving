import sys
from heapq import *
input = sys.stdin.readline
dy, dx = (0, 1, 1, 1, 0, -1, -1, -1), (1, 1, 0, -1, -1, -1, 0, 1)

N, M, K = map(int, input().split())
A = [0] * N
for i in range(N):
    A[i] = list(map(int, input().split()))
field = [[5] * N for _ in range(N)]
tree = []
for _ in range(M):
    x, y, z = map(int, input().split())
    heappush(tree, [z, y - 1, x - 1])
for _ in range(K):
    # spring
    tree_cnt = len(tree)
    for _ in range(tree_cnt):
        z, y, x = heappop(tree)
        if field[y][x] >= z:
            field[y][x] -= z
            

    # summer
    # autumn
    # winter
import sys
input = sys.stdin.readline
dy, dx = (-1, -1, -1, 0, 1, 1, 1, 0), (-1, 0, 1, 1, 1, 0, -1, -1)

N = int(input())
bac = [[] for _ in range(8)]
for _ in range(N):
    x, y, d = map(int, input().split())
    bac[d - 1].append()
import sys
from collections import deque
input = sys.stdin.readline
dy, dx = (0, 1, 0, -1), (1, 0, -1, 0)

R, C, T = map(int, input().split())
house = [list(map(int, input().split())) for _ in range(R)]
total = 2
for i in range(R):
    for j in range(C):
        total += house[i][j]

machine_u, machine_d = [], []
for i in range(2, R - 2):
    if house[i][0] == -1:
        machine_u = [i, 0]
        machine_u = [i + 1, 0]
        break

for _ in range(T):
    queue = deque()
    for i in range(R):
        for j in range(C):
            pass

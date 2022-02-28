import sys
input = sys.stdin.readline

N, K = map(int, input().split())
jewels = []
for _ in range(N):
    jewels.append(tuple(map(int, input().split())))
bag = []
for _ in range(K):
    bag.append(int(input()))

jewels.sort(key=lambda x: (x[0], -x[1]))
bag.sort()

j_idx = 0
b_idx = 0
ans = []

while True:
    if j_idx >= len(jewels) or b_idx >= len(bag):
        break

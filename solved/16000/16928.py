import sys

N, M = map(int, sys.stdin.readline().split())

pan = [0 for _ in range(101)]
chk = [0 for _ in range(101)]

for _ in range(N):
    x, y = map(int, sys.stdin.readline().split())
    pan[x] = y
for _ in range(M):
    u, v = map(int, sys.stdin.readline().split())
    pan[u] = v

queue = [[1, 0]]

while queue:
    loc, cnt = queue.pop(0)
    if loc == 100:
        print(cnt)
        break
    if loc > 100:
        continue
    if chk[loc] != 0 and cnt >= chk[loc]:
        continue
    chk[loc] = cnt
    for i in range(6, 0, -1):
        if loc + i <= 100:
            ladderOrSnake = pan[loc + i]
            if ladderOrSnake != 0:
                queue.append([ladderOrSnake, cnt + 1])
            else:
                queue.append([loc + i, cnt + 1])
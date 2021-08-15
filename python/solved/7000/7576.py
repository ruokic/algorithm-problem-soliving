import sys
from collections import deque
def sol():
    ipt = sys.stdin.readline
    M, N = map(int, ipt().split())
    box = []
    rotten = 0
    empty = 0
    di = (-1, 0, 1, 0)
    dj = (0, 1, 0, -1)
    max_day = 0
    queue = deque()
    for n in range(N):
        temp = list(map(int, ipt().split()))
        for m in range(M):
            tmt = temp[m]
            if tmt == -1:
                empty += 1
            elif tmt == 1:
                rotten += 1
                queue.append([n, m, 0])
        box.append(temp)
    while queue:
        i, j, day = queue.popleft()
        for k in range(4):
            ni = i + di[k]
            nj = j + dj[k]
            if 0 <= ni < N and 0 <= nj < M and box[ni][nj] == 0:
                box[ni][nj] = 1
                rotten += 1
                max_day = max(max_day, day + 1)
                queue.append([ni, nj, day + 1])
    if N * M == empty + rotten:
        return max_day
    else:
        return -1
print(sol())
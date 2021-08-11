import sys
from collections import deque
ipt = sys.stdin.readline
def sol():
    M, N, H = map(int, ipt().split())
    box = []
    queue = deque()
    empty_cnt = 0
    rotten_cnt = 0
    for h in range(H):
        temp = []
        for n in range(N):
            arr = list(map(int, ipt().split()))
            for m in range(M):
                if arr[m] == 1:
                    queue.append([0, h, n, m])
                    rotten_cnt += 1
                elif arr[m] == -1:
                    empty_cnt += 1
            temp.append(arr)
        box.append(temp)

    dy = [0, 0, 1, 0, -1, 0]
    dx = [0, 0, 0, 1, 0, -1]
    dz = [1, -1, 0, 0, 0, 0]

    res = 0
    while queue:
        day, z, y, x = queue.popleft()
        for idx in range(6):
            ny = y + dy[idx]
            nx = x + dx[idx]
            nz = z + dz[idx]
            if 0 <= ny < N and 0 <= nx < M and 0 <= nz < H:
                if box[nz][ny][nx] == 0:
                    box[nz][ny][nx] = 1
                    rotten_cnt += 1
                    queue.append([day + 1, nz, ny, nx])
                    res = max(res, day + 1)

    if M * N * H > rotten_cnt + empty_cnt:
        print(-1)
    else:
        print(day)
sol()
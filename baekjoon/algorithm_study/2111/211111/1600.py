import sys
from collections import deque
input = sys.stdin.readline

dy = (1, 0, -1, 0)
dx = (0, 1, 0, -1)
d2y = (-2, -1, 1, 2, 2, 1, -1, -2)
d2x = (1, 2, 2, 1, -1, -2, -2, -1)

K = int(input())
W, H = map(int, input().split())
grid = [input().split() for _ in range(H)]
visited = [[True] * W for _ in range(H)]
visited2 = [[True] * W for _ in range(H)]
visited[0][0] = False
visited2[0][0] = False

queue = deque([[0, 0, 0, K]])

while queue:
    y, x, cnt, k = queue.popleft()
    if y == H - 1 and x == W - 1:
        print(cnt)
        break

    for i in range(4):
        ny = y + dy[i]
        nx = x + dx[i]
        if 0 <= ny < H and 0 <= nx < W and visited[ny][nx] and grid[ny][nx] == '0':
            visited[ny][nx] = False
            queue.append([ny, nx, cnt + 1, k])
    if k:
        for i in range(8):
            ny = y + d2y[i]
            nx = x + d2x[i]
            if 0 <= ny < H and 0 <= nx < W and visited[ny][nx] and visited2[ny][nx] and grid[ny][nx] == '0':
                visited2[ny][nx] = False
                queue.append([ny, nx, cnt + 1, k - 1])
else:
    print(-1)
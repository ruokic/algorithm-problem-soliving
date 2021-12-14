import sys
from collections import deque
input = sys.stdin.readline
dy, dx = (0, 1, 0, -1), (1, 0, -1, 0)

W, H = map(int, input().split())
field = [input().rstrip() for _ in range(H)]
C = []
for i in range(H):
    idx = field[i].find('C')
    ldx = field[i].rfind('C')
    if idx != -1:
        C.append([i, idx])
        if idx != ldx:
            C.append([i, ldx])

visited = [[9] * W for _ in range(H)]
visited[C[0][0]][C[0][1]] = 0
queue = deque([C[0] + C[0] + [0]])
while queue:
    y, x, py, px, cnt = queue.popleft()
    
    for k in range(4):
        ny, nx = y + dy[k], x + dx[k]
        if 0 <= ny < H and 0 <= nx < W and field[ny][nx] != '*':
            if abs(py - ny) == 2 or abs(px - nx) == 2:
                if visited[ny][nx] > cnt:
                    visited[ny][nx] = cnt
                    queue.append([ny, nx, y, x, cnt])
            else:
                if visited[ny][nx] > cnt + 1:
                    visited[ny][nx] = cnt + 1
                    queue.append([ny, nx, y, x, cnt + 1])
                    
print(visited[C[1][0]][C[1][1]] - 1)

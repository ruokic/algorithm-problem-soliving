import sys

N, M = map(int, sys.stdin.readline().split())

maze = []
chk = [[0 for _ in range(M)] for _ in range(N)]
for _ in range(N):
    maze.append(sys.stdin.readline().rstrip())
queue = [[0, 0, 1]]
dy = [0, -1, 0, 1]
dx = [1, 0, -1, 0]

while queue:
    y, x, cnt = queue.pop(0)
    if chk[y][x] == 1:
        continue
    if y == N - 1 and x == M - 1:
        break
    chk[y][x] = 1
    for i in range(4):
        ny = y + dy[i]
        nx = x + dx[i]
        if (0 <= ny < N) and (0 <= nx < M) and chk[ny][nx] == 0 and maze[ny][nx] == '1':
            queue.append([ny, nx, cnt + 1])
print(cnt)

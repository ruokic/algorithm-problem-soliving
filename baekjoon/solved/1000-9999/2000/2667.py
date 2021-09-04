import sys

N = int(sys.stdin.readline())

apart = []
for _ in range(N):
    apart.append(sys.stdin.readline().rstrip())

chk = [[0 for _ in range(N)] for _ in range(N)]
res = []
danzi = 0

dy = [0, -1, 0, 1]
dx = [1, 0, -1, 0]
def DFS(y, x):
    if chk[y][x] == 1:
        return
    chk[y][x] = 1
    global danzi
    danzi += 1
    for idx in range(4):
        ny = y + dy[idx]
        nx = x + dx[idx]
        if 0 <= ny < N and 0 <= nx < N and apart[ny][nx] == '1' and chk[ny][nx] == 0:
            DFS(ny, nx)

for i in range(N):
    for j in range(N):
        if apart[i][j] == '1' and chk[i][j] == 0:
            DFS(i, j)
            res.append(danzi)
            danzi = 0
print(len(res))
print(*sorted(res), sep='\n')
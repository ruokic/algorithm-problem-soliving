import sys
input = sys.stdin.readline
dy, dx = (-1, 0, 1, 1, 1, 0, -1, -1), (1, 1, 1, 0, -1, -1, -1, 0)

N, M = map(int, input().split())
farm = tuple(tuple(map(int, input().split())) for _ in range(N))

ans = 0
visited = [[True] * M for _ in range(N)]

def findPeak(y, x):
    isPeak = True

    for k in range(8):
        ny, nx = y + dy[k], x + dx[k]
        if 0 <= ny < N and 0 <= nx < M:
            if farm[y][x] < farm[ny][nx]:
                if visited[ny][nx]:
                    visited[ny][nx] = False
                    findPeak(ny, nx)
                isPeak = False
            elif farm[y][x] == farm[ny][nx]:
                if visited[ny][nx]:
                    visited[ny][nx] = False
                    findPeak(ny, nx)
                else:
                    isPeak = False
    
    if isPeak and farm[y][x]:
        global ans
        ans += 1

for i in range(N):
    for j in range(M):
        if visited[i][j]:
            visited[i][j] = False
            findPeak(i, j)

print(ans)

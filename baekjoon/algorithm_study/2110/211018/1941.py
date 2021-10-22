import sys
input = sys.stdin.readline
SIZE = 5
dy = (0, 1, 0, -1)
dx = (1, 0, -1, 0)
arr = [input().rstrip() for _ in range(SIZE)]
visited = [[True] * SIZE for _ in range(SIZE)]
curr = [[False] * SIZE for _ in range(SIZE)]
ans = 0
def DFS(n, cnt):
    if cnt >= 7:
        queue = [[i, j]]
        check = 0
        idx = 0
        while idx < len(queue):
            y, x = queue[idx]
            idx += 1
            for k in range(4):
                ny, nx = y + dy[k], x + dx[k]
                if 0 <= ny < SIZE and 0 <= nx < SIZE and visited[ny][nx] and curr[ny][nx] == True:
                    visited[ny][nx] = False
                    check += 1
                    queue.append([ny, nx])
        if check >= 7:
            global ans
            ans += 1
        for y, x in queue:
            visited[y][x] = True
        return
    if n >= SIZE * SIZE:
        return
    y, x = n // SIZE, n % SIZE
    curr[y][x] = True
    DFS(n + 1, cnt + 1)
    curr[y][x] = False
    DFS(n + 1, cnt)
            
for i in range(SIZE):
    for j in range(SIZE):
        visited[i][j] = False
        curr[i][j] = True
        DFS(1, 0)
print(ans)
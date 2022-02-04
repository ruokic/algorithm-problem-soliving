import sys
input = sys.stdin.readline
dy, dx = (0, 1, 0, -1), (1, 0, -1, 0)

R, C = map(int, input().split())
board = []
visited = [[0] * C for _ in range(R)]
alpha = [True] * 26
for _ in range(R):
    board.append(input().rstrip())
visited[0][0] = 1
alpha[ord(board[0][0]) - ord('A')] = False

def DFS(n, y, x):
    global ans
    ans = max(ans, n)
    for k in range(4):
        ny, nx = y + dy[k], x + dx[k]
        if 0 <= ny < R and 0 <= nx < C:
            idx = ord(board[ny][nx]) - ord('A')
            if ans - visited[ny][nx] + 1 > 0 and alpha[idx]:
                visited[ny][nx] = max(visited[ny][nx] , n + 1)
                alpha[idx] = False
                DFS(n + 1, ny, nx)
                alpha[idx] = True

ans = 1
DFS(1, 0, 0)
print(ans)
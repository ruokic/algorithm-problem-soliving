import sys
input = sys.stdin.readline
N, M = map(int, input().split())
friend = [[0] * (N + 1) for _ in range(N + 1)]
visited = [1] * (N + 1)
ans = 1
for _ in range(M):
    u, v = map(int, input().split())
    friend[u][v] = 1
    friend[v][u] = 1
def DFS(n, cnt):
    flag = True
    for j in range(1, N + 1):
        if friend[n][j] and visited[j]:
            flag = False
            visited[j] = 0
            DFS(j, cnt + 1)
            visited[j] = 1
    if flag:
        global ans
        ans = max(ans, cnt)

for i in range(1, N + 1):
    if visited[i]:
        visited[i] = 0
        DFS(i, 1)
        visited[i] = 1
print(ans)
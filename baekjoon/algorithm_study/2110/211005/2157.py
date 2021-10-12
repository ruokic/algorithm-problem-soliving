import sys
input = sys.stdin.readline
N, M, K = map(int, input().split())
dp = [[0] * (M + 1) for _ in range(N + 1)]
routes = [[0] * (N + 1) for _ in range(N + 1)]
for _ in range(K):
    a, b, c = map(int, input().split())
    if a < b and routes[a][b] < c:
        routes[a][b] = c
for i in range(2, N + 1):
    if routes[1][i]:
        dp[i][1] = routes[1][i]
for i in range(M):
    for j in range(2, N):
        if dp[j][i]:
            for k in range(j + 1, N + 1):
                if routes[j][k]:
                    dp[k][i + 1] = max(dp[k][i + 1], dp[j][i] + routes[j][k])
print(dp)
print(max(dp[-1]))
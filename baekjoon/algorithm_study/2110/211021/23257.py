import sys
input = sys.stdin.readline
N, M = map(int, input().split())
A = list(sorted(list(map(lambda x: abs(int(x)), input().split()))))
dp = [[0] * (M + 1) for _ in range(N)]
dp = [A[0] if i % 2 else 0 for i in range(M + 1)]
ans = 0
for i in range(1, N):
    for j in range(1, M + 1):
        for k in range(i + 1):
            dp[i][j] = max(dp[i][j], dp[k][j - 1] ^ A[i])
    ans = max(ans, dp[i][-1])
print(ans)
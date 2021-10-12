import sys
input = sys.stdin.readline
T, N, D, K = map(int, input().split())
arr = sorted(list(map(int, input().split())))
eff = [0] * N
dp = [[0 for _ in range(K)] for _ in range(N + 1)]
ans = 0
for i in range(N):
    target = arr[i] + D - 0.5
    s = i + 1
    e = N - 1
    m = (s + e) // 2
    while s < e:
        if arr[m] < target:
            s = m + 1
        else:
            e = m - 1
        m = (s + e) // 2
    if arr[m] < target:
        m += 1
    eff[i] = m - i
for i in range(1, N):
    dp[i][0] = max(dp[i - 1][0], eff[i - 1])
    ans = max(ans, dp[i][0])
    for k in range(1, K):
        dp[i + eff[i]][k] = max(dp[i + eff[i] - 1][k], dp[i][k - 1] + eff[i])
        ans = max(ans, dp[i + eff[i]][k])
print(ans)
print(dp)

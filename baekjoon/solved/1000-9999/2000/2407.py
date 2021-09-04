N, M = map(int, input().split())
M = min(M, N - M)
res = 1
for i in range(M):
    res = (N - i) * res // (i + 1)
print(res)
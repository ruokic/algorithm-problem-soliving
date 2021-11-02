import sys
input = sys.stdin.readline

B = tuple(map(int, input().split()))
dp = [0] * 501
dp[0] = 0
for i in range(1, 501):
    for b in B:
        if i - b >= 0 and dp[i - b] == 0:
            dp[i] = 1
            break

for _ in range(5):
    k1, k2 = map(int, input().split())
    if k1 in B and k2 in B:
        print('A')
    else:
        if dp[k1] ^ dp[k2]:
            print('A')
        else:
            print('B')
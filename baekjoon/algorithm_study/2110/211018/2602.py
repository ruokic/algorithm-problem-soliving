import sys
input = sys.stdin.readline
magic = input().rstrip()
devil = input().rstrip()
angel = input().rstrip()
dp = [[[0] * (len(magic) + 1) for _ in range(2)] for _ in range(len(devil))]
for i in range(len(devil)):
    for j in range(2):
        dp[i][j][0] = 1
print(dp)
for i in range(len(devil)):
    for j in range(2):
        for k in range(1, len(magic) + 1):
            dp[i][j][k]
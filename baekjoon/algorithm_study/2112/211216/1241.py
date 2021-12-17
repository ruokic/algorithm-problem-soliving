import sys
input = sys.stdin.readline

N = int(input())
nums = [int(input()) for _ in range(N)]
toktok = [0] * N
for i in range(N - 1):
    for j in range(i + 1, N):
        if not nums[i] % nums[j]:
            toktok[i] += 1
        if not nums[j] % nums[i]:
            toktok[j] += 1
print(*toktok, sep='\n')
import sys

N, M = map(int, sys.stdin.readline().split())
numbers = list(map(int, sys.stdin.readline().split()))

accum = [0]
for i in range(N):
    accum.append(accum[-1] + numbers[i])

for _ in range(M):
    s, e = map(int, sys.stdin.readline().split())
    print(accum[e] - accum[s - 1])
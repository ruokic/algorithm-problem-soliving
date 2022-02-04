import sys
input = sys.stdin.readline

C, N = map(int, input().split())
TI = [0] * C
for i in range(C):
    TI[i] = int(input())
AB = [0] * N
for i in range(N):
    AB[i] = tuple(map(int, input().split()))

TI.sort()
AB.sort()
ans = 0
idx = 0
for A, B in AB:
    while idx < C and TI[idx] < A:
        idx += 1

    if idx >= C:
        break
    if TI[idx] <= B:
        ans += 1
        idx += 1

print(ans)
import sys

N, M, A, B, C = map(int, sys.stdin.readline().split())

arr = [[0 for _ in range(N + 1)] for _ in range(N + 1)]
check = [0 for _ in range(N + 1)]

john = float('inf')

for m in range(M):
    start, arrival, cost = map(int, sys.stdin.readline().split())
    arr[start][arrival] = cost
    arr[arrival][start] = cost

queue = [[A, 0, C, check]] # [current_location, max_value, remain_money, check_array]

while queue:
    curr, maxValue, money, chk = queue.pop(0)

    if maxValue > john:
        continue
    if money < 0:
        continue
    if chk[curr] == 1:
        continue
    if curr == B:
        john = min(john, maxValue)
        continue

    nextChk = chk[:]
    nextChk[curr] = 1

    for idx, n in enumerate(arr[curr]):
        if n > 0:
            queue.append([idx, max(maxValue, n), money - n, nextChk])

if john == float('inf'):
    print(-1)
else:
    print(john)

import sys

N, M = map(int, sys.stdin.readline().split())

dict = {}

for m in range(M):
    k, v = map(int, sys.stdin.readline().split())
    if k in dict:
        dict[k].append(v)
    else:
        dict[k] = [v]

queue = [[1, 0]]

while len(queue) > 0:
    target, count = queue.pop(0)
    if target == N:
        print(count)
        break
    if target in dict:
        while len(dict[target]) > 0:
            queue.append([dict[target].pop(0), count + 1])
else:
    print(-1)
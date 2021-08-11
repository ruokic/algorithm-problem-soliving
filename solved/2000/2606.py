import sys

N = int(sys.stdin.readline())
M = int(sys.stdin.readline())

network = {}
chk = [0 for _ in range(N + 1)]
for _ in range(M):
    n1, n2 = map(int, sys.stdin.readline().split())
    if n1 in network:
        network[n1].append(n2)
    else:
        network[n1] = [n2]
    if n2 in network:
        network[n2].append(n1)
    else:
        network[n2] = [n1]

cnt = -1
queue = [1]

while queue:
    node = queue.pop(0)
    if chk[node] == 1:
        continue
    chk[node] = 1
    cnt += 1
    if node not in network:
        continue
    for net in network[node]:
        if chk[net] == 1:
            continue
        queue.append(net)
print(cnt)


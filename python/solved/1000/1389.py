import sys

N, M = map(int, sys.stdin.readline().split())

relationship = [[False for _ in range(N + 1)] for _ in range(N + 1)]

for m in range(M):
    fa, fb = map(int, sys.stdin.readline().split())

    relationship[fa][fb] = True
    relationship[fb][fa] = True

minValue = float('inf')
inssa = 0

for n in range(1, N + 1):
    check = [True for _ in range(N + 1)]
    res = 0
    queue = [ [n, 0] ]
    while queue:
        fn, KBN = queue.pop(0)
        if check[fn] == False:
            continue
        check[fn] = False
        res += KBN
        for idx, nextFn in enumerate(relationship[fn]):
            if nextFn == True:
                queue.append([idx, KBN + 1])

    if res < minValue:
        minValue = min(res, minValue)
        inssa = n
    
print(inssa)

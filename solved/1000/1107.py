import sys

N = int(sys.stdin.readline())
M = int(sys.stdin.readline())
malfuncBtns = list(sys.stdin.readline().split())

res = abs(N - 100)

for target in range(1000000):
    strTarget = str(target)
    tgSize = len(strTarget)
    for tg in strTarget:
        if tg in malfuncBtns:
            break
    else:
        clkCnt = abs(N - target) + tgSize
        res = min(res, clkCnt)
print(res)
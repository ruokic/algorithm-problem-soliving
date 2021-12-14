import sys
input = sys.stdin.readline

N = int(input())
M = int(input())
malfuncBtns = []
if M:
    malfuncBtns = list(input().split())

res = abs(N - 100)

low = high = N
while low >= 0 or high <= 1000000:
    if low >= 0:
        lowTarget = str(low)
        lowSize = len(lowTarget)
        for lt in lowTarget:
            if lt in malfuncBtns:
                break
        else:
            clkCnt = abs(N - low) + lowSize
            res = min(res, clkCnt)
            break
        low -= 1

    if high <= 1000000:
        highTarget = str(high)
        highSize = len(highTarget)
        for ht in highTarget:
            if ht in malfuncBtns:
                break
        else:
            clkCnt = abs(N - high) + highSize
            res = min(res, clkCnt)
            break
        high += 1
print(res)

# import sys

# N = int(sys.stdin.readline())
# M = int(sys.stdin.readline())
# malfuncBtns = list(sys.stdin.readline().split())

# res = abs(N - 100)

# for target in range(1000000):
#     strTarget = str(target)
#     tgSize = len(strTarget)
#     for tg in strTarget:
#         if tg in malfuncBtns:
#             break
#     else:
#         clkCnt = abs(N - target) + tgSize
#         res = min(res, clkCnt)
# print(res)
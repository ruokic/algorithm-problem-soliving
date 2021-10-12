import sys
from heapq import *
input = sys.stdin.readline
N, K, C = map(int, input().split())
A = sorted(list(map(lambda x: [0, int(x)], input().split())), key=lambda x: x[1])
heapify(A)
idx = 0
print(A)
while K:
    time, cost = heappop(A)
    heappush(A, [time + cost, cost])
    K -= 1
print(A)
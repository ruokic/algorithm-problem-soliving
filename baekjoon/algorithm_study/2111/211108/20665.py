import sys
from collections import deque
input = sys.stdin.readline

N, T, P = map(int, input().split())
inout = [input().split() for _ in range(T)]
inout.sort()

seat_status = [False] * (N + 1)
outq = deque()


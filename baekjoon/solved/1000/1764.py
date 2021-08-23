import sys

N, M = map(int, sys.stdin.readline().split())

ddmot = set()
bomot = set()

for _ in range(N):
    ddmot.add(sys.stdin.readline().rstrip())
for _ in range(M):
    bomot.add(sys.stdin.readline().rstrip())
arr = list(ddmot.intersection(bomot))
arr.sort()
print(len(arr))
for a in arr:
    print(a)
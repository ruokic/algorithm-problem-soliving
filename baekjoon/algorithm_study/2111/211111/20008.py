import sys
input = sys.stdin.readline

N, HP = map(int, input().split())

Cooltimes = []
Damages = []
for i in range(N):
    C, D = map(int, input().split())
    C.append(C)
    D.append(D)
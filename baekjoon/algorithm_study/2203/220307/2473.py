import sys
input = sys.stdin.readline

N = int(input())
sol = list(map(int, input().split()))
sol.sort()
selected = sol[0:2]
value = sum(selected)

def bs(i, j, s, e):
    if s >= e:
        return
    m = (s + e) // 2
    
    pass

for i in range(N - 2):
    for j in range(2, N):
        pass
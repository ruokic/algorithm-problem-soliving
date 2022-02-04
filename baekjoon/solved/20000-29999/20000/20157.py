import sys
input = sys.stdin.readline

def gcd(p, q):
    n = p % q
    if n == 0:
        return q
    return gcd(q, n)

N = int(input())
d = {}
score = 0
for _ in range(N):
    x, y = map(int, input().split())
    if y == 0:
        xx, yy = x // abs(x), 0
    else:
        cd = gcd(abs(x), abs(y))
        xx, yy = x // cd, y // cd
    dd = f'{xx}{yy}'
    if dd in d:
        d[dd] += 1
        score = max(score, d[dd])
    else:
        d[dd] = 1
        score = max(score, d[dd])
print(score)
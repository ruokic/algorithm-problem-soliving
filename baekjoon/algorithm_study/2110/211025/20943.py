import sys, math
from collections import defaultdict
input = sys.stdin.readline
N = int(input())
lines = defaultdict(int)
for i in range(N):
    a, b, _ = map(int, input().split())
    # y = C일 때
    if a == 0:
        b = 1
    # x = C일 때
    if b == 0:
        a = 1
    # a, b를 최대공약수로 나눔
    d = math.gcd(a, b)
    # 부호 통일
    if a < 0:
        d *= -1
    lines[(a // d, b // d)] += 1
s = sum(lines.values())
ans = 0
# 현재 그룹의 개수를 제외하면서 나머지 그룹의 총 합을 곱을 누적하여 더함
for line in lines.values():
    s -= line
    ans += line * s
print(ans)
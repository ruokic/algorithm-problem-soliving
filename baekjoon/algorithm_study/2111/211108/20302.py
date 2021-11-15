import sys
from collections import defaultdict
input = sys.stdin.readline

def sol():
    N = int(input())
    exp = input().split()
    bunja = [int(exp[0])]
    bunmo = []

    for i in range(1, N):
        if exp[2 * i - 1] == '*':
            bunja.append(int(exp[2 * i]))
        else:
            bunmo.append(int(exp[2 * i]))

    soinsu = defaultdict(int)

    for b in bunja:
        div = 2
        while b > 1:
            if b % div:
                div += 1
            else:
                b //= div
                soinsu[div] += 1

    for b in bunmo:
        div = 2
        while b > 1:
            if b % div:
                div += 1
            else:
                b //= div
                soinsu[div] -= 1
                if soinsu[div] < 0:
                    return 'toothpaste'
    return 'mint chocolate'
print(sol())
import sys
input = sys.stdin.readline
T = int(input())
for _ in range(T):
    N = int(input())
    dict = {}
    for n in range(N):
        cloth, kind = input().split()
        if kind in dict:
            dict[kind] += 1
        else:
            dict[kind] = 1
    answer = 1
    for i in dict.values():
        answer *= (i + 1)
    answer -= 1
    print(answer)
import sys, math
input = sys.stdin.readline
win_rate = [0] * (1000001)
win_rate[1] = 1
for i in range(2, 1000001):
    j = math.floor(i ** 0.5)
    while j > 0:
        if win_rate[i - j * j] == 0:
            win_rate[i] = 1
            break
        j -= 1
print('reday')
T = int(input())
for _ in range(T):
    if win_rate[int(input())]:
        print('koosaga')
    else:
        print('cubelover')
N = int(input())

cnt10 = 0
cnt5 = 0
cnt2 = 0

for i in range(1, N + 1):
    while True:
        if i % 10 == 0:
            cnt10 += 1
            i //= 10
        elif i % 5 == 0:
            cnt5 += 1
            i //= 5
        elif i % 2 == 0:
            cnt2 += 1
            i //= 2
        else:
             break
print(cnt10 + min(cnt5, cnt2))
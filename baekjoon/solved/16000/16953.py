def sol():
    A, B = map(int, input().split())
    cnt = 1
    while A <= B:
        if A == B:
            return cnt
        cnt += 1
        if B % 2 == 0:
            B = B // 2
        elif B % 10 == 1:
            B = B // 10
        else:
            return -1
    return -1
print(sol())
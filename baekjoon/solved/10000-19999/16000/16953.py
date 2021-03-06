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
'''
import sys
input = sys.stdin.readline
def sol():
    A, B = map(int, input().split())
    cnt = 0
    while A <= B:
        if A == B:
            return cnt + 1
        elif B % 10 == 1:
            B //= 10
            cnt += 1
        elif B % 2 == 0:
            B //= 2
            cnt += 1
        else:
            return -1
    else:
        return -1
print(sol())
'''
import sys
input = sys.stdin.readline
N, B = map(int, input().split())
A = [list(map(lambda x: int(x) % 1000, input().split())) for _ in range(N)]

def matrix_multiple(N, matrix1, matrix2):
    ret = []
    for i in range(N):
        arr = []
        for j in range(N):
            num = 0
            for k in range(N):
                num += matrix1[i][k] * matrix2[k][j] % 1000
            arr.append(num % 1000)
        ret.append(arr)
    return ret

def DNC(n):
    if n == 1:
        return A
    if n == 2:
        return matrix_multiple(N, A, A)
    D = DNC(n // 2)
    C = matrix_multiple(N, D, D)
    if n % 2:
        return matrix_multiple(N, A, C)
    else:
        return C

res = DNC(B)
for r in res:
    print(*r)

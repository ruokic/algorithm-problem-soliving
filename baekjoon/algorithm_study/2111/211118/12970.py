import sys
input = sys.stdin.readline
for _ in range(5):
    N, K = map(int, input().split())

    def sol():
        if N % 2:
            if K > (N // 2) * (N // 2 + 1):
                return -1
        else:
            if K > (N // 2) ** 2:
                return -1
        
        if K == 0:
            return 'A' * N
        if K == 1:
            return 'A' + 'B' + 'A' * (N - 2)

        if K % 2:
            for a in range(1, K):
                if K % a == 0 and a + K // a <= N:
                    break
            b = K // a
            return 'A' * a + 'B' * (b - 1) + 'A' + 'B' + 'A' * (N - a - b - 2)
        else:
            for a in range(1, K):
                if K % a == 0 and a + K // a <= N:
                    break
            b = K // a
            return 'A' * a + 'B' * b + 'A' * (N - a - b)

    print(sol())
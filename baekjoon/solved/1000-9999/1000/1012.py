import sys

T = int(sys.stdin.readline())

for t in range(T):
    M, N, K = map(int, sys.stdin.readline().split())
    count = 0
    queue = []
    arr = [ [ 0 ] * M for _ in range(N) ] 
    for k in range(K):
        x, y = map(int, sys.stdin.readline().split())
        arr[y][x] = 1
    for i in range(M):
        for j in range(N):
            if arr[j][i] == 0:
                continue
            queue.append([i, j])
            count += 1
            while len(queue) > 0:
                ci, cj = queue.pop(0)
                if arr[cj][ci] == 0:
                    continue
                arr[cj][ci] = 0
                if ci > 0:
                    queue.append([ci - 1, cj])
                if cj > 0:
                    queue.append([ci, cj - 1])
                if ci < M - 1:
                    queue.append([ci + 1, cj])
                if cj < N - 1:
                    queue.append([ci, cj + 1])
    print(count)
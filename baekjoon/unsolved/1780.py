import sys

N = int(sys.stdin.readline())
paper = []
for _ in range(N):
    paper.append(list(map(int, sys.stdin.readline().split())))

cnt = N // 3
chk = [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ]
dy = [0, 1, -1, 0]
dx = [1, 0, 0, -1]

cnt_arr = [0, 0, 0]
arr = []
for i in range(3):
    for j in range(3):
        if chk[i][j] == 0:
            num = arr[i][j]
            queue = [[num, i, j]]
            while queue:
                n, y, x = queue.pop(0)
                chk[y][x] = 1
                for i in range(4):
                    if 0 <= y + dy[i] < 3 and 0 <= x + dx[i] < 3 and\
                        arr[y + dy[i]][x + dx[i]] == num and chk[y + dy[i]][x + dx[i]] == 0:
                        queue.append([num, y + dy[i], x + dx[i]])

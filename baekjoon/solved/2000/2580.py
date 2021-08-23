import sys # 2239 참고
input = sys.stdin.readline
def DFS(n):
    if n >= len(targets):
        return True
    ni, nj = targets[n]
    for num in range(1, 10):
        if ch_y[ni][num] == False and ch_x[nj][num] == False and ch_s[ni // 3 * 3 + nj // 3][num] == False:
            ch_y[ni][num] = ch_x[nj][num] = ch_s[ni // 3 * 3 + nj // 3][num] = True
            sudoku[ni][nj] = num
            if DFS(n + 1) == True: return True
            sudoku[ni][nj] = 0
            ch_y[ni][num] = ch_x[nj][num] = ch_s[ni // 3 * 3 + nj // 3][num] = False
sudoku = [list(map(int, input().split())) for _ in range(9)]
targets = []
ch_y = [[False for _ in range(10)] for _ in range(9)]
ch_x = [[False for _ in range(10)] for _ in range(9)]
ch_s = [[False for _ in range(10)] for _ in range(9)]
for i in range(9):
    for j in range(9):
        t = sudoku[i][j]
        if t == 0: targets.append([i, j])
        else: ch_y[i][t] = ch_x[j][t] = ch_s[i // 3 * 3 + j // 3][t] = True
DFS(0)
for i in range(9):
    print(*sudoku[i], sep=' ')
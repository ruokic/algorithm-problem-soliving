import sys
input = sys.stdin.readline

dy, dx = (-1, 0, 1, 0), (0, 1, 0, -1)

T = int(input())
for _ in range(T):
    N, R = map(int, input().split())
    board = [[0] * N for _ in range(N)]
    for _ in range(R):
        x, y = map(int, input().split())
        board[x - 1][y - 1] = 1
    raiser = list(map(lambda x: int(x) - 1, input().split()))
    visited = [[-1] * N for _ in range(N)]

    y, x = 0, 0
    drct = -1
    if raiser[0] == -1:
        drct = 2
        x = raiser[1]
    elif raiser[0] == N:
        drct = 0
        x = raiser[1]
    elif raiser[1] == -1:
        drct = 1
        y = raiser[0]
    else:
        drct = 3
        y = raiser[0]
        
    if board[y][x]:
        drct = (drct + 1) % 4
    
    ans = [0, 0]
    while True:
        y, x = y + dy[drct], x + dx[drct]
        if 0 <= y < N and 0 <= x < N:
            if board[y][x]:
                drct = (drct + 1) % 4
            if drct == visited[y][x]:
                break
            visited[y][x] = drct
        else:
            ans = [y + 1, x + 1]
            break
    
    print(*ans)
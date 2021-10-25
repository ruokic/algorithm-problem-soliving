import sys
from collections import deque
input = sys.stdin.readline

dy, dx = (-1, 0, 0, 1), (0, -1, 1, 0)
N, M, fuel = map(int, input().split())
jido = [list(map(int, input().split())) for _ in range(N)]
ty, tx = map(lambda x: int(x) - 1, input().split())

for _ in range(1, M + 1):
    gy, gx, dey, dex = map(lambda x: int(x) - 1, input().split())
    jido[gy][gx] = dey * N + dex

def find(y, x):
    visited = [[True] * N for _ in range(N)]
    if jido[y][x] > 1:
        target, jido[y][x] = jido[y][x], 0
        return y, x, 0, target
    visited[y][x] = False
    queue = deque([(y, x, 0)])
    while queue:
        cy, cx, cnt = queue.popleft()
        for k in range(4):
            ny, nx = cy + dy[k], cx + dx[k]
            if 0 <= ny < N and 0 <= nx < N and visited[ny][nx] and jido[ny][nx] != 1:
                if jido[ny][nx] > 1:
                    target, jido[ny][nx] = jido[ny][nx], 0
                    return ny, nx, cnt + 1, target
                visited[ny][nx] = False
                queue.append((ny, nx, cnt + 1))
    return -1, -1, -1, -1

def drive(y, x, n):
    visited = [[True] * N for _ in range(N)]
    visited[y][x] = False
    queue = deque([(y, x, 0)])
    while queue:
        cy, cx, cnt = queue.popleft()
        for k in range(4):
            ny, nx = cy + dy[k], cx + dx[k]
            if 0 <= ny < N and 0 <= nx < N and visited[ny][nx] and jido[ny][nx] != 1:
                if ny == n // N and nx == n % N:
                    return ny, nx, cnt + 1
                visited[ny][nx] = False
                queue.append((ny, nx, cnt + 1))
    return -1, -1, -1

def sol():
    cy, cx, cfuel = ty, tx, fuel
    for _ in range(M):
        ny, nx, ncost, target = find(cy, cx)
        if ny == -1: return -1
        cfuel -= ncost
        if cfuel <= 0: return -1
        cy, cx, ncost = drive(ny, nx, target)
        if cy == -1: return -1
        cfuel -= ncost
        if cfuel < 0: return -1
        cfuel += 2 * ncost
    return cfuel

print(sol())
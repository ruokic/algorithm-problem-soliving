from collections import deque
def sol():
    N, K = map(int, input().split())

    if K <= N:
        return N - K
    queue = deque([[N, 0]])
    visited = {}
    while queue:
        location, cnt = queue.popleft()
        if location == K:
            return cnt
        if location in visited:
            continue
        visited[location] = cnt
        if 0 < location:
            queue.append([location - 1, cnt + 1])
        if location < K:
            queue.append([location + 1, cnt + 1])
        if location < K * 2:
            queue.append([2 * location, cnt + 1])
print(sol())
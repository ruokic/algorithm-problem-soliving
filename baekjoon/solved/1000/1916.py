import sys
import heapq
def sol():
    ipt = sys.stdin.readline
    N = int(ipt())
    M = int(ipt())
    bus = [[] for _ in range(N + 1)]
    visited = [float('INF') for _ in range(N + 1)]
    queue = []
    for _ in range(M):
        s, e, c = map(int, ipt().split())
        bus[s].append([e, c])
    start, end = map(int, ipt().split())
    heapq.heappush(queue, (0, start))
    while queue:
        cost, loc = heapq.heappop(queue)
        if loc == end:
            return cost
        if visited[loc] <= cost:
            continue
        visited[loc] = cost
        for next_loc, next_cost in bus[loc]:
            if cost + next_cost < visited[next_loc]:
                heapq.heappush(queue, (cost + next_cost, next_loc))
print(sol())
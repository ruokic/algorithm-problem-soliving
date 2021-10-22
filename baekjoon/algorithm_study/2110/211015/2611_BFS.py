import sys
from collections import deque
input = sys.stdin.readline
N = int(input())
M = int(input())
edges = [[] for _ in range(N + 1)]
indegree = [0] * (N + 1)
for _ in range(M):
    p, q, r = map(int, input().split())
    edges[p].append((q, r))
    indegree[q] += 1
# 위상정렬
visited = [True] * (N + 1)
topology = [0]
queue = deque([1])
while queue:
    # 꺼낸 노드를 리스트에 넣는다.
    node = queue.popleft()
    topology.append(node)
    for next, score in edges[node]:
        # 진입 차수를 줄이고
        indegree[next] -= 1
        # 진입 차수가 0이면 큐에 넣는다.
        if indegree[next] == 0:
            queue.append(next)

dp = [0] * (N + 1)
ans = [[] for _ in range(N + 1)]
ans[1] = [1]
for i in topology[:-1]:
    for next, score in edges[i]:
        # dp 값을 갱신 가능 할 때, 갱신하고 방문 노드를 누적한다.
        if dp[next] < dp[i] + score:
            dp[next] = dp[i] + score
            ans[next] = ans[i] + [next]
print(dp[1])
print(*ans[1])
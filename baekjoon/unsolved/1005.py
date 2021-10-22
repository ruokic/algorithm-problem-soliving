import sys
input = sys.stdin.readline
def topological_sort(n):
    visited[n] == False
    for edge in edges[n]:
        if visited[edge] and edge != W:
            topological_sort(edge)
    topology.append(n)
    
T = int(input())
for _ in range(T):
    N, K = map(int, input().split())
    build_time = [0] + list(map(int, input().split()))
    edges = [[] for _ in range(N + 1)]
    indegree = [0] * (N + 1)
    visited = [True] * (N + 1)
    for _ in range(K):
        X, Y = map(int, input().split())
        edges[X].append(Y)
        indegree[Y] += 1
    W = int(input())
    topology = [W]
    for i in range(1, N + 1):
        if visited[i] and indegree[i] == 0:
            topological_sort(i)
    dp = [0] * (len(topology) + 1)
    for i in topology[:0:-1]:
        for j in edges[i]:
            dp[j] = max(dp[j], dp[i] + build_time[i])
    print(dp[-1] + build_time[W])
    print(dp)
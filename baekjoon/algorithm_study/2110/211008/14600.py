import sys
input = sys.stdin.readline
K = int(input())
x, y = map(lambda x: int(x) - 1, input().split())
ground = [[0] * (2 ** K) for _ in range(2 ** K)]
ground[y][x] = -1
print(K, x, y)
print(ground)
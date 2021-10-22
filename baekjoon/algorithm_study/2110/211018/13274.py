import sys
input = sys.stdin.readline
N, K = map(int, input().split())
arr = sorted(list(map(int, input().split())))
query = [list(map(int, input().split())) for _ in range(K)]

import sys
input = sys.stdin.readline

N, K = map(int, input().split())
rectangles = [list(map(int, input().split())) for _ in range(N)]
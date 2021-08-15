# import sys
# input = sys.stdin.readline
# N = int(input())
# eggs = [list(map(int, input().split())) for _ in range(N)]
# crashed = [False for _ in range(N)]
# max_cnt = 0
# def DFS(i, cnt):
#     if i >= N:
#         global max_cnt
#         max_cnt = max(max_cnt , cnt)
    
# DFS(0, 0)
# print(max_cnt)
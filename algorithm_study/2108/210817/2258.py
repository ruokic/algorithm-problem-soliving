# import sys
# input = sys.stdin.readline
# def sol():
#     N, M = map(int, input().split())
#     steak = [list(map(int, input().split())) for _ in range(N)]
#     steak.sort(key=lambda x: (x[1], -x[0]))
#     sum = steak[0][0]
#     cost = steak[0][1]
#     temp = 0
#     if sum >= M:
#         return cost
#     for i in range(1, N):
#         if cost == steak[i][1]:
#             temp += steak[i][0]
#         else:
#             sum += temp
#             temp = steak[i][0]
#         if sum + steak[i][0] >= M:
#             return steak[i][1]
#         else:
#             cost = steak[i][1]
#     return -1
# print(sol())

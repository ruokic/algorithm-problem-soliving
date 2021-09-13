# 푸는중
# import sys
# input = sys.stdin.readline
# N, K = map(int, input().split())
# arr = []
# res = 0
# while N:
#     arr.append(N % 2)
#     N //=2
# print(arr)

# i = 0
# while arr.count(1) + arr.count(2) > K:
#     if len(arr) < i:
#         arr.append(0)
#     if arr[i] == 1:
#         arr[i] = 0
#         arr[i + 1] += 1
#         res += 2 ** i
#     elif arr[i] == 2:
#         arr[i] = 0
#         arr[i + 1] += 1
#     i += 1
#     print(arr, res)
# print(arr, res)
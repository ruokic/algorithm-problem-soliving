N = int(input())

arr = [N for _ in range(N + 1)]
while N > 0:
    next = arr[N] + 1
    if N % 3 == 0 and next < arr[N // 3]:
        arr[N // 3] = next
    if N % 2 == 0 and next < arr[N // 2]:
        arr[N // 2] = next
    if arr[N - 1] != 0 and next < arr[N - 1]:
        arr[N - 1] = next
    N -= 1
print(arr[1])

# queue = [[1, 0]]
# while queue:
#     n, cnt = queue.pop(0)
#     if n > N:
#         continue
#     if n == N:
#         print(cnt)
#         break
#     if cnt > arr[n]:
#         continue
#     arr[n] = cnt
#     if 3 * n < N and cnt + 1 < arr[3 * n]:
#         queue.append([3 * n, cnt + 1])
#     if 2 * n < N and cnt + 1 < arr[2 * n]:
#         queue.append([2 * n, cnt + 1])
#     if cnt + 1 < arr[n + 1]:
#         queue.append([n + 1, cnt + 1])
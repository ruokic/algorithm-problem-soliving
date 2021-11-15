import sys
input = sys.stdin.readline

N = int(input())
arr = tuple(map(int, input().split()))
k = 1
checked = [False] * (200001)

for a in arr:
    checked[a] = True

for i in range(N - 1):
    if arr[i] < arr[i + 1]:
        for j in range(arr[i] + 1, arr[i + 1]):
            if checked[j]:
                k += 1
                break
    else:
        k += 1
print(k)

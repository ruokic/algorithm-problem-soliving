import sys
ipt = sys.stdin.readline
N = int(ipt())
max_arr = [0, 0, 0]
min_arr = [0, 0, 0]

for i in range(N):
    step = list(map(int, ipt().split()))
    min0 = min(min_arr[0], min_arr[1]) + step[0]
    min1 = min(min_arr) + step[1]
    min2 = min(min_arr[1], min_arr[2]) + step[2]
    
    max0 = max(max_arr[0], max_arr[1]) + step[0]
    max1 = max(max_arr) + step[1]
    max2 = max(max_arr[1], max_arr[2]) + step[2]
    
    min_arr = [min0, min1, min2]
    max_arr = [max0, max1, max2]
print(max(max_arr), min(min_arr))
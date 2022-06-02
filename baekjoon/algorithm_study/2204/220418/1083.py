import sys
input = sys.stdin.readline

N = int(input())
arr = list(map(int, input().split()))
S = int(input())
sarr = sorted(arr[:], reverse=True)
answer = []

def sol():
    idx = 0
    global S
    while S > 0 and idx < N:
        target = arr.index(sarr[idx])
        if target <= S:
            answer.append(sarr[idx])
            arr.pop(target)
            S -= target
        idx += 1
    answer.extend(arr)

sol()
print(*answer)
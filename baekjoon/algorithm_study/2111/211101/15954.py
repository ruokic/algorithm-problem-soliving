import sys
input = sys.stdin.readline
N, K = map(int, input().split())
preference = list(map(int, input().split()))

def deviation(arr):
    m = sum(arr) / len(arr)
    v = 0
    for a in arr:
        v += (a - m) * (a - m)
    return (v / len(arr)) ** 0.5


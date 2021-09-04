import sys
ipt = sys.stdin.readline
N = int(ipt())

maxHappy = 0

costs = list(map(int, ipt().split()))
happys = list(map(int, ipt().split()))

def bin(idx, HP, haha):
    if idx == N:
        global maxHappy
        maxHappy = max(maxHappy, haha)
        return
    bin(idx + 1, HP, haha)
    if HP - costs[idx] < 1:
        return
    bin(idx + 1, HP - costs[idx], haha + happys[idx])
    
bin(0, 100, 0)
print(maxHappy)
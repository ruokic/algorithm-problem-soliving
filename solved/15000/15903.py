import sys
import heapq

n, m = map(int, sys.stdin.readline().split())
cards = list(map(int, sys.stdin.readline().split()))
heapq.heapify(cards)
total = sum(cards)
for _ in range(m):
    c1 = heapq.heappop(cards)
    c2 = heapq.heappop(cards)
    heapq.heappush(cards, c1 + c2)
    heapq.heappush(cards, c1 + c2)
    total += c1 + c2
print(total)

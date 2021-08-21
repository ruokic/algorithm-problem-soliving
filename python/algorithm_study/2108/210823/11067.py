import sys
input = sys.stdin.readline
T = int(input())
for t in range(T):
    N = int(input())
    cafe = [tuple(map(int, input().split())) for _ in range(N)]
    M, *numbers = map(int, input().split())
    cafe.sort(key=(lambda x: (x[0], x[1])))
    print(cafe)
    x, y = -1, 0
    answer = []
    number = 0
    idx = 0
    ext = cafe[-1][0]
    while True:
        if cafe[idx][0] != x:
            pass
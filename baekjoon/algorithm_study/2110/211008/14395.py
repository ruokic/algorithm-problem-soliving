import sys
from collections import deque
input = sys.stdin.readline
def sol():
    S, T = map(int, input().split())
    # 두 수가 같으면 0
    if S == T:
        return 0
    # T가 S의 배수이거나 2의 배수일때만 연산 가능
    if T % S == 0 or T % 2 == 0 or T == 1:
        ans = ''
        # T가 S의 배수가 아니거나 T가 S보다 작으면 S / S로 S를 1로 만들고 시작
        if T % S or S > T:
            S = 1
            ans = '/'
        queue = deque([[S, ans]])
        visited = [S]
        while queue:
            print(queue)
            n, a = queue.popleft()
            if n > T:
                continue
            if n == T:
                return a
            if not n ** 2 in visited:
                queue.append([n ** 2, a + '*'])
                visited.append(n ** 2)
            if not 2 * n in visited:
                queue.append([2 * n, a + '+'])
                visited.append(2 * n)
    else:
        return -1
print(sol())
    
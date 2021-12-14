import sys
sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline
def sol():
    def DFS(root, n):
        if root == n:
            solo[root] = False
            return True
        if solo[n] == False:
            return False
        if students[n] == n:
            return False
        if DFS(root, students[n]):
            solo[n] = False
            return True
        return False

    T = int(input())
    for _ in range(T):
        N = int(input())
        students = (0,) + tuple(map(int, input().split()))
        solo = [True] * (N + 1)

        for i in range(1, N + 1):
            if solo[i]:
                DFS(i, students[i])
        print(solo.count(True) - 1)
sol()
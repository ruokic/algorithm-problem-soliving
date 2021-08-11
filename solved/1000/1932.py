import sys
ipt = sys.stdin.readline
n = int(ipt())
intri = []
for _ in range(n):
    intri.append(list(map(int, ipt().split())))
for i in range(1, n):
    intri[i][0] += intri[i - 1][0]
    intri[i][-1] += intri[i - 1][-1]
    for j in range(1, len(intri[i]) - 1):
        intri[i][j] += max(intri[i - 1][j - 1], intri[i - 1][j])
print(max(intri[-1]))
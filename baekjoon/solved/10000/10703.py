import sys
ipt = sys.stdin.readline

def sol():
    R, S = map(int, ipt().split())
    pic = []
    meteor_low_part = [-1 for _ in range(S)]
    ground_high_part = [R for _ in range(S)]
    for i in range(R):
        part = list(ipt().rstrip())
        for j in range(S):
            if part[j] == 'X':
                meteor_low_part[j] = i
            elif part[j] == '#':
                ground_high_part[j] = min(ground_high_part[j], i)
        pic.append(part)

    gap = R
    for j in range(S):
        if meteor_low_part[j] != -1:
            gap = min(ground_high_part[j] - meteor_low_part[j] - 1, gap)
    idx = max(meteor_low_part)

    while idx >= 0:
        for j in range(S):
            if pic[idx][j] == 'X':
                pic[idx][j] = '.'
                pic[idx + gap][j] = 'X'
        idx -= 1

    for i in range(R):
        for j in range(S):
            sys.stdout.write(pic[i][j])
        sys.stdout.write('\n')

sol()
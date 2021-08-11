import sys
ipt = sys.stdin.readline
N = int(ipt())
words = []
for _ in range(N):
    words.append(ipt().rstrip().split())
mixed_word = ipt().rstrip().split()
res = True
for _ in range(len(mixed_word)):
    target = mixed_word.pop()
    for n in range(N):
        if words[n] and words[n][-1] == target:
            words[n].pop()
            break
    else:
        res = False
        break
if res == False:
    print('Impossible')
else:
    print('Possible')

import sys
input = sys.stdin.readline
string = input().rstrip()
bomb = input().rstrip()
stack = []
bomb_len = len(bomb)
for s in string:
    stack.append(s)
    if len(stack) >= bomb_len:
        for i in range(bomb_len):
            if bomb[-1 - i] != stack[-1 - i]:
                break
        else:
            for i in range(bomb_len):
                stack.pop()
if len(stack) > 0:
    print(''.join(stack))
else:
    print('FRULA')

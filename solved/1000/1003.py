import sys

T = int(sys.stdin.readline())

def fibo(num):
    call_stack = [[1, 0], [0, 1]]
    for n in range(2, num + 1):
        call_stack.append([
            call_stack[n - 1][0] + call_stack[n - 2][0],
            call_stack[n - 1][1] + call_stack[n - 2][1]
            ])
    return call_stack[num]

for t in range(T):
    N = int(sys.stdin.readline())
    c0, c1 = fibo(N)
    print(c0, c1)

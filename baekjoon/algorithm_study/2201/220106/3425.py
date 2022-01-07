import sys
input = sys.stdin.readline

isQuit = False

while True:
    operators = []
    while True:
        operator = input().rstrip()
        if operator == 'QUIT':
            isQuit = True
            break
        if operator == 'END':
            break
        operators.append(operator)
    
    if isQuit:
        break
    
    N = int(input())
    for _ in range(N):
        stack = [int(input())]
        isError = False
        for operator in operators:
            op, *n = operator.split()

            if op == 'NUM':
                stack.append(int(n[0]))
            elif op == 'POP':
                if len(stack) < 1:
                    isError = True
                    break
                else:
                    stack.pop()
            elif op == 'INV':
                if len(stack) < 1:
                    isError = True
                    break
                else:
                    stack.append(-stack.pop())
            elif op == 'DUP':
                if len(stack) < 1:
                    isError = True
                    break
                else:
                    stack.append(stack[-1])
            elif op == 'SWP':
                if len(stack) < 1:
                    isError = True
                    break
                else:
                    first = stack.pop()
                    stack.append(stack.pop())
                    stack.append(first)
            elif op == 'ADD':
                if len(stack) < 2:
                    isError = True
                    break
                else:
                    first = stack.pop()
                    stack.append(stack.pop() + first)
                    if abs(stack[-1]) > 10 ** 9:
                        isError = True
                        break
            elif op == 'SUB':
                if len(stack) < 2:
                    isError = True
                    break
                else:
                    first = stack.pop()
                    stack.append(stack.pop() - first)
                    if abs(stack[-1]) > 10 ** 9:
                        isError = True
                        break
            elif op == 'MUL':
                if len(stack) < 2:
                    isError = True
                    break
                else:
                    first = stack.pop()
                    stack.append(stack.pop() * first)
                    if abs(stack[-1]) > 10 ** 9:
                        isError = True
                        break
            elif op == 'DIV':
                if len(stack) < 2:
                    isError = True
                    break
                else:
                    first = stack.pop()
                    if first == 0:
                        isError = True
                        break
                    second = stack.pop()
                    stack.append(abs(second) // abs(first) * (-1 if first * second < 0 else 1))
            elif op == 'MOD':
                if len(stack) < 2:
                    isError = True
                    break
                else:
                    first = stack.pop()
                    if first == 0:
                        isError = True
                        break
                    second = stack.pop()
                    stack.append(second % abs(first) * (-1 if second < 0 else 1))

        if isError:
            print('ERROR')
        elif len(stack) != 1:
            print('ERROR')
        else:
            print(stack.pop())
            
    print()
    input()

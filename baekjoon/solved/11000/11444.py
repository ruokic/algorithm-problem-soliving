N = int(input())
fibo_dict = {}
def fibo(n):
    if n == 1:
        return 1
    if n == 2:
        return 1
    if n % 2:
        if not fibo_dict.get(n // 2 + 1):
            fibo_dict[n // 2 + 1] = fibo(n // 2 + 1) % 1000000007
        if not fibo_dict.get(n // 2):
            fibo_dict[n // 2] = fibo(n // 2) % 1000000007
        return (fibo_dict[n // 2 + 1] ** 2 + fibo_dict[n // 2] ** 2) % 1000000007
    else:
        if not fibo_dict.get(n // 2 + 1):
            fibo_dict[n // 2 + 1] = fibo(n // 2 + 1) % 1000000007
        if not fibo_dict.get(n // 2 - 1):
            fibo_dict[n // 2 - 1] = fibo(n // 2 - 1) % 1000000007
        if not fibo_dict.get(n // 2):
            fibo_dict[n // 2] = fibo(n // 2) % 1000000007
        return (fibo_dict[n // 2] * (fibo_dict[n // 2 + 1] + fibo_dict[n // 2 - 1])) % 1000000007
print(fibo(N))
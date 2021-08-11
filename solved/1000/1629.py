A, B, C = map(int, input().split())

def dnc(n):
    if n == 1:
        return A % C
    if n % 2 == 1:
        return A * (dnc(n // 2) ** 2) % C
    if n % 2 == 0:
        return (dnc(n // 2) ** 2) % C
print(dnc(B))
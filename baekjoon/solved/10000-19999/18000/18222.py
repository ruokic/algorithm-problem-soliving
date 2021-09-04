k = int(input())

target = k - 1
quat = []
num = 0
while target:
    quat.append(target % 4)
    target //= 4

string0 = [0, 1, 1, 0]
string1 = [1, 0, 0, 1]
res = 0
next_string = string0
while quat:
    idx = quat.pop()
    res = next_string[idx]
    if res == 0:
        next_string = string0
    else:
        next_string = string1

print(res)
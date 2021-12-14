import sys
input = sys.stdin.readline

def sol():
    M = int(input())
    lines = []
    while True:
        L, R = map(int, input().split())
        if L == 0 and R == 0:
            break
        if L > R:
            L, R = R, L
        lines.append((L, R))
    lines.sort(key= lambda x: (x[0], -x[1]))

    max_idx = len(lines)
    idx = 0
    curr_R = 0
    cnt = 0
    while idx < max_idx:
        next_L, next_R = lines[idx]
        idx += 1
        if next_L <= curr_R < next_R:
            cnt += 1
            if M <= next_R :
                return cnt
            while idx < max_idx:
                nnext_L, nnext_R = lines[idx]
                if nnext_L <= curr_R < nnext_R: # 조건 추가해야함 nnext_R > next_R
                    if M <= nnext_R :
                        return cnt
                    next_L, next_R = nnext_L, nnext_R
                    idx += 1
                else:
                    break
            curr_R = next_R
        elif curr_R < next_L:
            return 0
    return 0
        
print(sol())
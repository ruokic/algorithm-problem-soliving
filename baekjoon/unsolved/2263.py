import sys
sys.setrecursionlimit(100010)
input = sys.stdin.readline
N = int(input())
inorder = list(input().split())
postorder = list(input().split())
def pre(inor, postor):
    if len(inor) <= 1: return inor
    root = postor[len(postor) - 1]
    root_idx = inor.index(root)
    left = right = []
    if root_idx > 0:
        left = pre(inor[0:root_idx], postor[0:root_idx])
    if root_idx < len(inor) - 1:
        right = pre(inor[root_idx + 1:], postor[root_idx:len(postor) - 1])
    return [root, *left, *right]
print(*pre(inorder, postorder))
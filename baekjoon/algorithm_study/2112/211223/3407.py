import sys
input = sys.stdin.readline

elements = (
    'h', 'he', 'li', 'be', 'b', 'c', 'n', 'o', 'f', 'ne', 'na', 'mg', 
    'al', 'si', 'p', 's', 'cl', 'ar', 'k', 'ca', 'sc', 'ti', 'v', 'cr', 
    'mn', 'fe', 'co', 'ni', 'cu', 'zn', 'ga', 'ge', 'as', 'se', 'br', 
    'kr', 'rb', 'sr', 'y', 'zr', 'nb', 'mo', 'tc', 'ru', 'rh', 'pd', 
    'ag', 'cd', 'in', 'sn', 'sb', 'te', 'i', 'xe', 'cs', 'ba', 'hf', 
    'ta', 'w', 're', 'os', 'ir', 'pt', 'au', 'hg', 'tl', 'pb', 'bi', 
    'po', 'at', 'rn', 'fr', 'ra', 'rf', 'db', 'sg', 'bh', 'hs', 'mt', 
    'ds', 'rg', 'cn', 'fl', 'lv', 'la', 'ce', 'pr', 'nd', 'pm', 'sm', 
    'eu', 'gd', 'tb', 'dy', 'ho', 'er', 'tm', 'yb', 'lu', 'ac', 'th', 
    'pa', 'u', 'np', 'pu', 'am', 'cm', 'bk', 'cf', 'es', 'fm', 'md', 
    'no', 'lr',
)

T = int(input())
for _ in range(T):
    word = input().rstrip()
    length = len(word)

    a = 1
    if word[0] in elements:
        b = 1
    else:
        b = 0
    c = 0
    for i in range(1, length):
        if word[i] in elements:
            c += b
        if word[i - 1:i + 1] in elements:
            c += a
        a, b, c = b, c, 0
        if a + b == 0:
            break
    if b:
        print('YES')
    else:
        print('NO')

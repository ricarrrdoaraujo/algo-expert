# Recursive approach
# time O(2**n) | space O(n)
# To each n we gonna store 2 children nodes on the stack frame, some of then will be repeated
def getNthFib(n):
    if n == 2:
        return 1
    elif n == 1:
        return 0
    else:
        return getNthFib(n - 1) + getNthFib(n - 2)

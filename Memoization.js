function fib(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    var result = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = result;
    return result
}

fib(100)
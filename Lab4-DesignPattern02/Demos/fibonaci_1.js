function fib(n) {
    const memorize = {};
    
    function helper(n) {
    if (memorize[n]) {
        return memorize[n];
    } else {
        if (n <= 1) return 1;
    }
    return memorize[n] = helper(n - 1) + helper(n - 2);
    }
    return helper(n);
}
console.log(fib(5));

var fibonacci = (function() {
    var memo = {};

    function fibo(n) {
        var value;

        if (n in memo) {
            value = memo[n];
        } else {
            if (n === 0 || n === 1)
                value = 1;
            else
                value = fibo(n - 1) + fibo(n - 2);

            memo[n] = value;
        }

        return value;
    }

    return fibo;
})();

console.log(fibonacci(8));
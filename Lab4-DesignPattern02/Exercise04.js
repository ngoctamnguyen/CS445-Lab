/*
Create a memoized version of the following fibonacci() recursive method to improve its performance.
This line test modified on fork
*/

const fibonacci = (function() {
    let memo = {};

    function fibo(n) {
        let value;
        //n in memo
        if (memo[n]) {
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

console.log(fibonacci(5));
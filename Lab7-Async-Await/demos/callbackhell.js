function multiplyBy10Async(num, callback) {
    setTimeout(callback, 1000, num * 10);
}

function withCallback() {
    multiplyBy10Async(5, (num1) => {
        multiplyBy10Async(num1, (num2) => {
            console.log(num2);
        });
    });
}

withCallback();
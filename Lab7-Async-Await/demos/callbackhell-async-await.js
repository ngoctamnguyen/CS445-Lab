function multiplyBy10Async(num, callback) {
    setTimeout(callback, 1000, num * 10);
}

function multiplyBy10Promise(num) {
    return new Promise(function(resolve, reject) {
        multiplyBy10Async(num, (result) => resolve(result));
    });
}

async function withAsyncAndAwait() {
    let res1 = await multiplyBy10Promise(5);
    let res2 = await multiplyBy10Promise(res1);
    console.log(res2);
}

withAsyncAndAwait();
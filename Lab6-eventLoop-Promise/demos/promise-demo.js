let promise = new Promise(function(resolve, reject) {
    const random = Math.random();
    console.log('random: ', random);
    if (random > 0.5) {
        setTimeout(() => resolve("done!"), 1000);
    } else {
        setTimeout(() => reject(new Error("Whoops!")), 1000);
    }

});

promise.then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Promise ready!"));
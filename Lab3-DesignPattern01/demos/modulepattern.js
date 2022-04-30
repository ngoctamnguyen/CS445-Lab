const counterModule = (function() {
    let counter = 0;
    return {
        incrementCounter: function() {
            return counter++;
        },
        resetCounter: function() {
            console.log("counter value prior to reset: " + counter);
            counter = 0;
        }
    };
})();

counterModule.incrementCounter();
counterModule.resetCounter();
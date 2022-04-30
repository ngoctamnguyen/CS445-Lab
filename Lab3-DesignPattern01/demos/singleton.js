const Singleton = (function() {
    let instance;

    return {
        getInstance: function(message) {
            if (!instance) {
                instance = new Object(message);
            }
            return instance;
        }
    };
})();

const instance1 = Singleton.getInstance("I am instance 1");
const instance2 = Singleton.getInstance("I am instance 2");

console.log(instance1);
console.log(instance2);

console.log("Same instance? " + (instance1 === instance2));
const f2 = (function() {
    let memo = new Map();
    return function(n) {
        let value;
        if (memo.has(n)) {
            value = memo.get(n);
        } else {
            if (n === 0 || n === 1)
                value = 1;
            else
                value = f2(n - 1) + f2(n - 2);
            memo.set(n, value);
        }
        return value;
    }
})();

// console.log(f2(5));

const f = (function() {
    let memo = {};
    return function(n) {
        let value;
        if (n in memo) {
            value = memo[n];
        } else {
            if (n === 0 || n === 1)
                value = 1;
            else
                value = f(n - 1) + f(n - 2);
            memo[n] = value;
        }
        return value;
    }
})();



const counterModule = (function() {
    let counter = 1;
    return {
        incrementCounter: function() {
            return counter++;
        },
        resetCounter: function() {
            counter = 1;
        }
    };
})();
// console.log(counterModule.incrementCounter()); //return 1
// console.log(counterModule.incrementCounter()); //return 2
// console.log(counterModule.incrementCounter()); //return 3
// counterModule.resetCounter();
// console.log(counterModule.incrementCounter()); //return 1


class Subject {

    constructor() {
        this.observer = {};
    }

    on(event, fn) {
        if (!this.observer[event]) {
            this.observer[event] = [fn];
        } else {
            this.observer[event].push(fn);
        }
    }

    emit(event, message) {
        this.observer[event].forEach(fn => fn(message));
    }

}


class Subject2 {

    observers = new Map();

    on(event, fn) {
        if (!this.observers.has(event)) {
            this.observers.set(event, [fn]);
        } else {
            this.observers.get(event).push(fn);
        }
    }

    emit(event, message) {
        this.observers.get(event).forEach(fn => fn(message));
    }

}

const subject = new Subject2();
subject.on('eat', console.log); // register an observer
subject.on('study', console.log); // register an observer

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
//output for Line above: subject.emit('eat', 'Corn');
// Corn
// foo: Corn
subject.emit('study', 'cs445');
//output for Line above: subject.emit('study', 'cs445');
// cs445
// foo: cs445

subject.on('greet', msg => console.log('greet: ' + msg));
subject.on('greet', msg => console.log('greet2: ' + msg));
subject.emit('greet', 'Hi...');
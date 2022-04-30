function Subject() {
    this.observers = [];
}

Subject.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
    },
    emit: function(msg) {
        this.observers.forEach(function(fn) {
            fn.call(null, msg);
        });
    }
}

const subject = new Subject();
subject.subscribe(console.log);
subject.emit('Hello');
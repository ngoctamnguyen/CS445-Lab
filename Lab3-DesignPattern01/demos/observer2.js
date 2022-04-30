class Subject {
    observers = [];

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(ob => ob !== observer);
    }

    next(message) {
        this.observers.forEach(ob => {
            ob.next(message);
        });
    }
}

const subject = new Subject();
let observer1 = {
    next: msg => console.log('Observer A ' + msg)
};
subject.subscribe(observer1);
let observer2 = {
    next: msg => console.log('Observer B ' + msg)
};
subject.subscribe(observer2);
subject.next('Hello');
subject.next('Hi');
subject.unsubscribe(observer2);
subject.next('ya');
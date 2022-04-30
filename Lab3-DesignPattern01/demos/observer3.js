class Publisher {

    constructor() {
        this.subscriberList = [];
    }

    subscribe(subscriber) {
        this.subscriberList.push(subscriber);
    }

    unsubscribe(subscriber) {
        this.subscriberList = this.subscriberList.filter(sb => sb !== subscriber);
    }

    notify(email) {
        this.subscriberList.forEach(subscriber => {
            subscriber.next(email);
        });
    }

}

class Subscriber {

    constructor(username) {
        this.username = username;
    }

    next(message) {
        console.log(`${this.username} got a message: ${message}`);
    }

}

const miu = new Publisher();

const john = new Subscriber('John');
miu.subscribe(john);

const edward = new Subscriber('Edward');
miu.subscribe(edward);

miu.notify('Welcome to MIU');
miu.notify('This is CS445 course');

miu.subscribe({
    username: 'Tina',
    next(message) {
        console.log(`${this.username} got a message: ${message}`);
    }
});

miu.notify('------Hello--------');

miu.unsubscribe(edward);
miu.notify('------More message--------');
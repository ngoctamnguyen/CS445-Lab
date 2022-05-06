class Singleton {

    constructor() {
        console.log(Singleton.instance);
        if (!Singleton.instance) {
            Singleton.instance = this;
        }

        return Singleton.instance;
    }

}

const instance1 = new Singleton();
const instance2 = new Singleton();
const instance3 = new Singleton();
const instance4 = new Singleton();
console.log(instance1 === instance2);
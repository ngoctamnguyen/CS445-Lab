class Singleton {

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }

        return Singleton.instance;
    }

}

const instance1 = new Singleton();  //undefined
const instance2 = new Singleton();  //Singleton {}
const instance3 = new Singleton();   //Singleton {}
const instance4 = new Singleton();   //Singleton {}
console.log(instance1 === instance2);
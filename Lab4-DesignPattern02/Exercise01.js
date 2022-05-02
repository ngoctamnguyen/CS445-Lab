/*
Implement Factory Method pattern to create two types of light bulbs: regular bulbs and energy saver bulbs.

Regular bulbs have a range of lumens between 50 and 100 and last for 1 year.
Energy saver bulbs have a range of lumens between 5 and 40 and last for 10 years and comes in multiple colors.
*/

class Regular {
    constructor() {
        this.range = [50, 100];
        this.age = 1;
    }
}

class Energy {
    constructor(color) {
        this.range = [5, 40];
        this.age = 10;
        this.color = color;
    }
}

class Factory {
    createBulb(type,color) {
        let bulb;

        if (type === "regular") {
            bulb = new Regular();
        } else if (type === "energy") {
            bulb = new Energy(color);
        }

        return bulb;
    }
}


const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}

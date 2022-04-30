const car = {
    name: "Toyota Camry",
    drive() {
        console.log("I'm driving!");
    },
    honk() {
        console.log("Horn is making sound!");
    }
};

const myCar = Object.create(car);
myCar.drive();
console.log(myCar.name);
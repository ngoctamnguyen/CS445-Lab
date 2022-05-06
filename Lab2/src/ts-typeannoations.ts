var age: number = 32; // number variable
var firstname: string = "John";// string variable
var isUpdated: boolean = true;// Boolean variable

function display(id: number, name: string) {
    console.log("Id = " + id + ", Name = " + name);
}

var employee: {
    id: number;
    name: string;
};

employee = {
    id: 100,
    name: "John"
}
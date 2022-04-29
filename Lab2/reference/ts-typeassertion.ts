let code: any = 123;
//we know the code is of type number, even it has been declared as 'any'
//While assigning code to employeeCode, we have asserted that code is of type number. We're certain about it.
let employeeCode = <number>code;
//so the type of employeeCode is number
console.log(typeof (employeeCode)); //Output: number


// let student = {};
// student.name = "John"; //Compiler Error: Property 'name' does not exist on type '{}'
// student.code = 123; //Compiler Error: Property 'code' does not exist on type '{}'

interface Student {
    name: string;
    code: number;
}

let student = <Student>{};
student.name = "John"; // OK
student.code = 123; // OK
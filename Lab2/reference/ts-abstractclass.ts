abstract class Employee {
    fname: string;
    lname: string;
    salary: number;
    abstract address: string;

    constructor(fname: string, lname: string, salary: number) {
        this.fname = fname;
        this.lname = lname;
        this.salary = salary;
    }

    abstract computeAnnualSalary(): number;
}

class HourlyEmployee extends Employee {
    address: string = 'default';
    hoursPerWeek: number;

    constructor(fname: string, lname: string, salary: number, hoursPerWeek: number) {
        super(fname, lname, salary);
        this.hoursPerWeek = hoursPerWeek;
    }

    computeAnnualSalary(): number {
        return this.salary * this.hoursPerWeek * 52;
    }
}

let john = new HourlyEmployee('John', 'Smith', 30, 40);
console.log(john.computeAnnualSalary());
console.log(john.address);
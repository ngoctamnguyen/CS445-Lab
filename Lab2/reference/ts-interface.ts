// interface IEmployee {
//     empCode: number;
//     empName: string;
//     setEmpName(name: string): void;
//     getEmpName(): string;
// }

// let emp: IEmployee = {
//     empCode: 1001,
//     empName: 'John',
//     setEmpName: function (name: string): void {
//         this.empName = name;
//     },
//     getEmpName: function () {
//         return this.empName;
//     }
// }
// emp.setEmpName('Edward');
// console.log(emp.getEmpName());


// interface IKeyPair {
//     readonly key: number;
//     value?: string;
// }

// let kv1: IKeyPair = { key: 1, value: "John" };
// let kv2: IKeyPair = { key: 2 };
// // kv2.key = 3; // Compiler error


// interface ICity {
//     name: string;
// }

// interface IZipcode extends ICity {
//     zipcode: number;
// }

// let northStreet: IZipcode = {
//     zipcode: 52557,
//     name: "Fairfield"
// }

// interface ICourse {
//     code: number;
//     name: string;
//     grade: number;
//     setGrade(grade: number): void;
//     getGrade(): number;
// }

// class Course implements ICourse {
//     code: number;
//     name: string;
//     grade: number = 0; //strict type checking

//     constructor(code: number, name: string) {
//         this.code = code;
//         this.name = name;
//     }
//     setGrade(grade: number): void {
//         this.grade = grade;
//     }
//     getGrade(): number {
//         return this.grade;
//     }
// }

// let course = new Course(445, "Modern Asynchronous Programming");




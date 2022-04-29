// interface IEmployee {
//     empCode: number;
//     empName: string;
//     setEmpName(name: string): void;
//     getEmpName: () => string;
// }

// let emp: IEmployee = {
//         empCode: 1001,
//         empName: 'John',
//         setEmpName: function (name: string): void {
//         this.empName = name;
//         },
//         getEmpName: function () {
//         return this.empName;
//         }
// }
// emp.setEmpName('Edward');
// console.log(emp.getEmpName());

// //=====extended=============================
// interface ICity {
//     name: string;
// }
// interface IZipcode extends ICity {
//     zipcode: number;
// }

// let Fairfield: IZipcode = {
//     name: "Fairfield",
//     zipcode: 52556
// }

// console.log(Fairfield);

// //===implementing=======
// //The implemen ting class can de fine e x t ra p rope r ties and me thods , bu t a t leas t i t mus t de fine all the membe rs o f an in te r fa ce .
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
//     grade: number = 0;
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
// let course = new Course(445, "Modern Asynchronous Programming");

// console.log(course);

//A class can implemen ts mul tiple in te r fa ces .

interface ICity {
    name: string;
}
interface ICounty {
    areacode: number;
}
class Course {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
class MSD extends Course implements ICity, ICounty {
    areacode: number = 1;
    name: string = 'Fairfield';
    code: number;
    constructor (code: number, name: string) {
        super(name);
        this.code = code;
    }
    displayName(): void {
        console.log(`Name = ${this.name}, Course code = ${this.code}`);
    }
}

let cs445 = new MSD(52556, 'My Course');
console.log(cs445);
cs445.displayName();



    
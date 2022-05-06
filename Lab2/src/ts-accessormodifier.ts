// class Course {
//     public code: string;
//     name: string;
// }

// let course = new Course();
// course.code = "CS445";
// course.name = "MAP";


// class Course {
//     private code: string;
//     name: string;
// }

// let course = new Course();
// course.code = "CS445"; // Compiler Error
// course.name = "MAP"; // OK


// class Course {
//     public name: string;
//     protected code: number;
//     constructor(name: string, code: number) {
//         this.name = name;
//         this.code = code;
//     }
// }

// class MAPCourse extends Course {
//     private details: string;
//     constructor(name: string, code: number, department: string) {
//         super(name, code);
//         this.details = `${department} - ${this.code}`;
//     }
// }

// let map = new MAPCourse("Modern Asynchronous Programming", 445, "Computer Science");
// map.code; // Compiler Error

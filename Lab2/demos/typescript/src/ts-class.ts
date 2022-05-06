// class Course {
//     name: string;
//     constructor(name: string) { this.name = name }
// }

// class MSD extends Course {
//     code: number;
//     constructor(code: number, name: string) {
//         super(name);
//         this.code = code;
//     }
//     displayName(): void {
//         console.log(`Name = ${this.name}, Course Code = CS${this.code}`);
//     }
// }

// let course = new MSD(445, "Modern Asynchronous Programming");
// course.displayName(); // Name = Modern Asynchronous Programming, Course Code = CS445

// interface ICourse {
//     name: string;
//     display(): void;
// }

// interface ICode {
//     code: number;
// }

// class MAP implements ICourse, ICode {
//     code: number;
//     name: string;

//     constructor(code: number, name: string) {
//         this.code = code;
//         this.name = name;
//     }

//     display(): void {
//         console.log(`${this.name}, Course Code = CS${this.code}`);
//     }
// }

// let wad: MAP = new MAP(445, "Modern Asynchronous Programming");
// wad.display(); // Modern Asynchronous Programming, Course Code = CS445



// class Meditator {
//     name: string;
//     constructor(name: string) { this.name = name }
//     meditate(duration: number = 20) {
//         console.log(this.name + " is meditating for " + duration + " mins!");
//     }
// }

// class Sidha extends Meditator {
//     constructor(name: string) { super(name) }
//     meditate(duration: number = 40) {
//         console.log('Meditation started')
//         super.meditate(duration);
//     }
// }

// let john = new Sidha("John");
// john.meditate();  // Meditation started John is meditating for 40 mins!

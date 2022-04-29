var emp = {
    empCode: 1001,
    empName: 'John',
    setEmpName: function (name) {
        this.empName = name;
    },
    getEmpName: function () {
        return this.empName;
    }
};
emp.setEmpName('Edward');
console.log(emp.getEmpName());
var Fairfield = {
    name: "Fairfield",
    zipcode: 52556
};
console.log(Fairfield);
var Course = /** @class */ (function () {
    function Course(code, name) {
        this.grade = 0;
        this.code = code;
        this.name = name;
    }
    Course.prototype.setGrade = function (grade) {
        this.grade = grade;
    };
    Course.prototype.getGrade = function () {
        return this.grade;
    };
    return Course;
}());
var course = new Course(445, "Modern Asynchronous Programming");
console.log(course);

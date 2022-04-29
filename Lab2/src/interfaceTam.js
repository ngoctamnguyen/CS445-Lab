// interface IEmployee {
//     empCode: number;
//     empName: string;
//     setEmpName(name: string): void;
//     getEmpName: () => string;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    return Course;
}());
var MSD = /** @class */ (function (_super) {
    __extends(MSD, _super);
    function MSD(code, name) {
        var _this = _super.call(this, name) || this;
        _this.areacode = 1;
        _this.name = 'Fairfield';
        _this.code = code;
        return _this;
    }
    MSD.prototype.displayName = function () {
        console.log("Name = ".concat(this.name, ", Course code = ").concat(this.code));
    };
    return MSD;
}(Course));
var cs445 = new MSD(52556, 'My Course');
console.log(cs445);
cs445.displayName();

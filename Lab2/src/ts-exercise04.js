/*
Re-write the following code using TypeScript Class syntax. Try to be as explicit as
 possible and add Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.
*/
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function () {
    return this.width * this.length;
};
console.log(rectangle.calcSize()); // 10

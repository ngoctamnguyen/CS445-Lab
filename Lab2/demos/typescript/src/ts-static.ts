class Circle {
    static pi: number = 3.14;

    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }
}
Circle.pi; // returns 3.14
Circle.calculateArea(5); // returns 78.5

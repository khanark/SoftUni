class Point {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    static distance(x, y) {
        const xDiff = Math.abs(x.a - y.a);
        const yDiff = Math.abs(x.b - y.b);
        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));

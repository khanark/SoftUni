class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // sets this.radius to the new value diving the value passed as a parameter to the function
    set diameter(value) {
        this.radius = value / 2;
    }

    // returns the diameter of the circle
    get diameter() {
        return this.radius * 2;
    }

    // returns the area of the circle
    get area() {
        return Math.PI * this.radius ** 2;
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

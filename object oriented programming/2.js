// 2. Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calcArea() {
        return this.width * this.height;
    }

    calcPerimeter() {
        return 2 * (this.width + this.height);
    }
}

let rectangle = new Rectangle(35, 4)

const area = rectangle.calcArea();
const perimeter = rectangle.calcPerimeter();

console.log(`Area is ${area}`)
console.log(`Perimiter is ${perimeter}`)



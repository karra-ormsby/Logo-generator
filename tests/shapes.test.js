const { Circle, Square, Triangle } = require("../lib/shapes.js");

describe ('Circle', () => {
    test("should take in a colour from the user, and should output it as part of an SVG file", () => {
        const shape = new Circle();
        shape.setColor = "blue";
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />')
    })
})

describe('Square', () => {
    test("should take in a colour from the user, and should output it as part of an SVG file", () => {
        const shape = new Square();
        shape.setColor = "blue";
        expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />')
    })
})

describe('Triangle', () => {
    test("should take in a colour from the user, and should output it as part of an SVG file", () => {
        const shape = new Triangle();
        shape.setColor = "blue";
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>')
    })
})


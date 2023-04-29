class Circle {
    constructor(setColor) {
        this.setColor = setColor;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.setColor}" />`
    }
}

class Square {
    constructor(setColor) {
        this.setColor = setColor;
    }

    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.setColor}" />`
    }
}

class Triangle {
    constructor(setColor) {
        this.setColor = setColor;
    }
    
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.setColor}"/>`
    }
}

const shape = new Circle();
shape.setColor = "blue";
const svg = shape.render();
console.log(svg)


module.exports= {
    Circle,
    Square,
    Triangle
};
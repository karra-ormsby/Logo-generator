class Shapes {
    constructor (shapeColour, text, textColour){
        this.shapeColour = shapeColour,
        this.text = text,
        this.textColour = textColour
    }
}

class Circle extends Shapes{
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour);
        this.shape = 'Circle';
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="${this.shapeColour}" />
  <text x="150" y="125" width="120" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
</svg>`
    }
}

class Square extends Shapes {
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour);
        this.shape = 'Square';
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="90" y="40" width="120" height="120" fill="${this.shapeColour}" />
  <text x="150" y="125" width="120" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
</svg>`
    }
}

class Triangle extends Shapes {
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour);
        this.shape = 'Triangle';
    }
    
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150 30, 260 180, 40 180" fill="${this.shapeColour}"/>
  <text x="150" y="155" width="120" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
</svg>`
    }
}

const data = {
    shape: 'Circle',
    shapeColour: 'green',
    text: 'YES',
    textColour: 'red'
}

const circle = new Circle (data.shapeColour, data.text, data.textColour);
console.log(circle);
const circleRender = circle.render();
console.log(circleRender);

// const square = new Square(data.shapeColour, data.text, data.textColour);
// console.log(square);
// const squareRender = square.render();
// console.log(squareRender);

// const triangle = new Triangle(data.shapeColour, data.text, data.textColour);
// console.log(triangle);
// const triangleRender = triangle.render();
// console.log(triangleRender);

module.export= {
    Circle
};
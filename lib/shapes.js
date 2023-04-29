class Circle {
    setColor(shapeColour) {
        this.shapeColour = shapeColour;;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColour}" />`
    }
}

class Square {
    setColor(shapeColour) {
        this.shapeColour = shapeColour;;
    }

    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColour}" />`
    }
}

class Triangle {
    setColor(shapeColour) {
        this.shapeColour = shapeColour;;
    }
    
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColour}" />`
    }
}

// const shape = new Circle();
// shape.setColor("blue");
// console.log(shape.render());



module.exports= {
    Circle,
    Square,
    Triangle
};
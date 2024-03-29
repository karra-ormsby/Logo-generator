const { Circle, Square, Triangle } = require("./shapes");

//Based on user selection is picks the class to create from shapes.js
function renderShape (logoShape, logoColour) {
    let svgRender;

    switch (logoShape) {
        case "Circle":
            const circle = new Circle();

            circle.setColor(logoColour);
            svgRender = circle.render();

            return svgRender;

        case "Square":
            const square = new Square(logoColour);

            square.setColor(logoColour);
            svgRender = square.render();

            return svgRender;

        case "Triangle":
            const triangle = new Triangle(logoColour);

            triangle.setColor(logoColour);
            svgRender = triangle.render();

            return svgRender;
    }
}

//Given the correct shape portion of the SVG file (based on user input), writes the rest of the SVG file
function renderSVG (answers, svgShape) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${svgShape}
            <text x="150" y="125" width="120" font-size="60" text-anchor="middle" fill="${answers.textColour}">${answers.text}</text>
</svg >`
}

module.exports = { renderShape, renderSVG };


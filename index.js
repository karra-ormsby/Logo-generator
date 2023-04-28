const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require("./lib/shapes.js");

const questions = [
    {
        type: 'list',
        message: 'Select a shape for your logo.',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        //need to test that colour entered fits the parameters
        type: 'input',
        name: 'shapeColour',
        message: 'What colour would you like the shape to be? (color keyword or a hexadecimal number)'
    },
    {
        //need to test for character > 0 and characters <= 3
        type: 'input',
        name: 'text',
        message: 'Enter text for your logo (must not be more than 3 characters).',
    },
    {
        //need to test that colour entered fits the parameters
        type: 'input',
        name: 'textColour',
        message: 'What colour would you like the text to be? (color keyword or a hexadecimal number)'
    }
]

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const logo = renderLogo(answers);
            writeToFile("logo.svg", logo);
        })
        .catch((err) => {
            console.log(err)
        });
}

renderLogo = (answers) => {
    const logoShape = answers.shape;
    let svgRender;

    switch (logoShape) {
        case "Circle":
            const circle = new Circle(answers.shapeColour, answers.text, answers.textColour);
            svgRender = circle.render();
            return svgRender;
        case "Square":
            const square = new Square(answers.shapeColour, answers.text, answers.textColour);
            svgRender = square.render();
            return svgRender;
        case "Triangle":
            const triangle = new Triangle(answers.shapeColour, answers.text, answers.textColour);
            svgRender = triangle.render();
            return svgRender;
    }
}

//should wrtieToFile and renderLogo be kept in a different file for modularisation?
writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("logo.svg successfully created!")
    );
}

init();
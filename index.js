const inquirer = require('inquirer');
const fs = require('fs');
const circle = require('./lib/shapes');

// const questions = [
//     {
//         type: 'list',
//         message: 'Select a shape for your logo.',
//         name: 'shape',
//         choices: ['Circle', 'Square', 'Triangle'],
//     },
//     {
//         type: 'input',
//         name: 'shapeColour',
//         message: 'What colour would you like the shape to be? (color keyword or a hexadecimal number)'
//     },
//     {
//         type: 'input',
//         name: 'text',
//         message: 'Enter text for your logo (must not be more than 3 characters).',
//     },
//     {
//         type: 'input',
//         name: 'textColour',
//         message: 'What colour would you like the text to be? (color keyword or a hexadecimal number)'
//     }
// ]

// function init() {
//     inquirer
//         .prompt(questions)
//         .then((answers) => {
//             console.log(answers);
//             // const circle = new Circle (data.shapeColour, data.text, data.textColour);
//             console.log(circle);
//             // const circleRender = circle.render();
//             // console.log(circleRender);
//             // let svgRender;
//             // switch (answers.shapes) {
//             //     case "Circle":
//             //         const circle = new Circle(data.shapeColour, data.text, data.textColour);
//             //         svgRender = circle.render();
//             //         break;
//             //     case "Square":
//             //         const square = new Square(data.shapeColour, data.text, data.textColour);
//             //         svgRender = square.render();
//             //         break;
//             //     case "Triangle":
//             //         const triangle = new Triangle(data.shapeColour, data.text, data.textColour);
//             //         svgRender = triangle.render();
//             //         break;
//             // }
//             // console.log(svgRender);
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// }

// init();


const data = {
    shape: 'Circle',
    shapeColour: 'green',
    text: 'YES',
    textColour: 'red'
}

const svg = circle(data.shapeColour, data.text, data.textColour);
console.log(svg);
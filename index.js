//The inquirer package used to ask the user questions
const inquirer = require('inquirer');
//The validate-color package used to make sure the users input for colours is a valid colour keyword or hexadecimal color code
const { validateHTMLColorName, validateHTMLColorHex } = require("validate-color");
//Lets us use fs.writeFile
const fs = require('fs');
//The rfuctions from render.js
const { renderShape, renderSVG } = require('./lib/render')

//An array of questions to ask the user
const questions = [
    {
        type: 'list',
        message: 'Select a shape for your logo.',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColour',
        message: 'What colour would you like the shape to be? (color keyword or a hexadecimal color code)',
        validate: function(input) {
            if (validateHTMLColorName(input) || validateHTMLColorHex(input)) {
                return true;
            } else {
                return "Please enter a valid color keyword or hexadecimal color code"
            }
        }
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for your logo (must not be more than 3 characters)',
        validate: function (input) {
            if(input.lenghth === 0 || input.length > 3) {
                return "Logo text must be greater than 0 and must not be more than 3 characters ";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'textColour',
        message: 'What colour would you like the text to be? (color keyword or a hexadecimal color code)',
        validate: function (input) {
            if (validateHTMLColorName(input) || validateHTMLColorHex(input)) {
                return true;
            } else {
                return "Please enter a valid color keyword or hexadecimal color code"
            }
        }
    }
]

//Function to initialise the application
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const logoShape = answers.shape;
            const logoColour = answers.shapeColour;

            const svgShape = renderShape(logoShape, logoColour);

            const logo = renderSVG(answers, svgShape);

            writeToFile("logo.svg", logo);
        })
        .catch((err) => {
            console.log(err)
        });
}

//Writes the created SVG file to a new file, "logo.svg", or if one already exists it updates the file.
writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("Generated logo.svg")
    );
}

init();
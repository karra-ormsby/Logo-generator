const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes')

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
        message: 'What colour would you like the shape to be? (color keyword or a hexadecimal number)'
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for your logo (must not be more than 3 characters).',
    },
    {
        type: 'input',
        name: 'textColour',
        message: 'What colour would you like the text to be? (color keyword or a hexadecimal number)'
    }
]

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
        })
        .catch((err) => {
            console.log(err)
        });
}

init();
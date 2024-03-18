const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');
const fs = require('fs');

inquirer
    .prompt([
        {
             // Text for logo, has to be 3 characters
             type: 'input',
             name: 'text',
             message: 'Enter the text you want on your logo (3 char total):',
        },
        {
            // Color for text can be color name of hex value
            type: 'input',
            name: 'textColor',
            message: 'Pick a color for the text (keyword or hex):',
        },
        {
            // Pick a shape
            type: 'checkbox',
            name: 'shape',
            message: 'Pick a shape for the logo:',
            choices: [
                { name: 'circle', value: 'circle' },
                { name: 'triangle', value: 'triangle' },
                { name: 'square', value: 'square' },
            ]
        },
        {
            // Pick the shape color can be color name or hex value
            type: 'input',
            name: 'shapeColor',
            message: 'Pick a color for your shape:',
        },
    ])

    // writes logo svg file and puts it into the examples folder. logs error if error, if no error logs message
    // fs.writeFile('svg.example', examples, (error) => {
    //     if (error) {
    //         console.log(error)
    //     } else {
    //         console.log('LOGO created!!')
    //     }
    // });
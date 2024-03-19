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
             validate: function(text) {
             if(text.length > 3){
                console.error('`text` can only be three characters!');
                return false;
                // if false then the validation failed
             }
                return true;
            }
        },
        {
            // Color for text can be color name of hex value
            type: 'input',
            name: 'textColor',
            message: 'Pick a color for the text (keyword or hex):',
            validate: function(textColor) {
                const colorNameRegex = /^(red|orange|yellow|green|blue|purple|white|black)$/i;
                const hexValueRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                if(colorNameRegex.test(textColor) || hexValueRegex.test(textColor)) {
                    return true;
                } else {
                    console.error('Shucks! Must be a valid color name or hex value!')
                    return false;
                }
            }
        },
        {
            // Pick a shape
            type: 'list',
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
            validate: function(shapeColor) {
                const colorNameRegex = /^(red|orange|yellow|green|blue|purple|white|black)$/i;
                const hexValueRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                if(colorNameRegex.test(shapeColor) || hexValueRegex.test(shapeColor)) {
                    return true;
                } else {
                    console.error('Shucks! Must be a valid color name or hex value!')
                    return false;
                }
            }
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
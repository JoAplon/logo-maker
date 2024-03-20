const inquirer = require('inquirer');
const { Shapes, Circle, Polygon, Rect } = require('./lib/classes')
const fs = require('fs');


inquirer
    .prompt([
        {
            // Text for logo, has to be 3 characters
            type: 'input',
            name: 'text',
            message: 'Enter the text you want on your logo (3 char total):',
            validate: function (text) {
                if (text.length > 3) {
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
            validate: function (textColor) {
                const colorNameRegex = /^(red|orange|yellow|green|blue|purple|white|black)$/i;
                const hexValueRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                if (colorNameRegex.test(textColor) || hexValueRegex.test(textColor)) {
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
            name: 'shapes',
            message: 'Pick a shape for the logo:',
            choices: [
                { name: 'circle', value: 'circle' },
                { name: 'triangle', value: 'polygon' },
                { name: 'square', value: 'rect' },
            ]
        },
        {
            // Pick the shape color can be color name or hex value
            type: 'input',
            name: 'shapeColor',
            message: 'Pick a color for your shape:',
            validate: function (shapeColor) {
                const colorNameRegex = /^(red|orange|yellow|green|blue|purple|white|black)$/i;
                const hexValueRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                if (colorNameRegex.test(shapeColor) || hexValueRegex.test(shapeColor)) {
                    return true;
                } else {
                    console.error('Shucks! Must be a valid color name or hex value!')
                    return false;
                }
            }
        },
    ])

    // writes logo svg file and puts it into the examples folder. logs error if error, if no error logs message
    .then((response) => {
        const { text, textColor, shapes, shapeColor } = response;
        const folderPath = './examples';
        const fileName = 'logo.svg';
        const filePath = `${folderPath}/${fileName}`;


        let shapeValues = '';
        if (shapes === 'circle') {
            shapeValues = 'cx="150" cy="100" r="80"';
        } else if (shapes === 'polygon') {
            shapeValues = 'points="150,20 240,150 60,150"';
        } else {
            shapeValues = 'width="115" height="120" x="90" y="40" rx="20" ry="20"';
        }

        const svgContent = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <${shapes} ${shapeValues} fill="${shapeColor}"></${shapes}><text x="145" y="115" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
    `;

        fs.writeFile(filePath, svgContent, (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Generated logo.svg!!')
            }
        });
    })
    .catch((error) => {
        console.log(error);
    });
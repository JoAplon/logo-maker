# Logo Maker
 
![Static Badge](https://img.shields.io/badge/MIT-license?style=flat-square&label=License&labelColor=%23cdcdcd&color=salmon)  

## Description

This program takes user input and generates a simple logo. The prompt will ask for three characters that will be at the center of your logo as well as the shape you want. You can pick the color of both the text and shape as long as they are valid color names or HEX values. The characters are case sensitive and will appear how you type them. The HEX values can either be capital or lowercase. Once you complete the prompt you will receive a message in the command line that tells you if the process was successful or if there was an error. Then the logo will be made into an svg file that you can open in the browser.

Walkthrough Video: [Click Me to Watch!](https://drive.google.com/file/d/1xe6KtanV4wl_i0ChJVnMX3H8KTBQlG8Y/view)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

You need to install a json package, if you don't alreaady have one, by using the command npm init. Then you also need inquirer which can be added with npm install inquirer@8.2.4. To check if the dependencies were added run the command npm install. This should add them if they were not already there. Once this is set up you can add jest to your terminal by using npm --save-dev jest. If you don't need to run tests this section can be left out. A line needs to be added to the package.json file that looks like the following.
  

"scripts": {

    "test": "jest"

  },

Jest should now be functional, to run it use npm test. 

## Usage

This program can be used to make your own logo so you don't have to spend money on one. This logo generator produces a simple, yet professional, looking logo. This can add a nice touch to any project you want to elevate. For beginner developers, this can bring attention to your work. This program is also buildable and can be further developed to make more sophisticated logos. 

## License

This project is licensed under the MIT license.

## Contributing

N/A

## Tests

To test this project I used jest and I made multiple describe blocks in their own file. One for each of the shapes and one to make sure the shapes were rendering correctly. I was testing the expected output when each shape was selected. A class was made for each shape along with output to be rendered. The tests were given the expected value and run to make sure they matched the value in the shape classes. A parent class was made for the shapes which was extended onto the children. The shape test made sure the shapes were rendered correctly if at all.

## Questions

For questions or feedback regarding this project, please contact me at JoAplon, through my [github](https://github.com/JoAplon), or my email, jordan0aplon@gmail.com.


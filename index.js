// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

// Title
// Description
// Table of Contents --> clickable links to take to each section
// Installation, installation instructions
// Usage, usage information
// License --> list --> badge for that license is added near the top of the README and a notice 
//is added to the section of the README entitled License that 
//explains which license the application is covered under
// Contributions, contribution guidelines
// Tests, test instructions
// Questions --> link to GitHub profile & email address with instructions on how to reach me

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (value) => { if (value) { return true } else { return 'Enter title to continue' } },
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license should your project have?',
        choices: ['Apache 2.0', 'GPL v3.0', 'MIT', 'None'],
        validate: (value) => { if (value) { return true } else { return 'Please select a license to continue' } },
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project',
        validate: (value) => { if (value) { return true } else { return 'Enter description to continue' } },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide steps needed to install your project',
        validate: (value) => { if (value) { return true } else { return 'Enter installation details to continue' } },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use of your project?',
        validate: (value) => { if (value) { return true } else { return 'Enter usage details to continue' } },
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for users who want to contribute to your project:',
        validate: (value) => { if (value) { return true } else { return 'Enter guidelines to continue' } },
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions to test your project:',
        validate: (value) => { if (value) { return true } else { return 'Enter testing instructions to continue' } },
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub username?',
        validate: (value) => { if (value) { return true } else { return 'Enter username to continue' } },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (value) => { if (value) { return true } else { return 'Enter email to continue' } },
    },
]

// TODO: Create a function to write README file

const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generateREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
        var fileContent = generateMarkdown(answer);
        writeToFile(fileContent)    
        });
}

// Function call to initialize app
init();

// export the questions
module.exports = questions;
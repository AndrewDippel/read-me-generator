// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.',
    },
    {
        type: 'input',
        name: 'content-table',
        message: 'enter a table of contents.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'how do i install this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'enter the usage of this project.',
    },
    {
        type: 'list',
        message: 'please select a licence.',
        name: 'licence',
        choices: ['Mit', 'gpl', 'apache', 'gnu', 'N/A'],
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'please enter the contribution guidelines for this project. ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter a test cenario?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'please enter your email',
    },
    {
        type: 'input',
        name: 'github',
        message: 'please enter your github',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log('Generating readme')
        writeToFile('README.md', generateMarkdown({ ...response }))
    })
}
// Function call to initialize app
init();

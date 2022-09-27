// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project',
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
        name: 'Installation',
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
        choices: ['Mit', 'gpl', 'apache', 'gnu', 'N/A'],//research these licences and add sections for when each one is chosen
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'please enter the contribution guidelines for this project. ',
    },
    {
        type: 'input',//unsure what the test actually is research and adjust this section
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
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();




newReadMe(project, rmLayout);

function newReadMe(fileName)
(data) => {
    const fileName = `${data.name.toLowerCase().split(' ').join('')}.md`;


    fs.writeFile(fileName, JSON.stringify(data, project, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
    )
};

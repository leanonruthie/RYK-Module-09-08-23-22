// Work Reference #1 - Solved Lesson 09 - NodeJS 20 - Stu_Inquirer - Users
// Work Reference #2 - Solved Lesson 09 - NodeJS 28 - Stu-Mini-project
// Work Reference #3 - Youtube Video - https://www.youtube.com/watch?v=cqJQ9wbUQto

// Make sure to install Inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input >>> Please see below instead
const questions = [{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
},
{
    type: 'input',
    name: 'repository',
    message: 'What is your GitHub Repository called?',
},
{
    type: 'input',
    name: 'project',
    message: 'What is your project called?',
},
{
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project.',
},
{
    type: 'input',
    name: 'package',
    message: 'Which npm package did you install?',
},
{
    type: 'input',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
},
{
    type: 'input',
    name: 'command',
    message: 'What command should be run to install dependencies?'
},
{
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
},
{
    type: 'input',
    name: 'url',
    message: 'Please provide the url deployed for this project.',

},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log('Success!')
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    // call upon ththe above const questions array
    inquirer.prompt(questions)
        .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();

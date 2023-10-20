// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter Project Title :",
        name: "title",
        default: "Project Title",
    },
    {
        type: "input",
        message: "Enter Project Description :",
        name: "description",
        default: "Project description..",
    },
    {
        type: "input",
        message: "Enter Deployed link :",
        name: "deployedLink",
        default: "Deployed Link..",
    },
    // {
    //     type: "confirm",
    //     message: "Create Table Of Contents section ?",
    //     name: "tableOfContents",
    //     default: false,
    // },
    {
        type: "input",
        message: "Enter Installation Section text :",
        name: "installation",
        default: "Installation instructions..",
    },
    {
        type: "input",
        message: "Enter Usage Section text :",
        name: "usage",
        default: "Usage...",
    },
    {
        type: "confirm",
        message: "Add license ?",
        name: "addLicense",
        default: true,
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select your license :',
        choices: [
          'Red',
          'Green',
          'Blue',
          'Yellow',
          'Orange',
          'Purple',
        ],
        when: (answer) => answer.addLicense === true,
    },
    {
        type: "input",
        message: "Enter Contribution Guidelines :",
        name: "contribution",
        default: "Contribution Guidelines",
    },
    {
        type: "input",
        message: "Enter Test instructions :",
        name: "test",
        default: "Test Instructions",
    },
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if(err) {
        throw(err);
    }
    console.log(`${fileName}  created successfully.`);
  });
}

// TODO: Create a function to initialize app
function init() {
//* use inquirer to display questions to user
//* call generateMarkdown funcn on the data collected
//* take what is returned, then pass it to the writeToFile function

    console.log("init in index: ");
    inquirer.prompt(questions)
        .then(answers => {
            console.log("answers ", answers);

            //checking the answer.section generate markdowns..
            console.log(generateMarkdown(answers));
            writeToFile("README.md",generateMarkdown(answers));
        });

}

// Function call to initialize app
init();

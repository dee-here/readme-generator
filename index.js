//  Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//  Create an array of questions for user input
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
    default: "https://dee-here.github.io/space-jam-x/",
  },
  {
    type: "confirm",
    message: "Create Table Of Contents section ?",
    name: "tableOfContents",
    default: false,
  },
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
    type: "list",
    name: "license",
    message: "Select your license :",
    choices: ["MIT", "Apache", "GPL", "Unlicense"],
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
  {
    type: "input",
    message: "Enter name for Author section:",
    name: "name",
    default: "Deepak Sinha",
  },
  {
    type: "input",
    message: "Enter email:",
    name: "email",
    default: "deepakdilse@gmail.com",
  },
  {
    type: "input",
    message: "Enter GitHub username:",
    name: "github",
    default: "dee-here",
  },
];
//  Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    }
    console.log(`${fileName}  created successfully.`);
  });
}

// Create a function to initialize app
function init() {
  //* use inquirer to display questions to user
  //* call generateMarkdown funcn on the data collected
  //* take what is returned, then pass it to the writeToFile function
  inquirer.prompt(questions).then((answers) => {
    writeToFile("./generated-readme/README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();

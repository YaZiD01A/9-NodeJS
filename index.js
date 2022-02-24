// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },

    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },

    {
        type: "input",
        name: "email",
        message: "what is your email?"
    },


    {
        type: "input",
        name: "description",
        message: "what is the description of the project?"
    },

    {
        type: "input",
        name: "installation",
        message: "how do you install the project?"
    },

    {
        type: "list",
        name: "license",
        message: "what is the license you want?",
        choices: ["MIT", "Apache 2.0", "Boost"]
    },

];

// TODO: Create a function to write README file
function writeToFile(template) {
    fs.writeFile("README.md", template, (error) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log("file created")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((ans) => {
            console.log(ans)
            console.log(ans.username)
            const template = generateMarkdown(ans)
            console.log(template)
            writeToFile(template)
        })

}

// Function call to initialize app
init();

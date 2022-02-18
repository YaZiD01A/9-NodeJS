// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
        {
            type:"input",
            name:"title",
            message:"What is the title of your project?"
        },

        {
            type:"input",
            name:"username",
            message:"What is your github username?"
        },

        {
            type:"input",
            name:"email",
            message:"what is your email?"
        }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((ans)=>{
        console.log(ans)
        console.log(ans.username)
        const template = generateMarkdown(ans)
        console.log(template)
    })

}

// Function call to initialize app
init();

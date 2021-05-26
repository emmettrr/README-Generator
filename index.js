const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const readme = require("./util/readme");
const writeFile = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the project title?",
      validate: function (response) {
        if (response.length < 1) {
          return console.log("You must input a title!");
        }
        return true;
      },
    },
    {
      type: "input",
      name: "description",
      message: "Write a brief description of your project: ",
      validate: function (response) {
        if (response.length < 1) {
          return console.log("You must input a description!");
        }
        return true;
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Describe the installation process if any: ",
      validate: function (response) {
        if (response.length < 1) {
          return console.log("You must how to install the application!");
        }
        return true;
      },
    },
    {
      type: "input",
      name: "usage",
      message: "What is this project usage for?",
      validate: function (response) {
        if (response.length < 1) {
          return console.log("You must input your usage!");
        }
        return true;
      },
    },
    {
      type: "list",
      name: "license",
      message: "Chose the appropriate license for this project: ",
      choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Who are the contributors of this projects?",
    },
    {
      type: "input",
      name: "tests",
      message: "Is there a test included?",
    },
    {
      type: "input",
      name: "image",
      message: "What is the relative-path of your image?",
    },
    {
      type: "list",
      name: "another",
      message: "Do you have another image?",
      choices: ["Yes", "No"],
      validate: function (response) {
        if (response.choices === "Yes") {
          return image;
        }
      },
    },
    {
      type: "input",
      name: "questions",
      message: "What do I do if I have an issue? ",
    },
    {
      type: "input",
      name: "username",
      message: "Please enter your GitHub username: ",
      validate: function (response) {
        if (response.length < 1) {
          return console.log("You must input your username!");
        }
        return true;
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email: ",
      validate: function (response) {
        if (response.length < 1) {
          return console.log("You must input your email!");
        }
        return true;
      },
    },
  ]);
}

async function init() {
  try {
    const answers = await promptUser();
    const useAnswers = readme(answers);
    await writeFile("./util/README.md", useAnswers);
    console.log("Successfully wrote to readme!");
  } catch (err) {
    console.log(err);
  }
}

init();

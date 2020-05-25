const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is your Project Title?",
  },
  //   {
  //     type: "input",
  //     name: "description",
  //     message: "What is your Description?",
  //   },
  //   {
  //     type: "input",
  //     name: "tableofcontents",
  //     message: "What is your Table Of Contents?",
  //   },
  //   {
  //     type: "input",
  //     name: "install",
  //     message: "How to Install ?",
  //   },
  //   {
  //     type: "input",
  //     name: "usage",
  //     message: "What is your Usage?",
  //   },
  //   {
  //     type: "input",
  //     name: "license",
  //     message: "What is your License?",
  //   },
  //   {
  //     type: "input",
  //     name: "contributors",
  //     message: "Who are your Contributors ?",
  //   },
  //   {
  //     type: "input",
  //     name: "tests",
  //     message: "What are your Tests ?",
  //   },
  //   {
  //     type: "input",
  //     name: "questions",
  //     message: "What are your Questions?",
  //   },
  //   {
  //     type: "input",
  //     name: "picture",
  //     message: "What is your User Github Profile Picture?",
  //   },
  //   {
  //     type: "input",
  //     name: "email",
  //     message: "What is your User Github Email?",
  //   },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    // console.log("success");
  });
}

function init() {
  writeToFile("READMENEW.md", "#README Generator");

  inquirer.prompt(questions).then((response) => {
    // create project title

    fs.appendFile(
      "READMENEW.md",
      "\n" + "## Project Title" + "\n\n" + response.projectTitle + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );

    // create a description
    fs.appendFile(
      "READMENEW.md",
      "\n" + "## Description" + "\n\n" + response.description + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );

    // to create a table of contents

    fs.appendFile(
      "READMENEW.md",
      "\n" + "## Table Of Contents" + "\n\n" + response.tableofcontents + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    // how to install
    fs.appendFile(
      "READMENEW.md",
      "\n" + "## Install" + "\n\n" + response.install + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    // what is your usage
    fs.appendFile(
      "READMENEW.md",
      "\n" + "## Usage" + "\n\n" + response.usage + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );

    //what is your license
    fs.appendFile(
      "READMENEW.md",
      "\n" + "## License" + "\n\n" + response.license + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    //  who are the contributors
    fs.appendFile(
      "READMENEW.md",
      "\n" + "## Contributors" + "\n\n" + response.contributors + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );

    // what are your tests
    fs.appendFile(
      "READMENEW.md",
      "\n" + "## Tests" + "\n\n" + response.tests + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );

    // what are the questions
    fs.appendFile(
      "READMENEW.md",
      "\n" + "## Questions" + "\n\n" + response.questions + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );

    // what is your github profile pic
    fs.appendFile(
      "READMENEW.md",
      "\n" + "## Github Profile" + "\n\n" + response.picture + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );

    // what is your github email

    fs.appendFile(
      "READMENEW.md",
      "\n" + "## Github Email" + "\n\n" + response.email + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
  });
}

init();

const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

inquirer
  .prompt([
    {
      type: "input",
      name: "github_username",
      message: "Enter your GitHub username:",
    },
    {
      type: "input",
      name: "projectTitle",
      message: "What is your Project Title?",
    },
    {
      type: "input",
      name: "description",
      message: "What is your Description?",
    },
    {
      type: "input",
      name: "install",
      message: "How to Install ?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is your Usage?",
    },
    {
      type: "list",
      name: "license",
      message: "What is your license ?",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public 2.0",
        "Apache 2.0",
        "MIT",
        "Boost Software 1.0",
        "The Unlicense",
        "None",
      ],
    },
    {
      type: "input",
      name: "contributors",
      message: "Who are your Contributors ?",
    },
    {
      type: "input",
      name: "tests",
      message: "What are your Tests ?",
    },
    {
      type: "input",
      name: "questions",
      message: "What are your Questions?",
    },
    {
      type: "input",
      name: "picture",
      message: "What is your User Github Profile Picture?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your User Github Email?",
    },
  ])
  .then(function (answers) {
    const {
      github_username,
      projectTitle,
      description,
      // tableofcontents,
      install,
      usage,
      license,
      contributors,
      tests,
      questions,
      picture,
      email,
    } = answers;

    init(
      github_username,
      projectTitle,
      description,
      // tableofcontents,
      install,
      usage,
      license,
      contributors,
      tests,
      questions,
      picture,
      email
    );
  });
function createFile(fileContent) {
  fs.writeFile("READMENEW.md", fileContent, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("README.md file created.");
  });
}

function init(
  github_username,
  projectTitle,
  description,
  //tableofcontents,
  install,
  usage,
  license,
  contributors,
  tests,
  questions,
  picture,
  email
) {
  //writeToFile("# README Generator");
  let readmefile = "";

  //createFile(readmefile);

  let badge = createBadge("npm", "6.14.5");
  console.log(badge);

  readmefile = `${badge}`;
  fs.appendFile(
    "READMENEW.md",
    "\n" + "# README Genarator" + "\n\n" + readmefile + "\n",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    }
  );

  // create project title

  fs.appendFile(
    "READMENEW.md",
    "\n" + "## Project Title" + "\r\n" + projectTitle + "\r\r\n",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(projectTitle);
      }
    }
  );

  // create a description
  fs.appendFile(
    "READMENEW.md",
    "\n" + "## Description" + "\r\n" + description + "\r\r\n",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    }
  );

  // // to create a table of contents
  let toc = setUpTableOfContents(
    readmefile,
    install,
    usage,
    license,
    contributors,
    tests,
    questions
  );
  //console.log("check", readmefile);

  fs.appendFile("READMENEW.md", toc, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success");
    }
  });

  // // how to install
  fs.appendFile(
    "READMENEW.md",
    "\n" + "## Install" + "\r\n" + install + "\n",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    }
  );
  // // what is your usage
  fs.appendFile(
    "READMENEW.md",
    "\n" + "## Usage" + "\r\n" + usage + "\n",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    }
  );

  // //what is your license
  fs.appendFile(
    "READMENEW.md",
    "\n" + "## License" + "\n\n" + license + "\n",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    }
  );
  // //  who are the contributors
  fs.appendFile(
    "READMENEW.md",
    "\n" + "## Contributors" + "\n\n" + contributors + "\n",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    }
  );

  // // what are your tests
  fs.appendFile(
    "READMENEW.md",
    "\n" + "## Tests" + "\n\n" + tests + "\n",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    }
  );

  //   // // what are the questions
  fs.appendFile(
    "READMENEW.md",
    "\n" + "## Questions" + "\n\n" + questions + "\n",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    }
  );

  github_username.trim();

  if (github_username !== "") {
    const github_query = `https://api.github.com/users/${github_username}/events/public`;

    axios.get(github_query).then(function (github_userdata) {
      //user profile image:
      let gitHubProfileImage = getProfileImage(github_userdata);
      // what is your github profile pic
      fs.appendFile(
        "READMENEW.md",
        "\n" + "## Github Profile" + "\n\n" + gitHubProfileImage + "\n",
        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Success");
          }
        }
      );

      //user email address:
      let gitHubEmail = getEmailAddress(github_userdata);
      // // what is your github email

      fs.appendFile(
        "READMENEW.md",
        "\n" + "## Github Email" + "\n\n" + gitHubEmail + "\n",
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
}
function createBadge(type, title) {
  return `![${type}](https://img.shields.io/badge/${type}-${title}-green)`;
}

function setUpTableOfContents(
  readmefile,
  install,
  usage,
  license,
  contributors,
  tests,
  questions
) {
  let table_of_contents = [];

  if (install !== "") {
    table_of_contents.push(`* [Installation](#installation)`);
  }

  if (usage !== "") {
    table_of_contents.push(`* [Usage](#usage)`);
  }

  if (license !== "") {
    table_of_contents.push(`* [License](#license)`);
  }

  if (contributors !== "") {
    table_of_contents.push(`* [Contributing](#contributing)`);
  }

  if (tests !== "") {
    table_of_contents.push(`* [Tests](#tests)`);
  }

  if (questions !== "") {
    table_of_contents.push(`* [Questions](#questions) \r\n`);
  }

  readmefile = `## Table of Contents \r\n`;

  for (let i = 0; i < table_of_contents.length; i++) {
    readmefile += `${table_of_contents[i]} \r\n`;
  }

  return readmefile;
}

// git hub imageurl

function getProfileImage(github_userdata) {
  for (let i = 0; i < github_userdata.data.length; i++) {
    if (github_userdata.data[i].actor.hasOwnProperty("avatar_url")) {
      const gitHubProfileImage = github_userdata.data[i].actor.avatar_url;
      return gitHubProfileImage;
    }
  }

  return "User profile image unavailable";
}

// github email

function getEmailAddress(github_userdata) {
  for (let i = 0; i < github_userdata.data.length; i++) {
    if (github_userdata.data[i].payload.hasOwnProperty("commits")) {
      available = true;
      const gitHubEmail =
        github_userdata.data[i].payload.commits[0].author.email;
      //console.log(gitHubEmail);
      return gitHubEmail;
    }
  }

  return "User profile email is unavailable";
}

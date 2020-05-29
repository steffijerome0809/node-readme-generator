const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

inquirer
  .prompt([
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
      choices: ["Mozilla Public 2.0", "Apache 2.0", "MIT", "None"],
    },
    {
      type: "list",
      name: "contributors",
      message: "Who are your Contributors ?",
      choices: ["Steffi Jerome"],
    },
    {
      type: "input",
      name: "tests",
      message: "What command should be run to run your tests ?",
    },
    {
      type: "input",
      name: "github_username",
      message: "Enter your GitHub username:",
    },
  ])
  .then(function (answers) {
    const {
      projectTitle,
      description,
      install,
      usage,
      license,
      contributors,
      tests,
      github_username,
    } = answers;

    init(
      projectTitle,
      description,
      install,
      usage,
      license,
      contributors,
      tests,
      github_username
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
  projectTitle,
  description,
  install,
  usage,
  license,
  contributors,
  tests,
  github_username
) {
  let readmefile = "";
  createFile(readmefile);

  let badge = createBadge("npm", "6.14.5");
  console.log(badge);

  readmefile = `${badge}`;
  fs.appendFile(
    "READMENEW.md",
    "\n" + "# Badge" + "\n\n" + readmefile + "\n",
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
    "\n" + "\r\n" + "#" + " " + projectTitle + " " + "&middot;" + "\r\r\n",
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
    github_username
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
    "\n" +
      "## Install" +
      "\r\n" +
      "```sh" +
      "\n" +
      install +
      "\n" +
      "```" +
      "\n",
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

  github_username.trim();

  if (github_username !== "") {
    const github_query = `https://api.github.com/users/${github_username}/events/public`;

    axios.get(github_query).then(function (github_userdata) {
      //user profile image:
      let gitHubProfileImage = getProfileImage(github_userdata);

      //user email address:
      let gitHubEmail = getEmailAddress(github_userdata);

      fs.appendFile(
        "READMENEW.md",
        "\n" +
          "## Questions" +
          "\n\n" +
          "\n" +
          "![GitHub Profile Image]" +
          "(" +
          gitHubProfileImage +
          ")" +
          " " +
          gitHubEmail +
          "\n",
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
  github_username
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

  if (github_username !== "") {
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

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");


const generateReadME = (answers) =>
`# ${answers.title}
     
## Description

${answers.desc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributions](#contributions)
- [License](#license)
- [Questions](#questions)

## Installation

Here is the link to the Github repository: (${answers.repoLink})
Here is the link to the deployed application: (${answers.deployLink})

## Usage

${answers.usage}

## Tests

${answers.tests}

## Contributions

${answers.contributors}

## License

${answers.license}

## Questions

Here is a link to my GitHub profile: https://github.com/${answers.github}. Otherwise, you can email me at: ${answers.email}
`;



inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'desc',
            message: 'How would you describe you project? (What does it do, what pushed you to create it, and how does it work?)'
        },
        {
            type: 'input',
            name: 'repoLink',
            message: 'Enter the link to your GitHub repository here:'
        },
        {
            type: 'input',
            name: 'deployLink',
            message: 'Enter the link to your deployed application here:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How would someone use your project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'If you have any tests for your app, enter them here:'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Would you like others to contribute on this project? Enter your stance here:'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please select a license for your project:',
            choices: ["MIT", "ISC", "Apache license 2.0", "zLib",]
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username here:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email here:'
        },
    ])
    .then((answers) => {
        const readMePage = generateReadME(answers);

        fs.writeFile("README.md", readMePage, (err) =>
            err ? console.log(err) : console.log("README generated successfully!"));
    });


    // function writeToFile(fileName, data) {}
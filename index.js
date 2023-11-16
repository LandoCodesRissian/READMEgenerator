import inquirer from 'inquirer';
import fs from 'fs';

inquirer
.prompt([
    {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    },
    {
    type: 'input',
    message: 'Write a description of your project:',
    name: 'description',
    },
    {
    type: 'input',
    message: 'Provide installation instructions:',
    name: 'installation',
    },
    {
    type: 'input',
    message: 'Provide usage information:',
    name: 'usage',
    },
    {
    type: 'list',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GNU', 'Apache', 'None'],
    name: 'license',
    },
    {
    type: 'input',
    message: 'Enter contribution guidelines:',
    name: 'contributing',
    },
    {
    type: 'input',
    message: 'Provide test instructions:',
    name: 'tests',
    },
    {
    type: 'input',
    message: 'Enter your GitHub username:',
    name: 'username',
    },
    {
    type: 'input',
    message: 'Enter your email address:',
    name: 'email',
    },
])
.then((response) => {
    const readmeContent = `
# ${response.title}

## Description
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${response.installation}

## Usage
${response.usage}

## License
This project is licensed under the ${response.license} license.

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
GitHub: [${response.username}](https://github.com/${response.username})  
For any questions, please reach out via email: ${response.email}
    `;

    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.error(err) : console.log('README.md successfully generated!')
    );
});

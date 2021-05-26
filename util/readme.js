function readme(answers) {
  return `
<h1 align="center">${answers.projectTitle}</h1>
<br>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br>
## Description
${answers.description}
<br>
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
<br>
## Installation
${answers.installation}
<br>
## Usage
${answers.usage}
<br>
##Screenshot

![screenshot](./${answers.image})

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br>
This application is covered by the ${answers.license} license. 
<br>
## Contributing
${answers.contributing}
<br>
## Tests
${answers.tests}
<br>
## Questions
${answers.questions}
<br>
Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br>
<br>
✉️ Email me with any questions: ${answers.email}<br>
    `;
}

module.exports = readme;

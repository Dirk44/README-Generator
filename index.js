const inquirer = require('inquirer');
const fs = require('fs');
const li = require('./li');
const year = new Date().getFullYear()
const ui = new inquirer.ui.BottomBar();

ui.log.write('add line breaks with <br/>')


// Objects to populate readme

inquirer.prompt([
    {
        type: 'input',
        name: 'userName',
        message: 'What is your User name?',
        // Make sure User provided value
        validate: (value) => { if (value) { return true } else { return "need input to continue" } }
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the Title of your Project?',
        validate: (value) => { if (value) { return true } else { return "need input to continue" } }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a Project Description.',
        validate: (value) => { if (value) { return true } else { return "need input to continue" } }
    },
    {
        type: 'input',
        name: 'instaInstr',
        message: 'Installation instructions?',
        validate: (value) => { if (value) { return true } else { return "need input to continue" } }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage info?'

    },
    {
        type: 'input',
        name: 'contrib',
        message: 'Contribution guidelines?'

    },
    {
        type: 'input',
        name: 'test',
        message: 'Test instructions?'
    },
    {
        type: 'list',
        message: 'License?',
        name: 'license',
        choices: ['MIT', 'GPLv3', 'CC-0', 'BSD-3-Clause', 'WTFPL']

    },
    
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub username?'

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email address?'

    },
])

    .then((response) => {

        const filename = `./READMEs/${response.title}.md`;
        const userName = response.userName;
        const title = response.title;
        const description = response.description;
        const install = response.install;
        const usage = response.usage;
        const contributing = response.contributing;
        const test = response.test;
        const license = response.license;
        const licenseBadge = li.choseBadge(license);
        const licenseText = li.choseLicense(license);
        const gitHub = response.gitHub;
        const email = response.email;
        
           // populating sections
        
        const fileContent = `# ${response.title} README

        ${licenseBadge}

    
    
        

## Project Title  
${title} 
            
## Description
        ${ description}
## Table of Contents
        [Installation](#Installation)
        [Usage](#Usage)
        [License](#License)
        [Contributing](#Contributing)
        [Tests](#Tests)
        [Questions](#Questions)
## Installation
        ${ install}
## Usage
        ${ usage}
## License
        This work is covered under ${ licenseText}
## Contributing
        ${ contributing}
## Tests
        ${ test}

        ## Questions
Please reach-out to me on [GitHub](http://www.github.com/${gitHub}) or email me at: [${email}](mailto:${email})
---

    

© ${year} ${userName}`;

   //Writing File with responses to prompts

        fs.writeFile(filename, fileContent, (err) =>
            err ? console.log(err) : console.log('You have generated a ReadMe!')
        );
    });

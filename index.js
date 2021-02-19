const inquirer = require('inquirer');
const fs = require('fs');
const li = require('./li');
const year = new Date().getFullYear()
const ui = new inquirer.ui.BottomBar();

ui.log.write('add line breaks with <br/>')


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
        message: 'Usage information?'

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
        name: 'licenseBadge',
        choices: ['MIT', 'GPLv3', 'CC-0', 'BSD-3-Clause', 'WTFPL']

    },
    {
        type: 'list',
        message: 'License?',
        name: 'licenseText',
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

    .then(() => {

        const fileName = `./READMEs/ ${data.projectTitle}.md`;
        const userName = data.userName;
        const projectTitle = data.projectTitle;
        const description = data.description;
        const instaInstr = data.instaInstr;
        const usage = data.usage;
        const contrib = data.contrib;
        const test = data.test;
        const licenseBadge = li.choseBadge(license);
        const licenseText = li.choseLicense(license);
        const gitHub = data.gitHub;
        const email = data.email;



        //Template
        const template = `# ${title}
            
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
        ${ instaInstr}
## Usage
        ${ usage}
## License
        This work is covered under ${ licenseText}
## Contributing
        ${ contrib}
## Tests
        ${ test};

        ## Questions
Please reach-out to me on [GitHub](http://www.github.com/${gitHub}) or email me at: [${email}](mailto:${email})
---
© ${year} ${userName}`;



        //function to create readme
        createNewFile(title, template);
        function createNewFile(fileName, data) {

            fs.writeFile(`./${fileName.toLowerCase().split(" ").join(" ")}.md`, data, () => {
                if (err) {
                    console.log(err);
                }
                console.log("Youre README has been generated");
            })

        }
    });



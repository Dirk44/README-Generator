const inquirer = require('inquirer');
const fs = require('fs');
const li = require('./li');


inquirer.prompt([
    {
        type: 'input',
        name: 'userName',
        message: 'What is your User name?',
        // Make sure User provided value
        validate: (value) => {if(value){return true} else {return "need input to continue"}}
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the Title of your Project?',
        validate: (value) => {if(value){return true} else {return "need input to continue"}}
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a Project Description.',
        validate: (value) => {if(value){return true} else {return "need input to continue"}}
    },
    {
        type: 'input',
        name: 'instaInstr',
        message: 'Installation instructions?',
        validate: (value) => {if(value){return true} else {return "need input to continue"}}
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information?',
        validate: (value) => {if(value){return true} else {return "need input to continue"}}
    },
    {
        type: 'input',
        name: 'contrib',
        message: 'Contribution guidelines?',
        validate: (value) => {if(value){return true} else {return "need input to continue"}}
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test instructions?',
        validate: (value) => {if(value){return true} else {return "need input to continue"}}
    },
    {
        type: 'list',
        message: 'License?',
        name: 'license',
        choices: ['MIT', 'GPLv3', 'CC-0', 'BSD-3-Clause', 'WTFPL'],
        validate: (value) => {if(value){return true} else {return "need input to continue"}}
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub username?',
        validate: (value) => {if(value){return true} else {return "need input to continue"}}
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email address?',
        validate: (value) => {if(value){return true} else {return "need input to continue"}}
    },
])

.then(({
   userName,
   projectTitle,
   description,
   instaInstr,
   usage,
   contrib,
   test,
   license,
   gitHub,
   email
}) =>{
    //Template
    const template =
    
    
})
const fs = require('fs');

const inquirer = require('inquirer');

inquirer
	.prompt([
		{
			type: 'input',
			name: 'title',
			message: 'What is the title of your project?',
		},
		{
			type: 'input',
			name: 'github',
			message: 'What is your GitHub username?',
		},
		{
			type: 'input',
			name: 'email',
			message: 'What is your email address?',
		},
		{
			type: 'list',
			name: 'license',
			message: 'Which license does your project have?',
			choices: ['MIT', 'Apache', 'GNU'],
		},
		{
			type: 'input',
			name: 'description',
			message: 'Write a description for your project:',
		},
		{
			type: 'input',
			name: 'install',
			message: 'What command is needed to install dependencies?',
		},
		{
			type: 'input',
			name: 'test',
			message: 'What command is needed to run tests?',
		},
		{
			type: 'input',
			name: 'usage',
			message: 'Enter any information the user needs for using the repo:',
		},
		{
			type: 'input',
			name: 'contribution',
			message:
				'Enter any information the user needs for contributing to the repo:',
		},
	])
	.then((response) => {
		console.log(response);
	});

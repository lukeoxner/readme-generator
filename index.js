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
	])
	.then((response) => {
		console.log(response);
	});

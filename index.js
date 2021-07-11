const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');

const employees = [];

const managerQuestions = [{
    type: 'input',
    message: "What is your manager's name?",
    name: 'name'
},
{
    type: 'input',
    message: "What is your manager's ID?",
    name: 'id'
},
{
    type: 'input',
    message: "What is your manager's email?",
    name: 'email'
},
{
    type: 'input',
    message: "What is your manager's office number?",
    name: 'officeNumber'
}];

const engineerQuestions = [{
    type: 'input',
    message: "What is your engineer's name?",
    name: 'name'
},
{
    type: 'input',
    message: "What is your engineer's ID?",
    name: 'id'
},
{
    type: 'input',
    message: "What is your engineer's email?",
    name: 'email'
},
{
    type: 'input',
    message: "What is your engineer's Github username?",
    name: 'github'
}];

const internQuestions = [{
    type: 'input',
    message: "What is your intern's name?",
    name: 'name'
},
{
    type: 'input',
    message: "What is your intern's ID?",
    name: 'id'
},
{
    type: 'input',
    message: "What is your intern's email?",
    name: 'email'
},
{
    type: 'input',
    message: "What is your intern's school name?",
    name: 'school'
}];

const addNewEmployeeQuestion = [{
    type: 'list',
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    name: 'employeeType'
}];

async function init() {
    const newManager = await inquirer.prompt(managerQuestions);
    employees.push({...newManager, employeeType: 'manager'});

    let addNewEmployee = {};

    while (addNewEmployee.employeeType !== 'I don\'t want to add any more team members') {
        addNewEmployee = await inquirer.prompt(addNewEmployeeQuestion);

        switch (addNewEmployee.employeeType) {
            case 'Engineer':
                const engineerAnswers = await inquirer.prompt(engineerQuestions);
                employees.push({...engineerAnswers, employeeType: 'engineer'});
                break;
            case 'Intern':
                const internAnswers = await inquirer.prompt(internQuestions);
                employees.push({...internAnswers, employeeType: 'intern'});
                break;
        }
    }

    console.log(employees);
}

init();
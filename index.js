//calling in required files and apps
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const renderHtml = require('./src/renderHtml')
const employees = [];
//setting up the questions for the different roles
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
//setting up the question to continue building the team
const addNewEmployeeQuestion = [{
    type: 'list',
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    name: 'employeeType'
}];
//asking the questions and building the data received
async function init() {
    const newManager = await inquirer.prompt(managerQuestions);
    employees.push(new Manager(newManager.id, newManager.name, newManager.email, newManager.officeNumber));

    let addNewEmployee = {};
    //looping the questions back through based on the response given to the add more members questions
    while (addNewEmployee.employeeType !== 'I don\'t want to add any more team members') {
        addNewEmployee = await inquirer.prompt(addNewEmployeeQuestion);

        switch (addNewEmployee.employeeType) {
            case 'Engineer':
                const engineerAnswers = await inquirer.prompt(engineerQuestions);
                employees.push(new Engineer(engineerAnswers.id, engineerAnswers.name, engineerAnswers.email, engineerAnswers.github));
                break;
            case 'Intern':
                const internAnswers = await inquirer.prompt(internQuestions);
                employees.push(new Intern(internAnswers.id, internAnswers.name, internAnswers.email, internAnswers.school));
                break;
        }
    }
    fs.writeFile('dist/team.html', renderHtml(employees), (err) => {
        if (err) console.log(error);
        else console.log("File successfully created.");
    });
}
//call function to initiate everything
init();
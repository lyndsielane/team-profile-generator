const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');

function init() {
    const employee = new Employee(1234, 'Alex', 'alex@thelanelife.com');

    console.log(employee.getName());
}

init();
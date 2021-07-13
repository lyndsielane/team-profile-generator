const answers = require("../index");

function renderHtml(employees) {
    let employeeCards = '';

    employees.forEach(employee => {
        switch(employee.getRole()) {
            case "Manager":
                employeeCards += renderManagerCard(employee);
                break;
            case "Engineer":
                employeeCards += renderEngineerCard(employee);
                break;
            case "Intern":
                employeeCards += renderInternCard(employee);
                break;
        }
    });


//rendering the html page
return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Profile</title>
    <meta name="team profile" content="A profile view of the members of your team">
    <meta name="Lyndsie Lane" content="Profiles">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Otomanopee+One&family=Raleway:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <div class="row">
        <div class="col">
            <nav class="navbar" id="title">
            <div class="container-fluid">
                <span class="navbar-text">
                Team Profiles
                </span>
            </div>
            </nav>
        </div>
    </div>
    <div class="container">
        <div class = "row" id="employeeCards">
            ${employeeCards}
        </div>
    </div>
  </body>
</html>`
}

function renderManagerCard(manager) {
    return `
    <div class="card mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header text-white bg-primary">
            <p>${manager.getName()}</p>
            <p><i class="bi bi-cup-fill"></i>${manager.getRole()}</p>
        </div>
        <div class="card-body">
            <p class="card-title">ID: ${manager.getId()}</p>
            <hr>
            <p class="card-text">Email: <a href="mailTo:${manager.getEmail()}" target="blank">${manager.getEmail()}</a></p>
            <p class="card-text">Office number: ${manager.getOfficeNumber()}</p>
        </div>
    </div>`
}

function renderEngineerCard(engineer) {
    return `
    <div class="card mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header text-white bg-primary">
            <p>${engineer.getName()}</p>
            <p><i class="bi bi-eyeglasses"></i>${engineer.getRole()}</p>
        </div>
        <div class="card-body">
            <p class="card-title">ID: ${engineer.getId()}</p>
            <hr>
            <p class="card-text">Email: <a href="mailTo:${engineer.getEmail()}" target="blank">${engineer.getEmail()}</a></p>
            <p class="card-text">Github: <a href="http://www.github.com/${engineer.getGithub()}" target="blank">${engineer.getGithub()}</a></p>
        </div>
    </div>`
}

function renderInternCard(intern) {
    return `
    <div class="card mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header text-white bg-primary">
            <p>${intern.getName()}</p>
            <p><i class="bi bi-laptop-fill"></i>${intern.getRole()}</p>
        </div>
        <div class="card-body">
            <p class="card-title">ID: ${intern.getId()}</p>
            <hr>
            <p class="card-text">Email: <a href="mailTo:${intern.getEmail()}" target="blank">${intern.getEmail()}</a></p>
            <p class="card-text">School: ${intern.getSchool()}</p>
        </div>
    </div>`
}

module.exports = renderHtml;
const answers = require("../index")

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
        <div id="employeeCards">
            ${employeeCards}
        </div>
    </div>
  </body>
</html>`
}

function renderManagerCard(manager) {
    return `
    <div class="card mb-3" style="max-width: 18rem;">
        <div class="card-header text-white bg-primary">
            <p>${manager.getName()}</p>
            <p><i class="bi bi-cup-fill"></i>${manager.getRole()}</p>
        </div>
        <div class="card-body">
            <p class="card-title">ID: ${manager.getId()}</p>
            <hr>
            <p class="card-text">Email: ${manager.getEmail()}</p>
            <p class="card-text">Office number: ${manager.getOfficeNumber()}</p>
        </div>
    </div>`
}

function renderEngineerCard(engineer) {
    return "I'm an engineer";
}

function renderInternCard(intern) {
    return "I'm an intern";
}

module.exports = renderHtml;
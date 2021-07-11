const answers = require("../index")

function renderHtml(employees) {
//rendering the html page
return `
<!DOCTYPE html>
<html lang="en>
<head>
<meta charset="utf-8>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Team Profile</title>
<meta name="team profile" content="A profile view of the members of your team">
<meta name="Lyndsie Lane" content="Profiles">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<link rel="stylesheet" href="../dist/style.css">
</head>
<body>
<nav class="navbar navbar-light bg-light" id="title">
  <div class="container-fluid">
    <span class="navbar-text">
      Team Profiles
    </span>
  </div>
</nav>


<script src="../index.js"
</body>
</html>`
}

function renderEmployeeDetails () {
 `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${employee.name}<br>${employee.role}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${employee.id}<hr></h6>
    <p class="card-text">${employee.email}</p>
    <p class="card-text">${employee.github}${employee.school}</p>
  </div>
</div>`
}

module.exports = renderHtml;
const inquirer = require("inquirer");

const conTab = require("console.table");

const connection = require("connection");

const mysql = require("mysql");



const askQuestions = function() {
    inquirer
      .prompt({
        type: "list",
        name: "startQuestions",
        message: "What would you like to do?",
        choices: [
          "view all employees",
          "view all roles",
          "view all departments",
          "add employee",
          "add department",
          "add role",
          "update employee role",
          "remove employee"
        ]
      })
      .then(function(answer) {
        console.log(answer);
        // start of switch statment for user choice
        switch (answer.startQ) {
          case "view all employees":
            viewEmployees();
            break;
  
          case "view all roles":
            viewRoles();
            break;
  
          case "view all departments":
            viewDepartments();
            break;
  
          case "add employee":
            addEmployee();
            break;
  
          case "update employee role":
            updateRole();
            break;
  
          case "add department":
            addDepartment();
            break;
  
          case "add role":
            addRole();
            break;
        }
      });
  };
  askQestions();

  function viewEmployees() {
    console.log("retrieving employess from database");
    var employQuery =
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department on role.department_id = department.id;";
    connection.query(employQuery, function(err, answer) {
      console.log("\n Employees retrieved from Database \n");
      console.table(answer);
    });
    askQuestions();
  }

  
  function viewRoles() {
    connection.query("SELECT * FROM role", function(err, answer) {
      console.log("\n Roles Retrieved from Database \n");
      console.table(answer);
    });
    askQuestions();
  }

function viewDepartments() {
    connection.query("SELECT * FROM department", function(err, answer) {
      console.log("\n Departments Retrieved from Database \n");
      console.table(answer);
    });
    askQuestions();
  }

function addEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter employee first name",
          name: "firstname"
        },
        {
          type: "input",
          message: "Enter employee last name",
          name: "lastname"
        }
      ])
      .then(function(answer) {
        connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: answer.firstname,
            last_name: answer.lastname,
            role_id: null,
            manager_id: null
          },
          function(err, answer) {
            if (err) {
              throw err;
            }
            console.table(answer);
          }
        );
        askQuestions();
      });
  }

  function updateRole() {
    let allEmploy = [];
    connection.query("SELECT * FROM employee", function(err, answer) {
      for (let i = 0; i < answer.length; i++) {
        let employString =
          answer[i].id + " " + answer[i].first_name + " " + answer[i].last_name;
        allemp.push(employString);
      }
    
  
      inquirer
        .prompt([
          {
            type: "list",
            name: "updateRole",
            message: "select employee to update role",
            choices: allEmploy
          },
          {
            type: "list",
            message: "select new role",
            choices: ["manager", "employee"],
            name: "newrole"
          }
        ])
        .then(function(answer) {
          console.log("about to update", answer);
          const idUpdate = {};
          idUpdate.employId = parseInt(answer.updateRole.split(" ")[0]);
          if (answer.newrole === "manager") {
            idUpdate.role_id = 1;
          } else if (answer.newrole === "employee") {
            idUpdate.role_id = 2;
          }
          connection.query(
            "UPDATE employee SET role_id = ? WHERE id = ?",
            [idToUpdate.role_id, idToUpdate.employeeId],
            function(err, data) {
              askQuestions();
            }
          );
        });
    });
  }

  function addDepartment() {
    inquirer
      .prompt({
        type: "input",
        message: "enter department name",
        name: "dept"
      })
      .then(function(answer) {
        connection.query(
          "INSERT INTO department SET ?",
          {
            name: answer.dept
          },
          function(err, answer) {
            if (err) {
              throw err;
            }
          }
        ),
          console.table(answer);
        askQuestions();
      });
  }
  
  // allows user to add a new role/title
  function addRole() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "enter employee title",
          name: "addtitle"
        },
        {
          type: "input",
          message: "enter employee salary",
          name: "addsalary"
        },
        {
          type: "input",
          message: "enter employee department id",
          name: "addDepId"
        }
      ])
      .then(function(answer) {
        connection.query(
          "INSERT INTO role SET ?",
          {
            title: answer.addtitle,
            salary: answer.addsalary,
            department_id: answer.addDepId
          },
          function(err, answer) {
            if (err) {
              throw err;
            }
            console.table(answer);
          }
        );
        askQuestions();
      });
  }
// Imports
require("dotenv").config();
const inquirer = require("inquirer");
const mysql = require("mysql2");
const ctable = require("console.table");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log("Database connection successful")
);

async function init() {
  let programEnd = false;
  do {
    programEnd = await selectOptions();
  } while (!programEnd);
}

function selectOptions() {
  return new Promise((resolve, reject) => {
    let programEnd = false;
    const questions = [
      {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          new inquirer.Separator(),
          "Add a department",
          "Add a role",
          "Add an employee",
          new inquirer.Separator(),
          "Update an employee role",
          new inquirer.Separator(),
          "Quit",
        ],
        loop: false,
      },
    ];
    inquirer
      .prompt(questions)
      .then(async ({ choice }) => {
        switch (choice) {
          case "View all departments":
            await viewDepartments();
            break;
          case "View all roles":
            await viewRoles();
            break;
          case "View all employees":
            await viewEmployees();
            break;
          case "Add a department":
            await addDepartment();
            break;
          case "Add a role":
            await addRole();
            break;
          case "Add an employee":
            await addEmployee();
            break;
          case "Update an employee role":
            await updateEmployeeRole();
            break;
          case "Quit":
            programEnd = true;
            break;
          default:
            throw new Error("Something weird happened");
        }
      })
      .then(() => {
        resolve(programEnd);
      })
      .catch((err) => reject(err));
  });
}

function viewDepartments() {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM departments`;
    db.query(query, (err, results) => {
      err ? reject(err) : resolve(console.table(results));
    });
  });
}
function viewRoles() {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM roles`;
    db.query(query, (err, results) => {
      err ? reject(err) : resolve(console.table(results));
    });
  });
}
function viewEmployees() {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM employees`;
    db.query(query, (err, results) => {
      err ? reject(err) : resolve(console.table(results));
    });
  });
}
function addDepartment() {}
function addRole() {}
function addEmployee() {}
function updateEmployeeRole() {}

init();

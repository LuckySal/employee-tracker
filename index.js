// Imports
require("dotenv").config();
const inquirer = require("inquirer");
const mysql = require("mysql2");
const ctable = require("console.table");

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log("Database connection successful")
);

async function init() {
    let programEnd = false;
    do {
        programEnd = await selectOptions()
    } while (!programEnd);
};

async function selectOptions() {
    return new Promise((resolve, reject) => {
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
                    "Update an employee role"
                ]
            }
        ]
        inquirer
            .prompt(questions)
            .then(async ({ choice }) => {
                let programEnd = false;
                switch (choice) {
                    case "View all departments":
                        programEnd = await viewDepartments();
                        break;
                    case "View all roles":
                        programEnd = await viewRoles();
                        break;
                    case "View all employees":
                        programEnd = await viewEmployees();
                        break;
                    case "Add a department":
                        programEnd = await addDepartment();
                        break;
                    case "Add a role":
                        programEnd = await addRole();
                        break;
                    case "Add an employee":
                        programEnd = await addEmployee();
                        break;
                    case "Update an employee role":
                        programEnd = await updateEmployeeRole();
                        break;
                    default:
                        throw new Error("Something weird happened");
                }
            })
            .catch(() => reject(error))
        resolve()
        
    })
}

init();
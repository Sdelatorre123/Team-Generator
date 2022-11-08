const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Enginner = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter your name',

            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter your id number?',


            },
            {
                type: 'input',
                name: 'office',
                message: 'Enter your office number',

            },
        ])
        .then((userInput) => {
            const managerCard = `<!DOCTYPE html
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
        <head>
        <body>
            <p>Ready to generate your Team? Lets do this!</p>
        </body>
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <title>My awesome Team</title>
            </head>
            <header class="text-center bg-danger">
                <h1 class="font-weight-bold text-black py-3">My awesome Team</h1>
                </header>
                <body>
                    <main class="row d-flex justify-content-center mx-3 w-95"></main>
                    <div class="w-20 m-2 border border-white">
                        <section class="bg-primary">
                            <h2 class="text-left text-black p-2">${userInput.name}</h2>
                            <h3 class="text-left text-black p-2">Manager</h3>
                            </section>
                            <section class="bg-light">
                <h4 class="text-left bg-black p-2">ID:${userInput.id}</h4>
                <h4 class="text-left bg-black p-2">Email:<a href="mailto:${userInput.email}" target="_blank">${userInput.email}</a></h4>
                <h4 class="text-left bg-black p-2">Office:${userInput.office}</h4>
            </section>
            </div>`;
            fs.writeFile('./index.html', managerCard, err => err ? console.log(err) : addEmployee());
        })
}
function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeChoice',
            message: 'Would you like to add more team members?',
            choices: ['Add Engineer', 'Add Intern', 'No'],
        },
    ])

        .then((choice) => {
            switch (choice.employeeChoice) {
                case 'Add Engineer':
                    addEngineer();
                    break

                case 'Add Intern':
                    addIntern();
                    break

                case 'No':
                    console.log('Writing webpage...');
                    const finishWriting = `
                        </main>
                        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
                        </body>
                        </html>`;
                        fs.appendFile('./index.html', finishWriting, err => err ? console.log(err) : console.log('your webpage is completed!'))


            }
        })
}


function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'insert name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'insert id',
        },
        {
            type: 'input',
            name: 'email',
            message: 'insert email',
        },
        {
            type: 'input',
            name: 'github',
            message: 'insert github username',
        },
    ])
        .then((choice => {
            const newEngineer = `<div class="w-25 m-3 border border-dark">
                <section class="bg-primary">
                    <h1 class="text-left text-white p-2">${choice.name}</h1>
                    <h2 class="text-left text-white p-2">👓 Engineer</h2>
                </section>
                <section class="bg-light p-3">
                    <h3 class="text-left bg-white p-2">ID:${choice.id}</h3>
                    <h3 class="text-left bg-white p-2">Email:<a href="mailto:${choice.email}" target="_blank">${choice.email}</a></h3>
                    <h3 class="text-left bg-white p-2">Github:<a href="https://github.com/${choice.github}" target="_blank">${choice.github}</a></h3>
                </section>
            </div>`;
            fs.appendFile('./index.html', newEngineer, err => err ? console.log(err) : addEmployee())
        }
        ))

}
function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'insert name',
            },
            {
                type: 'input',
                name: 'id',
                message: 'insert id',
            },
            {
                type: 'input',
                name: 'email',
                message: 'insert email',
            },
            {
                type: 'input',
                name: 'school',
                message: 'what school did you go to?',
            },
        ])
        .then((choice => {
            const newIntern = `<div class="w-25 m-3 border border-dark">
                    <section class="bg-primary">
                        <h1 class="text-left text-white p-2">${choice.name}</h1>
                        <h2 class="text-left text-white p-2">Intern</h2>
                    </section>
                    <section class="bg-light p-3">
                        <h3 class="text-left bg-white p-2">ID:${choice.id}</h3>
                        <h3 class="text-left bg-white p-2">Email:<a href="mailto:${choice.email}" target="_blank">${choice.email}</a></h3>
                        <h3 class="text-left bg-white p-2">School:${choice.school}</h3>
                    </section>
                </div>`;
            fs.appendFile('./index.html', newIntern, err => err ? console.log(err) : addEmployee())
        }
        ))
}

addManager();

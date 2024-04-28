#! /usr/bin/env node

import inquirer from "inquirer";

//initialize user balance and pin code
let myBalance = 10000;
let mypin = 1234;

//print welcome message
console.log("Welcome to Raees - ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your Pin Number",
    }
])
if (pinAnswer.pin === mypin){
    console.log("Your Pin is correct, Login Successfully!");
    
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select and operation",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ])

    if(operationAns.operation === "Withdraw Amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the Amount to Withdraw:"
            }
        ])
        if(amountAns.amount > myBalance){
            console.log("Insufficient Balance");
        }
        else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`your remaing Balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance"){
        console.log(`Your Account Balnace is ${myBalance}`);
    }
}
else{
    console.log("your Pin no. is Incorrect, Please try again");
}

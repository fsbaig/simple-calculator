#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {message:"enter your first number",type:"number",name:"firstnumber"},
    {message:"enter your second number",type:"number",name:"secondnumber"},
    {
        message:"select operator to perform operators operation",
        type: "list",
        name: "operator",
        choices:["addition", "subtraction","multipication","divide"]
    },
]);
if (answer.operator === "addition") {
 console.log(answer.firstnumber+answer.secondnumber);
}else if (answer.operator === "subtraction"){
    console.log(answer.firstnumber-answer.secondnumber)
}else if (answer.operator === "multipication"){
    console.log(answer.firstnumber*answer.secondnumber)
}else if (answer.operator === "divide"){
    console.log(answer.firstnumber/answer.secondnumber)
}
console.log("thankyou")
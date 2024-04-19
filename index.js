#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: " Pleae Enter Your Sentence ",
    }]);
const words = answer.sentence.trim().split(" ");
console.log(words.length);

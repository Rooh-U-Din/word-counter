#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Write a sentence for count word:"
    }
]);
const words = answer.Sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is ${words.length}`);

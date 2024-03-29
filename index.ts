#! /usr/bin/env  node


import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);

//const answers = await inquirer.prompt([
   // {
    //    name: "userGuessedNumber",
    //    type: "number",
    //    message: "please guess a number: ",
  //  },
//]);

// if(answers. userGuessedNumber === randomNumber){
   // console.log("Congratualatios! you guessed right number.");
// }else {
   // console.log("You guessed wrong number");
//}


import chalk from 'chalk';
import prompts from 'prompts';
import {randomInt} from 'crypto';

console.log(chalk.blue.bold(`\nGUESS THE NUMBER!`));
console.log(chalk.cyan(`-------------------------------------`));
console.log(`Guess a number between 1 and 10.`);
console.log(chalk.yellow(`You have 3 attempts!`))

const secretNumber = randomInt(1,11);
const maxAttempts = 3;
let gameOver = false;

for(let attempt = 1; attempt <= maxAttempts; attempt++) {
    const response = await prompts({
        type: `text`,
        name: `guess`,
        message: `Attempt ${attempt}/${maxAttempts}: Enter your guess`
    });

    const guess = response.guess;

    try{
        const emptyCheck = guess.trim();
        if(!emptyCheck) {
            throw new Error(`A guess is required!`);
        }

        const guessNumber = Number(emptyCheck);

        if(!Number.isInteger(guessNumber)){
            throw new Error(`Guess must be a whole number.`);
        }

        if(guessNumber < 1){
            throw new Error(`Guess must be at least 1`);
        }

        if(guessNumber > 10){
            throw new Error(`Guess cannot exeed 10`);
        }

        if(guessNumber === secretNumber) {
            console.log(chalk.green(`Correct! You guessed the secret number`));
            gameOver = true;
            break;
        }
        else if (guessNumber < secretNumber) {
            console.log(chalk.yellow(`Too low!\n`));
        }
        else{
            console.log(chalk.yellow(`Too High\n`));
        }
    }
    catch(error){
        console.log(chalk.red(`Error: ${error.message}\n`));
    }
}
if(!gameOver) {
    console.log(chalk.red.bold(`\nGAME OVER!!`));
    console.log(`The secrete number was ${secretNumber}`);
}

console.log(chalk.magenta(`\nThanks for playing!\n`));

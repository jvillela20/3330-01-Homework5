import chalk from 'chalk';
import prompts from 'prompts';
import {randomInt} from 'crypto';

console.log(chalk.blue.bold(`\nGUESS THE NUMBER!`));
console.log(chalk.cyan(`-------------------------------------`));
console.log(`Guess a number between 1 and 10.`);
console.log(chalk.yellow(`You have 3 attempts!`))

const secretNumber = randomInt(1,11);
const maxAttempts = 3;

const response = await prompts({
    type: `text`,
    name: `guess`,
    message: `Attempt 1/3: ENter your guess`
});
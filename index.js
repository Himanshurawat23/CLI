import chalk from 'chalk';
import readline from 'readline';

const commands = {
  greet: (name) => {
    console.log(chalk.green(`Hello, ${name}! Welcome to my CLI app.`));
  },
  add: (num1, num2) => {
    const sum = parseFloat(num1) + parseFloat(num2);
    console.log(chalk.magenta(`The sum of ${num1} and ${num2} is ${sum}`));
  },
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(chalk.yellow("Welcome to my interactive CLI app! Type 'exit' to quit."));

// Function to process user input
rl.on("line", (input) => {
  const args = input.trim().split(/\s+/); 
  const command = args[0];

  if (command === "exit") {
    console.log(chalk.red("Goodbye!"));
    rl.close();
    process.exit(0);
  }

  if (commands[command]) {
    try {
      commands[command](...args.slice(1));
    } catch (err) {
      console.log(chalk.orange("Error executing command. Please check your input."));
    }
  } else {
    console.log(chalk.white(`Unknown command: ${command}`));
  }
});

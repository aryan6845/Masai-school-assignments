// Performing basic arithmetic operations
function calculate(a, b, operation) {
    if (operation === '+') {
        return a + b;
    } else if (operation === '-') {
        return a - b;
    } else if (operation === '*') {
        return a * b;
    } else if (operation === '/') {
        if (b === 0) {
            return 'Error: Division by zero';
        }
        return a / b;
    } else {
        return 'Error: Invalid operation';
    }
}

// Getting user input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Asking the user for input
rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
        rl.question('Enter an operation (+, -, *, /): ', (operation) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            const result = calculate(num1, num2, operation);
            console.log(`Result: ${result}`);

            rl.close();
        });
    });
});

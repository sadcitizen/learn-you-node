const numbers = process.argv.slice(2).map(Number);
console.log(numbers.reduce((x, y) => x + y, 0));

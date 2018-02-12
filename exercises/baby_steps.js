// console.log(process.argv.slice(2))

let numberArgs = process.argv.slice(2);

console.log(numberArgs.reduce((a,b) => +a + +b));


const fs = require('fs');

const contents = fs.readFileSync(process.argv[2], 'utf8');

console.log(contents.split(/\r?\n/g).length - 1);

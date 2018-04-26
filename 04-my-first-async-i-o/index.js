const fs = require('fs');

const contents = fs.readFile(process.argv[2], 'utf8', (err, contents) => {
    console.log(contents.split(/\r?\n/g).length - 1);
});

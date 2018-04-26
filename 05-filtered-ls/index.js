const fs = require('fs');

const dir = process.argv[2];
const ext = process.argv[3];
const regex = new RegExp('\\.' + ext + '$', 'ig');

fs.readdir(dir, (err, files) => {
    if (err) {
        console.log(err);
    }

    files.filter(file => regex.test(file)).forEach(file => console.log(file));
});

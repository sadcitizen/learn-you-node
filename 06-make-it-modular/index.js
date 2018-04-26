const reader = require('./reader');

const dir = process.argv[2];
const ext = process.argv[3];

reader(dir, ext, (err, files) => {
    if (err) {
        console.log(err);
    }

    files.forEach(file => console.log(file));
});

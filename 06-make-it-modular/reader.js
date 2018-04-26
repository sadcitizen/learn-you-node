const fs = require('fs');

function reader(dir, ext, callback) {
    const regex = new RegExp('\\.' + ext + '$', 'ig');

    fs.readdir(dir, (err, files) => {
        if (err) {
            return callback(err);
        }

        return callback(null, files.filter(file => regex.test(file)));
    });
}

module.exports = reader;

const http = require('http');

const url = process.argv[2];

http.get(url, response => {
    response.setEncoding('utf8');

    response.on('data', console.log);
    response.on('end', console.error);
}).on('error', console.error);

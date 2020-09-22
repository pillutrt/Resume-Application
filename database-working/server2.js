const http = require('http');
const app = require('./database');

const port = process.env.PORT || 4000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
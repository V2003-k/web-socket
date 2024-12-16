const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(express.static("/public"));

server.listen(2003, () => console.log('server started at port: 2003'))


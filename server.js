var sticky = require('sticky-listen');
var http = require('http');
var express = require('express');

var expressHandler = require("./handlers/expressHandler")
var redisHandler = require("./handlers/redisHandler")
var ioSocketHandler = require("./handlers/socketHandler")

var app = express();
var server = http.createServer(app);

var io = require('socket.io').listen(server)

redisHandler(io)
ioSocketHandler(io)
expressHandler(app,io)

sticky.listen(server)

process.send({cmd: 'ready'})
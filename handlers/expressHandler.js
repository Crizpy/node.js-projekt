var config = require("../configuration/default")
var routing = require("../routing/initiateRouting")

var cookieParser = require('cookie-parser');
var path = require('path');
var session = require("express-session")({
    secret: config.cookie.secret,
    resave: true,
    saveUninitialized: true
}), sharedsession = require("express-socket.io-session");

//session.identifier

function initialiseExpressHandlers(app,io) {

    app.set('views', path.join(__dirname, '../frontend/templates/pages'));
    app.set('view engine', 'pug');

    app.use(cookieParser());
    app.use(session);
    io.use(sharedsession(session))

    routing(app)

}

module.exports = initialiseExpressHandlers
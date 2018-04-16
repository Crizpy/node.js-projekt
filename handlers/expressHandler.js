var config = require("../configuration/default")
var routing = require("../routing/initiateRouting")

var cookieParser = require('cookie-parser');
var path = require('path');

var session = require("express-session")
var MySQLStore = require("express-mysql-session")(session)
var sessionStore = new MySQLStore(config.database.connection)

session = session({
    key: 'steam_session',
    secret: config.cookie.secret,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}), sharedsession = require("express-socket.io-session");

function initialiseExpressHandlers(app,io) {

    app.set('views', path.join(__dirname, '../frontend/templates/pages'));
    app.set('view engine', 'pug');

    app.use(cookieParser());

    app.use(session);

    io.use(sharedsession(session))

    routing(app)

}

module.exports = initialiseExpressHandlers
var main = require("./routes/main")
var steamAuth = require("./routes/steamAuthenticator")
var steamAuthMock = require("./routes/steamAuthenticatorLocalMock")
var config = require("../configuration/default")

function initiateRouting(app) {

    app.use("/", main)

    if (config.system.env == "local") {
        app.use("/auth",steamAuthMock)
    } else {
        app.use("/auth",steamAuth)
    }

}

module.exports = initiateRouting
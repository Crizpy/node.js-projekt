var main = require("./routes/main")
var steamAuth = require("./routes/steamAuthenticator")

function initiateRouting(app) {

    app.use("/", main)
    app.use("/auth",steamAuth)

}

module.exports = initiateRouting
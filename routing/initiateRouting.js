var login = require("./routes/login")

function initiateRouting(app) {

    app.use("/", login)

}

module.exports = initiateRouting
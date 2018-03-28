var config = {};

config.web = {}
config.system = {}
config.cookie = {}
config.database = {}

config.system.cores = require('os').cpus().length

config.web.port = 3333

config.cookie.secret = "1i!5nib!235b!uib2!35Afa"

/*config.database.url = "35.197.247.140"
config.database.user = "mainQuery"
config.database.password = "4j12kNMnBr24B!2"
config.database.db = "test"
config.database.charset = "utf8_general_ci"*/
config.database.connection = {
    host: "35.197.247.140",
    user: "mainQuery",
    password: "4j12kNMnBr24B!2",
    database: "test",
    charset: "utf8_general_ci"
}

module.exports = config;
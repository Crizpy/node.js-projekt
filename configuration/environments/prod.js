var config = {};

config.web = {}
config.system = {}
config.cookie = {}
config.database = {}
config.steam = {}
config.email = {}

config.steam.apikey = "74C1E93DA3D6A5E45C6724D9EE9969F2"

config.system.cores = require('os').cpus().length
config.system.realm = ""
config.system.env = "prod"

config.web.port = 8081

config.email.username =
config.email.password =
config.email.to =
config.email.from =
config.email.service =

config.cookie.secret = "1i!5nib!235b!uib2!35Afa"

config.database.connection = {
    host: "35.197.247.140",
    user: "mainQuery",
    password: "4j12kNMnBr24B!2",
    database: "test",
    charset: "utf8_general_ci"
}

module.exports = config;
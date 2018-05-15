var config = {};

config.web = {}
config.system = {}
config.cookie = {}
config.database = {}
config.steam = {}
config.steam.mock = {};
config.email = {}
config.redis = {}

config.steam.apikey = "74C1E93DA3D6A5E45C6724D9EE9969F2"

config.steam.mock.steam64 = "123456789987"
config.steam.mock.steamName = "Peter Pan"
config.steam.mock.steamProfileurl = "https://steamcommunity.com/id/crispysheesh"
config.steam.mock.steamAvatar = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/58/58e76c55904b2159f5fe1802a6f9e9f1f373510b_full.jpg"
config.steam.mock.steamAvatarmedium = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/58/58e76c55904b2159f5fe1802a6f9e9f1f373510b_full.jpg"
config.steam.mock.steamAvatarfull = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/58/58e76c55904b2159f5fe1802a6f9e9f1f373510b_full.jpg"

config.system.cores = require('os').cpus().length
config.system.realm = ""
config.system.env = "local"

config.web.port = 8089

config.email.username =
config.email.password =
config.email.to =
config.email.from =
config.email.service =

config.redis.url = "redis://35.189.248.208:6379"
config.redis.password = "puYMi4vDf9bc"

config.cookie.secret = "1i!5nib!235b!uib2!35Afa"

config.database.connection = {
    host: "35.197.247.140",
    user: "mainQuery",
    password: "4j12kNMnBr24B!2",
    database: "test",
    charset: "utf8_general_ci"
}

module.exports = config;
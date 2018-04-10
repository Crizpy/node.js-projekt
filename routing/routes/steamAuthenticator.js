var express = require('express');
var router = express.Router();
var OpenIDStrategy = require('passport-openid').Strategy;
var passport = require('passport');
var https = require('https');
var config = require("../../configuration/default")

var steamDeveloperAPIKey = config.steam.apikey

router.use(require('cookie-parser')());
router.use(passport.initialize());
router.use(passport.session());

var SteamStrategy = new OpenIDStrategy({
        providerURL: 'http://steamcommunity.com/openid',
        stateless: true,
        returnURL: `https://${config.system.realm}/auth/return`,
        realm: `https://${config.system.realm}/`,
    },
    function(identifier, done) {
        process.nextTick(function () {
            var user = {
                identifier: identifier,
                steamId: identifier.match(/\d+$/)[0]
            };
            return done(null, user);
        });
    });

passport.use(SteamStrategy);

passport.serializeUser(function(user, done) {
    done(null, user.identifier);
});

passport.deserializeUser(function(identifier, done) {
    done(null, {
        identifier: identifier,
        steamId: identifier.match(/\d+$/)[0]
    });
});

router.post('/login', passport.authenticate('openid'));

router.get('/return', passport.authenticate('openid'),
    function(request, response) {
        if (request.user) {

            var steam64 = request.user.steamId

            var options = {
                host: "api.steampowered.com",
                port: 443,
                path: `/ISteamUser/GetPlayerSummaries/v0002/?key=${steamDeveloperAPIKey}&steamids=${steam64}`,
                method: 'GET'
            };

            var reqGet = https.request(options, function(res) {
                res.on('data', function(result) {

                    var parsedData = JSON.parse(result);
                    var basepath = parsedData.response.players[0];
                    var name = basepath['personaname'].replace(/(<([^>]+)>)/ig, "");

                    if(!name.toLowerCase().includes(`${config.system.realm}`)) {
                        var urlRegex =/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;
                        name = name.replace(urlRegex,"*");
                    }

                    request.session.steam64 = steam64;
                    request.session.steamName = name;
                    request.session.steamProfileurl = basepath['profileurl'];
                    request.session.steamAvatar = basepath['avatar'];
                    request.session.steamAvatarmedium = basepath['avatarmedium'];
                    request.session.steamAvatarfull = basepath['avatarfull'];

                    response.redirect('/coinflip');

                });
            });

            reqGet.end();

            reqGet.on('error', function(e) {
                console.error(e);
            });

        } else {
            console.log("An Error occured within the Steam Authenticator module");
            response.redirect('/');
        }
    });

router.post('/logout', function(request, response) {
    request.logout();
    request.session.destroy();
    response.redirect('/');
});

module.exports = router;

var express = require('express');
var router = express.Router();
var config = require("../../configuration/default")

router.post('/login', function(request, response) {

    request.session.steam64 = config.steam.mock.steam64;
    request.session.steamName = config.steam.mock.steamName;
    request.session.steamProfileurl = config.steam.mock.steamProfileurl;
    request.session.steamAvatar = config.steam.mock.steamAvatar;
    request.session.steamAvatarmedium = config.steam.mock.steamAvatarmedium;
    request.session.steamAvatarfull = config.steam.mock.steamAvatarfull;

    response.redirect('/');

});

module.exports = router;

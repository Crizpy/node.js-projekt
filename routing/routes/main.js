var express = require('express');
var router = express.Router();
var resources = require("../../configuration/resources")

router.get('/', function(req, res) {

    console.log(req.session)

    if(req.session.steam64) {
        res.render('main', {
            "resources" : resources
        })
    } else {
        res.render('loginPage', {
            "resources" : resources
        })
    }

});

router.get('/kill', function(req, res) {

    var fs = require('fs');
    fs.readFile('somefile.txt', function (err, data) {
        if (err) throw err;
    });

});

module.exports = router;

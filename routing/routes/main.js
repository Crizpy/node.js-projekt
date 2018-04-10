var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

    console.log(req.session)

    if(req.session.steam64) {
        res.render('main')
    } else {
        res.render('loginPage');
    }

});

router.get('/kill', function(req, res) {
    process.exit(1);
});

module.exports = router;

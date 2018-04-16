var mailer = require('nodemailer')

var config = require("../../configuration/default")

var transporter = mailer.createTransport({
    service: config.email.service,
    auth: {
        user: config.email.username,
        pass: config.email.password
    }
});

function sendErrorMail(err) {


    var mailOptions = {
        from: config.email.from,
        to: config.email.to,
        subject: 'Production Error!',
        text: 'Process id : ' + process.pid + " \n Error : " + err
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    sendErrorMail: sendErrorMail
};
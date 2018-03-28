var config = require("../configuration/default")
var mysql = require("mysql");

const connection = mysql.createConnection(config.database.connection);


connection.query("SELECT * FROM session",[],function (err,res) {
    if(err) {
        console.log(err)
    } else {
        console.log(res)
    }
})

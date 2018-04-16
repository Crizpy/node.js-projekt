var redis = require('redis');
var redisAdapter = require('socket.io-redis');
var config = require("configuration/default")

function initialiseRedisHandler(io) {

    var redisUrl = config.redis.url;
    var redisOptions = require('parse-redis-url')(redis).parse(redisUrl);
    redisOptions.password = config.redis.password

    var pub = redis.createClient(redisOptions.port, redisOptions.host, {
        detect_buffers: true,
        auth_pass: redisOptions.password
    });
    var sub = redis.createClient(redisOptions.port, redisOptions.host, {
        detect_buffers: true,
        auth_pass: redisOptions.password
    });

    io.adapter(redisAdapter({
        pubClient: pub,
        subClient: sub
    }));

    console.log('Redis adapter started with url: ' + redisUrl);

}

module.exports = initialiseRedisHandler
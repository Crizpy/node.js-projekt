var redis = require('redis');
var redisAdapter = require('socket.io-redis');

function initialiseRedisHandler(io) {

    var redisUrl = process.env.REDISTOGO_URL || 'redis://127.0.0.1:6379';
    var redisOptions = require('parse-redis-url')(redis).parse(redisUrl);
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
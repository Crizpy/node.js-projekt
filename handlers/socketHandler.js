function initialiseIOSocketHandlers(io) {

    io.on('connection', function(socket) {

        console.log('Connection made. socket.id='+socket.id+' . pid = '+process.pid);

        socket.on('chat_in', function(msg) {
            console.log('emitting message: '+msg+' . socket.id='+socket.id+' . pid = '+process.pid);
            io.emit('chat_out', 'Process '+process.pid+': '+msg);
        });
        socket.on('disconnect', function(){
            console.log('socket disconnected. socket.id='+socket.id+' . pid = '+process.pid);
        });

        socket.emit('chat_out', 'Connected to socket server. Socket = '+socket.id+'.  Process = '+process.pid);
    });

    io.on('disconnect', function(socket) {
        console.log('Lost a socket. socket.id='+socket.id+' . pid = '+process.pid);
    });

}

module.exports = initialiseIOSocketHandlers
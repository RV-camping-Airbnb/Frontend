var app = require('express');
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connect', function(socket) {
  console.log('A user connected.');
  socket.on('chat message', function(msg) {
    console.log('message: ' + JSON.stringify(msg));
    io.emit('chat message', msg);
  });
});

http.listen(3001, function() {
  console.log('Listening on port 3001');
});
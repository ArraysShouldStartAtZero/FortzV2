var express = require('express');
var sock = require('socket.io');

var app = express();
var port = 3000;
var server = app.listen(port, function() {
  console.log('Listening for requests on port ' + port);
});

app.use(express.static('../client/'));

var io = sock(server);

console.log('Setting up the Socket Handler');

io.on('connection', function(socket) {
  console.log('Client Connected (id: ' + socket.id + ')');
  //TODO messaging setup here
});

console.log('Socket Handler Setup Complete');

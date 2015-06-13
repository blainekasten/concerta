var express = require('express');
var app = express();
var router = express.Router()
var http = require('http').Server(app);
var io = require('socket.io')(http);


//app.use(express.static(__dirname + '/jspm_packages'))

app.use('/jspm_packages', express.static(__dirname + '/jspm_packages'));
app.use('/app', express.static(__dirname + '/app'));

app.get('/', function(req, res){
  console.log('hello');
  res.sendFile(__dirname + '/index.html');
});



io.on('connection', function(socket){
  socket.on('method', function(msg){
    console.log('method:', msg);
    io.emit('method', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

var express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http').Server(app),
    fs = require('fs'),
    io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, './public')));
io.sockets.on('connection', function (socket) {
  socket.on('location', function (data) {
    console.log(data);
    data =  data.lat+","+data.lon +";;";   
    fs.appendFile('data/location.log',data,function(err){
       if(err) throw err;        
    });
  });
});

http.listen(process.env.PORT || 5000, function () {
    console.log('listening on: 8000');
});

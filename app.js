var express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http').Server(app),
    fs = require('fs'),
    io = require('socket.io')(http);

var items = Array("http://lorempixel.com/400/200/",
                  "http://lorempixel.com/g/400/200","http://lorempixel.com/400/200/sports/",
                  "http://lorempixel.com/400/200/sports/1/");
app.use(express.static(path.join(__dirname, './public')));
io.sockets.on('connection', function (socket) {
  socket.on('location', function (data) {
    console.log(data);
    var item = items[Math.floor(Math.random()*items.length)];
    socket.emit('data',item)  
    /*data =  data.lat+","+data.lon +";;";   
    fs.appendFile('data/location.log',data,function(err){
       if(err) throw err;        
    });
    */
  });
});

http.listen(process.env.PORT || 5000, function () {
    console.log('listening on: 5000');
});

var express = require('express'),
    router = express.Router(),
    app = express(),
    path = require('path'),
    http = require('http').Server(app),
    fs = require('fs'),
    io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, '../public')));
io.sockets.on('connection', function (socket) {
  var address = socket.request.connection.remoteAddress;
      console.log('New connection from ' + address);

    socket.on('location', function (data) {
    console.log(data);
 
 
      data.address= address;
      
    fs.writeFile('data/location.log',String(data),function(err){
       if(err) throw err;        
    });
  });
});

http.listen(8000, function () {
    console.log('listening on: 8000');
});

module.exports = router;

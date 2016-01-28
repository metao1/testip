var express = require('express');
var querystring = require('querystring');
var http = require('http');

var app = express();
app.get('/', function (req, res) {
  var data = 
   {"first_name":"Mehrdad","last_name":"mehrdadallahkarami@gmail.com","phone":"+989395721503","cover_letter":"Mehrdad Allahkarmai",
      "urls":[{"twitter":"@studiometao"},{"persoal":"http://metao.ir"},{"resume":"blog.avesty.com"}]
  }

  var options = {
    host: 'app.close.io/hackwithus',
    port: 443,
    path: '/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };
    
  var httpreq = http.request(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      console.log("body: " + chunk);
    });
    response.on('end', function() {
      res.send('ok');
    });
  });
  httpreq.write(data);
  httpreq.end();
});

app.listen(8090);
var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
   var json= JSON.parse(req.body);
    
   console.log(json['URLs']);
});

module.exports = router;

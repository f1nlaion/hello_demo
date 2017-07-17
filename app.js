var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello CONTINUOUS DELIVERY BABYYYYY!!!");
});

app.listen(4000);
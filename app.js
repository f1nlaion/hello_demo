var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello CONTINUOUS DELIVERY babyyyyyy!!!");
});

app.listen(4000);
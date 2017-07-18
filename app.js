var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello CD babyyyyyy!!!");
});

app.listen(4000);
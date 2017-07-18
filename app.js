var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello CD for Tash!!!");
});

app.listen(4000);
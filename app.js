var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello CD for Mike!!!");
});

app.listen(4000);
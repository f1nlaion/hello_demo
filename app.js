var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello CONTINUOUS D!!!");
});

app.listen(4000);
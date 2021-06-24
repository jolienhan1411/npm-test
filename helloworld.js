var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World! what the hell is going on?');
});
app.listen(3000, function () {
  console.log('Testing anyway!!!');
});

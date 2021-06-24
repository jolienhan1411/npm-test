var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World! I am testing');
});
app.listen(3000, function () {
  console.log('Testing anyway!!!');
});

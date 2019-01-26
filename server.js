var express = require('express');
var app = express();
var server = require('http').Server(app);
const PORT = process.env.PORT || 5000

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render(__dirname + '/index.html');
});


server.listen(PORT, function () {
  console.log(`Listening on ${server.address().port}`);
});

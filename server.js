var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var messages = []

app.use(bodyParser())

app.post('/message', function(req, res) {
  messages.push({
    username: req.body.username,
    message: req.body.message,
    timestamp: new Date().toUTCString()
  })
  res.status(200).end()
})

app.get('/messages', function(req, res) {
  res.send(messages)
})

app.use(express.static(__dirname + '/app'))

app.listen(8000);

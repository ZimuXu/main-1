'use strict'

var express = require('express');

var app = module.exports = express()

app.get('/healthz', function(req, res){
  res.send('200');
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
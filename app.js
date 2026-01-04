var express = require('express');
var path = require('path');

var app = express();

// serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// start server
app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});

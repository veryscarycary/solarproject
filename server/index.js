const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function(err) {
  if (err) {
    console.log('Something went wrong!');
  }
  console.log('Listening on port ' + port);
});

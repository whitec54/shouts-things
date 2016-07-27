var express = require('express');
var app = express();
module.exports = router = express.Router();

var bodyParser = require('body-parser');

//configure app to use bodyParser()
//this will let us get the data from a request
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//require other files
var index = require('./routes/index'),
	bot = require('./fancybot1.js'),
	request = require('request');

var port = 3000 || process.env.PORT;

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);




request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body) // Show the HTML for the Google homepage.
  }
});

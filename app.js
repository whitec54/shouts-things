var express = require('express');
module.exports = router = express.Router();
var app = express();

var bodyParser = require('body-parser');

//configure app to use bodyParser()
//this will let us get the data from a request
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

var index = require('./routes/index');
var bot = require('./fancybot1.js');

var port = 3000 || process.env.PORT;

app.use('/api', router);


app.listen(port, function(){
	console.log('Magic happens on port ' + port);
});

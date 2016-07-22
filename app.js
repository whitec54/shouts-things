var express = require('express'),
	app = express(),
	router = require('./routes/index');

var port = 3000 || process.env.PORT;

app.use('/', router);

app.listen(port, function(){
	console.log('Magic happens on port ' + port);
});

var express = require('express'),
	app = express(),
	port = 3000 || process.env.PORT;

app.get('/', function(req, res){
	res.json({message: 'working'});
});

app.listen(port, function(){
	console.log('Magic happens on port ' + port);
});
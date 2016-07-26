var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	port = process.env.PORT || 3000;

//configure app to use bodyParser()
//this will let us get thedata from a POST
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  console.log(req.url);

	res.json({message: 'Davids dads...'});
});

app.post('/', function(req, res){
	console.log(req);
	var message = '"'+req+'"? well I guess I\'m just FUCKING GAY';
	res.send(message);
});

app.listen(port, function(){
	console.log('Magic happens on port ' + port);
});

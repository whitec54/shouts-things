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
	var senderType = req.body.sender_type,
		text = req.body.text,
		senderName = req.body.name;

	var message = "'"+text+"'? I guess I'm just FUCKING GAY. Isn't that right "+ senderName+"?";

	if(senderType == 'user'){
		res.send(message);
	}
	else{
		log(text);
	}

	console.log(message);
});

app.listen(port, function(){
	console.log('Magic happens on port ' + port);
});

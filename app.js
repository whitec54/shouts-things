var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	port = process.env.PORT || 3000,
	request = require('request');

//configure app to use bodyParser()
//this will let us get thedata from a POST
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})

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
		res.writeHead(200);
		postMessage();
		res.end();
	}
	else{
		log(text);
	}

	console.log(message);
});

app.listen(port, function(){
	console.log('Magic happens on port ' + port);
});

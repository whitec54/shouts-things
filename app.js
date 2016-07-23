var express = require('express'),
	app = express(),
	port = 3000 || process.env.PORT;

//configure app to use bodyParser()
//this will let us get thedata from a POST
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  console.log(req.url);

	res.json({message: 'Davids dads...'});
});

app.listen(port, function(){
	console.log('Magic happens on port ' + port);
});

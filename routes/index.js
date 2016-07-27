router.get('/', function(req, res){
	console.log(req.url);

	res.json({message: 'Whoowee! Welcome to our api'});
});

router.get('/booze', function(req, res, next) {
  res.json({'sweat': 'hey there'});
  next();
});


router.post('/', function(req, res){
	var senderType = req.body.sender_type,
		text = req.body.text,
		senderName = req.body.name;

	var message = "'"+text+"'? IS THAT WHAT YOU SAID , " +senderName+"?";

	if(senderType == 'user'){
		console.log("IF IS TRUE");

		var options = {
	    url: 'https://api.groupme.com/v3/bots/post',
	    method: 'POST',
	    form: {'bot_id': 'f653f0bc7a6d6cb89253872ea2', 'text': message}
		};

		// request(options, function (error, response, body){
	  //   if (!error && response.statusCode == 200) {
		//
	  //       console.log("the request happen")
	  //   }
		// });
	}

	console.log(message);
});

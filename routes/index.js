router.get('/', function(req, res){
	console.log(req.url);

	res.json({message: 'Davids dads...'});
});

router.get('/booze', function(req, res, next) {
  res.json({'sweat': 'hey there'});
  next();
});

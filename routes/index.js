var express = require('express'),
	router = express.Router();

router.get('/', function(req, res){
	res.json({message: 'working'});
})

module.exports = router;

var express = require('express');
var router = express.Router();
var Meme = require('../models/meme.js');
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js');

router.post('/signup', function(req, res){
  console.log("backend post route");
});



module.exports = router;

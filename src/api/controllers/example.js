// var Client = require('node-rest-client').Client;
// var client = new Client();

exports.findAll = function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
  res.status(200).jsonp();
};

exports.findById = function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
  res.status(200).jsonp();
};

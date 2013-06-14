var express = require('express')
var app = express.createServer();
//var https = require('https');

app.get('/json1', function(req, res){
  var url;	
  var json = { test: getData() }
  res.send(json);
});

app.get('/json2', function(req, res){
  var json // = 
  res.send(json);
});

function getData() {
	app.get('https://hitobank-test.herokuapp.com/sessions/job_openings_count.json', function(response) {
		response.on('data', function(chunk) {
			return chunk.toString();
		})
	})
}


app.listen(8000);

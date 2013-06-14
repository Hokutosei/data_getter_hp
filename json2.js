var express = require('express')
var app = express();
var https = require('https');

var dataArray = {}, getRequestCounter = 0, requestCounter = 0;
var hostUrl = 'https://www.hitobank.jp/sessions/job_openings_count.json'

app.get('/json1', function(req, res){
  var url;
  requestCounter++;
  dataArray['requestCounter'] = requestCounter;
  var json = JSON.stringify(dataArray)
  res.jsonp(dataArray);
});

app.get('/json2', function(req, res){
  var json // =
  res.send(json);
});


getData()

function getData() {
        console.log('do get')
        https.get(hostUrl, function(response) {
                response.on('data', function(chunk) {
                        dataArray['jobOpeningCount'] = chunk.toString();
			getRequestCounter++;
                        return chunk.toString();
                })
        })
}

setInterval(function() { getData() }, 90000)

var port = 8000
app.listen(8000);
console.log('Server listening to ' + port)

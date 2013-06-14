var https = require('https');
var url = require('url')

var options = {
  host: 'https://hitobank.jp',
  port: 80,
  path: '/sessions/job_openings_count.json' //Make sure path is escaped
}; //Options for getting the remote page

https.createServer(function(request, response) {
  var uri = url.parse(request.url).pathname;
  if(uri === "/streamA") {
    https.get(options, function(res) {

        res.pipe( response ); //Everything from the remote page is written into the response
        //The connection is also auto closed

    }).on('error', function(e) {
        response.writeHead( 500 ); //Internal server error
        response.end( "Got error " + e); //End the request with this message
    });

  } else {
    response.writeHead( 404 ); //Could not find it
    response.end("Invalid request");

  }

}).listen(8080);

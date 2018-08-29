var http = require('http');


var server = http.createServer(function(request, response) {

 
response.writeHead(200, {"Content-Type": "text/plain"});
  
 
response.end("Welcome to Azure Web App!");

});




var port = process.env.PORT || 1337;

server.listen(port);


console.log("Server is running");
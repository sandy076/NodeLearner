var http = require("http");
var url = require("url");

function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    if(pathname != '/favicon.ico')
    {
    	response.writeHead(404, {"Content-Type": "text/html"});
    	response.write("Hello World");
    	//response.write("<html><img src=\"favicon.ico\" alt=\"Smiley face\" height=\"42\" width=\"42\"></html>");
    	response.end();
	}
	else
	{
		response.writeHead(404, {"Content-Type": "text/html"});
		response.end();
	}

	console.log("Request ends");
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
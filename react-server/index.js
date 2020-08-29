var httpClient=require('http');
httpClient.createServer(function(request,response)
{
     response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("hello world");
}

).listen(4000);

console.log("Server started at port:4000");
var http = require('http') 
 var server=http.createServer(function(req,res)
 {res.writeHead(200,{'Content-Type':'text/html'});
 res.end('<h1>Hello Vivek</h1>')

 });
 var port = Number(process.env.PORT ||8800)
 server.listen(port);
var http = require("http");

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  var body = '';
  res.on("data", function(data){
    body += data;
  });
  res.end(function(){
    var date = new Date
      return date.day();
  });
}).listen(80, "localhost");
var http = require("http");
const strftime = require('strftime')  
const url = require('url');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var objUrl = url.parse(req.url, true),
    re1 = /^\//, re2 = /%20/g, re3 = /^[0-9]+$/;
  try {
    var dateString = objUrl.pathname.replace(re1,'');
    dateString = re3.test(dateString) ? +dateString : dateString.replace(re2,' ');
    var date = new Date(dateString);
    if(dateString && date != 'Invalid Date'){
      res.end("{ unix:" + date.getTime() + ", natural: " + strftime('%B %d, %Y', date) + "}");
    }
    throw 'Invalid Date';
  } catch(e) {
    res.end("{ unix: null, natural: null}");
  }
}).listen($PORT, localhost);
var app = require('http').createServer(handler),
fs = require('fs'),
url = require('url'),
qs = require('querystring');
//app.listen(25494);//学校のサーバーの時
app.listen(80);//自分のサーバーの時
function handler(req,res){
  var req_url = req.url;
  console.log(req_url);
  if(req.method=='GET'||req_url == "" || req_url =="/"){
    var param_json = url.parse(req.url, true).query;
    console.log(param_json);
    if(param_json.id == 1||req_url == "" || req_url =="/"){
      console.log("id=1");
      fs.readFile(__dirname +'/test.html', 'UTF-8', function(err, data){
        if (err) {
          res.writeHead(500);
          return res.end('Error');
        }
        res.writeHead(200);
        res.write(data);
        res.end();
      });
    }
  }
}
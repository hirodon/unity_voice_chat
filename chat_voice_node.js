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
        // tojson
    var param_json = url.parse(req.url, true).query;
    console.log(param_json);

        // querystring
        //var hoge = url.parse(req.url).query;

    if(param_json.id == 1||req_url == "" || req_url =="/"){
      console.log("id=1");
      fs.readFile(__dirname +'/index.html', 'UTF-8', function(err, data){
        if (err) {
          res.writeHead(500);
          return res.end('Error');
        }
        res.writeHead(200);
        res.write(data);
        res.end();
      });
    }else if(param_json.id == '2'){
      console.log("id=2");
      
      fs.readFile(__dirname + '/voice_chat.html',function(err,data){
        if (err) {
          res.writeHead(500);
          return res.end('Error');
        }
        res.writeHead(200);
        res.write(data);
        res.end();
      });
    }
    console.log("pg end");
  }
  if ('/css/style.css' == req_url) {
    fs.readFile('./css/style.css', 'UTF-8', function (err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if ('/js/voice_chat.js' == req_url) {
    fs.readFile('./js/voice_chat.js', 'UTF-8', function (err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  // fs.readFile(__dirname + '/index.html',function(err,data){
  //   if (err) {
  //     res.writeHead(500);
  //     return res.end('Error');
  //   }
  //   res.writeHead(200);
  //   res.write(data);
  //   res.end();
  // });
}

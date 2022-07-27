var http = require('http');
var fs = require('fs');
var nStatic = require('node-static');

var fileServer = new nStatic.Server('C:\\Users\\ashdo\\Documents\\GitHub\\coffeeRobot\\User interface');

http.createServer(function (req, res) {
    
    fileServer.serve(req, res);

}).listen(8080);
function sendData(result){
let data = result;
fs.writeFile('C:\\Users\\ashdo\\Documents\\GitHub\\coffeeRobot\\User interface\\test.txt', data,function(err) {
    if(err) console.log('error', err);
  });;
}
var http = require('http');
var fs = require('fs');
var nStatic = require('node-static');

var fileServer = new nStatic.Server('C:\\Users\\ashdo\\Documents\\GitHub\\coffeeRobot\\User interface');

http.createServer(function (req, res) {
    
    fileServer.serve(req, res);

}).listen(8080);
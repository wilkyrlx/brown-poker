// this code does not actually run yet

alert( 'Hello, world!' );

addSlides();

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);

function addSlides() {
    var path = "gallery/";
    var fs = require('fs');
    var files = fs.readdirSync('./gallery/');
    alert(files.length.toString());

    if (files.length == 0) {
        alert("no files found")
    }

    for (const file of files) {
        console.log(file);
        alert("!");
    }

}
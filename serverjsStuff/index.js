var http = require("http");
var url = require("url");
var fs = require("fs");
http.createServer(function(req, res){
    // res.writeHead('200',{
    //     "content-type": "text/plain"
    // })
    // res.end("hello Joe");
    // res.writeHead('307',{
    //     "Location": "http://www.w3schools.com"
    // })
    // res.end("hello Joe");
    var pathname = url.parse(req.url).pathname;
    console.log(pathname);
    // if(pathname ==="/"){
    //     res.writeHead('200',{
    //         "content-type":"text/plain"
    //     });
    //     res.end("index.html");
    // }else if (pathname === '/about.html'){
    //     res.writeHead('200' ,{
    //         "content-type":"text/plain"
    //     });
    //     res.end("about.html")
    // }else{
    //     res.writeHead('400' ,{
    //         "content-type":"text/plain"
    //     });
    //         res.end("page Not found")
    // }
    var theFile;
    
    switch (pathname) {
        case'/about':
        case '/about.html':
            theFile ="about.html"
            break;
    
        default:
            theFile ="index.html"
            break;
    }
    fs.readFile(theFile, function(err,data){
        res.writeHead('200',{
            "content-type": "text/html"
        })
        res.end(data);
    })
}).listen(3002);
console.log("Server Running")


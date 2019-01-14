var http = require("http");
var express = require("express");
var app = express();
var routes = require('routes');


// Create the express router object for bloggers
var bloggerRouter = express.Router();

//bloggerRouter.get(‘/’, function(req, res) { });
app.get('/findall', bloggerRouter);

app.get("http://localhost:8080/findall", (err, req, res, next) => {
console.log('response ---> \n\n',res); 
//res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

console.log("done with api call");
http.createServer(app).listen(app.get(8081), '0.0.0.0', function() {
    console.log('Express server listening on port ' + 8081);
});

const request = require('request');
var http = require('http');
console.log('start');
request('http://localhost:8080/findall', function (error, response, body) {
 if(error){
  console.log(error);	
 }  
if (!error && response.statusCode == 200) {
    console.log(body);
  }
});
console.log('end');

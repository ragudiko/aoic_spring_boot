var request = require("request");

//request.get("http://localhost:8080/spring-boot/blogger/findall", (error, response, body) => {
request.get("http://168.1.140.122:30096/spring-boot/blogger/findall", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    //console.dir(JSON.parse(body));
    console.log(body);
});

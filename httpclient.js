var http = require('http');

var link = process.argv[2];

http.get(link, function callback(response){
    response.on("data", function (data){
        console.log(data.toString()
        )
    })
    response.on("error", function(err){
        console.log(err)
    })
});
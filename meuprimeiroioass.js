var fs = require('fs');

var content = fs.readFile(process.argv[2], 'utf8', function callback(err, data){
    if(err)  throw err;
    console.log(data.split('\n').length -1);
});

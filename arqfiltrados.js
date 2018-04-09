var fs   = require('fs');
var path = require('path');

var diretorio = process.argv[2];
var extencao  = '.' + process.argv[3];

fs.readdir(diretorio, function callback(err, list){
    if(err) console.log(err);
    
    for(var i = 0; i < list.length; i++){
       if(path.extname(list[i]) == extencao){
            console.log(list[i]);
       };
    };
    

});
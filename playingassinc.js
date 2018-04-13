var http = require('http');
var bl   = require('bl');

var conta  = 0;
var result = [];

function imprime(){
    for(var i = 0; i < 3; i++)
        console.log(result[i])
};

function getter(index){
    http.get(process.argv[2 + index], function(response){
        response.pipe(bl(function (err, data){
            if(err){
                return console.log(err)
            }
            else{
                result[index] = data.toString();
                conta++
                if(conta == 3){
                    imprime();
                }
            }
        }))
    })
};

for(var i = 0; i < 3; i++){
    getter(i)
};


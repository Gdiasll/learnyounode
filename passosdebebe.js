var total = process.argv.length;
var soma= 0;

for(var i = 2; i < total; i++){
    soma += +process.argv[i];
};

console.log(soma);


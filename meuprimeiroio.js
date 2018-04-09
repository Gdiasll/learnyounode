var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var linhas = str.split('\n');

console.log(linhas.length -1);


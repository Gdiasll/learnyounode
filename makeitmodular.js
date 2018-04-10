var dir = process.argv[2];
var filter = process.argv[3];
var mymodule = require('./mymodule.js')


mymodule (dir,filter, function (err, data) {
    if (err) {
        console.log("There was an error")
    }
    else {
        console.log(data)
        }    

})
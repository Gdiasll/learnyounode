var fs = require('fs')
var path = require('path');

module.exports = function(dir, filter, callback) {

    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err)
        }
        else {
            list.forEach( function(file) {
                if ( path.extname(file) === '.' + filter ) {
                    return callback(null, file)             
                }
            })
        }
    })




};
var net      = require('net');
var strftime = require('strftime');
var porta = process.argv[2];

var server = net.createServer(function callback (socket){
    socket.write(strftime('%Y-%m-%d %H:%M' + '\n') , function(err, data){
        if(err) console.log(err);
        socket.end();
    });
    
    
})
server.listen(porta);
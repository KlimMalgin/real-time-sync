
var RtsServer = require('../../index').RtsServer;

var server = new RtsServer({
    port: 3005,
    callback: serverStartSuccess
});


function serverStartSuccess () {
    
    console.log('server define echo');
    server.network.define('echo', function (data, clientId) {
        var msg = 'Echo server log: ' + JSON.stringify(data);
        console.log(msg);
    
        server.network.send('echo', msg, clientId);
    });

}

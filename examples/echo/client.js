
var RtsClient = require('../../index').RtsClient;


var client = new RtsClient({
    url: 'http://localhost:3005',
    callback: clientStartSuccess
});

function clientStartSuccess () {

    client.network.define('echo', function () {
        console.log('Client echo log ', arguments);
    });
    
    client.network.send('echo', {
        msg : 'Hello Server!'
    });
    
}

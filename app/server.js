
var IgeClass = require('./components/common/IgeClass');
var IgeNetIoServerComponent = require('./components/common/IgeNetIoServerComponent');

// Real time sync server
var RtsServer = IgeClass.extend({
    classId: 'Server',

    init: function () {
        var self = this;

        console.log('Start init function');

        this.addComponent(IgeNetIoServerComponent)
            // Start the network server
            .network.start(3003, function () {

                console.log('register some event');
                self.network.define('someEvent', function (data, clientId) { 
                    console.log('server::someEvent: ', data, ' :: ', clientId);

                    self.network.send('someEvent', { msg:'echo from server for client ' + clientId }, clientId);
                });

                self.network.acceptConnections(true);


            });

    }

});


var rtsServerInstance = new RtsServer();
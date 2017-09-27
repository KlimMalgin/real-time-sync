
var IgeClass = require('./components/common/IgeClass');
var IgeNetIoServerComponent = require('./components/common/IgeNetIoServerComponent');

// Real time sync server
var RtsServer = IgeClass.extend({
    classId: 'Server',

    init: function (options) {
        var self = this;

        this.log('Start Server::init');


        if (options && options.port) {
            this.addComponent(IgeNetIoServerComponent)
                // Start the network server
                .network.start(options.port, function () {
                    self.log('Server network::start');
                    options.callback && options.callback.call(self);
                    /*
                    console.log('register some event');
                    self.network.define('someEvent', function (data, clientId) { 
                        console.log('server::someEvent: ', data, ' :: ', clientId);

                        self.network.send('someEvent', { msg:'echo from server for client ' + clientId }, clientId);
                    });
                    */
                    self.network.acceptConnections(true);


                });
        } else {
            this.log('required port!');
        }


    }

});


module.exports = RtsServer;
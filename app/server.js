
var IgeClass = require('./components/common/IgeClass');
var IgeNetIoComponent = require('./components/common/IgeNetIoComponent');

// Real time sync server
var RtsServer = IgeClass.extend({
    classId: 'Server',

    init: function () {
        var self = this;

        console.log('Start init function');

        this.addComponent(IgeNetIoComponent)
            // Start the network server
            .network.start(3003, function () {

                console.log('register some event');
                self.network.define('someEvent', function () { console.log('server::someEvent: ', arguments); });



            });

    }

});


var RtsServerInstance = new RtsServer();

var IgeClass = require('./components/common/IgeClass');
var IgeNetIoClientComponent = require('./components/common/IgeNetIoClientComponent');


var RtsClient = IgeClass.extend({
	classId: 'Client',

    init: function () {
        var self = this;

        console.log('Start Client::init');

        this.addComponent(IgeNetIoClientComponent);
        this.network.start('http://localhost:3003', function () {
            console.log('Start Client::network::start');

            self.network.define('someEvent', function () { console.log('client::someEvent: ', arguments); });

            self.network.send('someEvent', {msg:'from client'});

        });

    },
});

var rtsClientInstance = new RtsClient();
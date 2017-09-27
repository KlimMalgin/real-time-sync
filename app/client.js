
var IgeClass = require('./components/common/IgeClass');
var IgeNetIoClientComponent = require('./components/common/IgeNetIoClientComponent');


var RtsClient = IgeClass.extend({
	classId: 'Client',

    init: function (options) {
        var self = this;

        this.log('Start Client::init');

        if (options && options.url) {
            this.addComponent(IgeNetIoClientComponent);
            this.network.start(options.url, function () {
                this.log('Start Client::network::start');
                options.callback && options.callback.call(this);
                // self.network.define('someEvent', function () { console.log('client::someEvent: ', arguments); });
                // self.network.send('someEvent', {msg:'from client'});
    
            });
        } else {
            this.log('url required');
        }

    },
});

module.exports = RtsClient;
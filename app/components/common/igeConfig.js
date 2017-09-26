
igeConfig = {
	debug: {
		_enabled: true,
		_node: typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined',
		_level: ['log', 'warning', 'error'],
		_stacks: true,
		_throwErrors: true,
		_timing: true,
		enabled: function (val) {
			if (val !== undefined) {
				this._enabled = val;
	
				if (!val) {
					this._timing = false;
	
					// Check if the engine exists
					if (ige) {
						// Turn off stats display in the engine
						ige.showStats(0);
					}
				}
	
				return this;
			}
	
			return this._enabled;
		}
	}
};

if (igeConfig.debug._node) {
	igeConfig.debug._util = function () {}; 	//require('util');
}

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = igeConfig; }

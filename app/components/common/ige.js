/**
 * Emulation ige object
 */

var ige = {
    _timeScale: 1,
    _currentTime: 0,

	isServer: (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined'),
	isClient: !this.isServer,

    /**
	 * Gets / sets the current time scalar value. The engine's internal
	 * time is multiplied by this value and it's default is 1. You can set it to
	 * 0.5 to slow down time by half or 1.5 to speed up time by half. Negative
	 * values will reverse time but not all engine systems handle this well
	 * at the moment.
	 * @param {Number=} val The time scale value.
	 * @returns {*}
	 */
	timeScale: function (val) {
		if (val !== undefined) {
			this._timeScale = val;
			return this;
		}

		return this._timeScale;
    },
    
};

if (typeof (module) !== 'undefined' && typeof (module.exports) !== 'undefined') { module.exports = ige; }
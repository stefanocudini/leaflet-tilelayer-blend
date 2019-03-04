(function (factory) {
if (typeof define === 'function' && define.amd) {
	//AMD
	define(['leaflet'], factory);
} else if (typeof module !== 'undefined') {
	// Node/CommonJS
	module.exports = factory(require('leaflet'));
} else {
	// Browser globals
	if (typeof window.L === 'undefined')
		throw 'Leaflet must be loaded first';
	factory(window.L);
}
})(function (L) {

L.TileLayer.Blend = L.TileLayer.extend({
	
	options: {
		mode: 'overlay',
		classNameTile: 'blend'
	},

	blendModes: [
		'normal','screen','overlay',
		'color-dodge','color-burn',
		'darken','lighten',
		'hard-light','soft-light',
		'multiply','difference','exclusion',
		'hue','saturation','color','luminosity'
	],

	intialize: function (layers, options) {

		//TODO
	},
	_initContainer: function () {
		let tile = L.TileLayer.prototype._initContainer.call(this);
		this._container.style.filter = this.colorFilter();
	},
	updateBlend: function (mode) {
		this.options.filter = mode;
		if (this._container) {
			this._container.style.filter = this.colorFilter();
		}
	},
});

L.tileLayer.blend = function (layers, options) {
	return new L.TileLayer.Blend(layers, options);
}

return L.TileLayer.Blend;

});

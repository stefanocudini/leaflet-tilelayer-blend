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
		blendMode: 'overlay',
		tileClassName: 'blend'
	},

	blendModes: [
		'normal','screen','overlay',
		'color-dodge','color-burn',
		'darken','lighten',
		'hard-light','soft-light',
		'multiply','difference','exclusion',
		'hue','saturation','color','luminosity'
	],


	initialize: function (layers, options) {
		L.setOptions(this, options);

		this._layers = {};

		var i, len;

		if (layers) {
			for (i = 0, len = layers.length; i < len; i++) {
				this.addLayer(layers[i], layers[i].);
			}
		}
	},

	addLayer: function (layer, blendMode) {
		var id = L.stamp(layer);

		this._layers[id] = layer;
console.log(layer)
		/*if (this._map) {
			this._map.addLayer(layer);
		}*/

		return this;
	},

    createTile: function (coords) {
        var tile = document.createElement('div',this.options.tileClassName);
        //tile.innerHTML = [coords.x, coords.y, coords.z].join(', ');        
        tile.style.outline = '1px solid red';
        tile.style.backgroundRepeat = 'no-repeat';
        //tile.style.backgroundPosition = 'center center';
/*
        var urls = [];
        for (var i in this._layers) {
            urls.push("url('"+this._layers[i].getTileUrl(coords)+"')");
        }

        if(!tile.style.backgroundImage) {
            tile.style.backgroundImage = urls.join(',');
            tile.style.backgroundBlendMode = this.options.blendMode;//'overlay';
        }*/

        return tile;
    },
/*
	_initContainer: function () {
		let tile = L.TileLayer.prototype._initContainer.call(this);
		this._container.style.filter = this.colorFilter();
	},
	updateBlend: function (mode) {
		this.options.filter = mode;
		if (this._container) {
			this._container.style.filter = this.colorFilter();
		}
	},*/
});

L.tileLayer.blend = function (layers, options) {
	return new L.TileLayer.Blend(layers, options);
}

return L.TileLayer.Blend;

});

if (typeof define !== 'function') { var define = require('amdefine')(module, require) }

define([
	'backbone.abstract.model'
], function(AbstractModel){
	var TimerModel = AbstractModel.extend({
		namespace : 'timer',
		defaults : {
			Id : null,
			Name : null,
			StartTime : null,
			EndTime : null,
			Background : null,
			TextColour : null
		}
	});

	return TimerModel;

});
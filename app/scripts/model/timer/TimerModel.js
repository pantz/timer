define([
	'model/AbstractModel'
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
define([
	'backbone'
], function(Backbone){

	var realSync = Backbone.sync

	//Modify the sync method to play nice with custom URLs.
	Backbone.realSync = Backbone.sync;
	Backbone.sync = function(method, model, options){
		options = options || {};
		switch(method){
			case('create'):
				console.log('I am saving: '+ JSON.stringify(model.toJSON()));
				break;
			case('read'):
				if(model.models && model.models.length >= 0){
					var thisModel = model.getModel();
					console.log('I am loading all of the models: '+thisModel.namespace);
				}
				else
					console.log('I am reading: '+ JSON.stringify(model.toJSON()));
				break;
			case('update'):
				console.log('I am updating: '+ JSON.stringify(model.toJSON()));
				break;
			case('delete'):
				console.log('I am deleting: '+ JSON.stringify(model.toJSON()));
				break;
			default:
				console.log('That ain\'t right...');
			break;
		}
		return model;
	}

	return Backbone;

});
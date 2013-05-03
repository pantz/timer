define([
	'q',
	'backbone'
], function(Q, Backbone, mongodb){

	var realSync = Backbone.sync;
	var Timers = 0;

	//Modify the sync method to play nice with custom URLs.
	Backbone.realSync = Backbone.sync;
	Backbone.sync = function(method, model, options){
		options = options || {};

		var deferred = Q.defer();
		
		switch(method){
			case('create'):
					//Take this model and store it in a db, or memory
					var id = ++Timers;
					//Return the saved model with ID
					model.set('Id', id);
					deferred.resolve(model);
				break;
			case('read'):
				//Reading a collection from the db
				if(model.models && model.models.length >= 0){
					deferred.resolve(model);
				}
				//Reading a single model
				else {
					deferred.resolve(model);
				}
				break;
			case('update'):
				//Updating a db record by ID
				deferred.resolve(model);
				break;
			case('delete'):
				//Removing a db record by ID
				deferred.resolve(model);
				break;
			default:
				console.log('That ain\'t right...');
			break;
		}
		return deferred.promise;
	}

	return Backbone;

});
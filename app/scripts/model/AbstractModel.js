define([
	'backbone.abstract'
], function(BackboneAbstract){
	return BackboneAbstract.Model.extend({
		url : 'http://api.timer.ryan.local/',
		idAttribute : 'Id',
		namespace : null,
		getNamespace: function(){
			return this.namespace;
		}
	});
});
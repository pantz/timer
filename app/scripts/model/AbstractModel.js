define([
	'backbone.abstract'
], function(BackboneAbstract){
	return BackboneAbstract.Model.extend({
		url : 'http://timer2.ryan.local:1337/',
		idAttribute : 'Id',
		namespace : null,
		getNamespace: function(){
			return this.namespace;
		}
	});
});
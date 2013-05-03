define([
	'backbone.abstract',
], function(BackboneAbstract){
	return BackboneAbstract.Collection.extend({
		url : 'http://timer2.ryan.local:1337/',
		getModel : function(){
			var model = this.model;
			return new model();
		}
	});
});
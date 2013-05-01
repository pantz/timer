define([
	'backbone.abstract',
], function(BackboneAbstract){
	return BackboneAbstract.Collection.extend({
		getModel : function(){
			var model = this.model;
			return new model();
		}
	});
});
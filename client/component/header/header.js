Template.header.onRendered(function() {
	console.log(FlowRouter.current())
});
Template.header.helpers({
	currentRoute: function(value) {
		console.log(FlowRouter.current().path);
		return FlowRouter.current().path == ("/" + value);
	}
});
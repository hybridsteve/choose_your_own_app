App.Views.Login = Backbone.View.extend({
	initialize: function() {
		this.model.on("change", this.render, this);
	},
	events: {
		"click #logIn": "login"
	},
	render: function() {
		// following along, but I don't like this hide/show thing. I prefer rendering a template with _
		this.$el.toggleClass("hidden", this.model.isLoggedIn());
		return this;
	},
	login: function() {
		this.model.logIn(this.$("#userName").val());
	},
	tearDown: function() {

	}
});

App.Views.NewQuestion = Backbone.View.extend({
	initialize: function(options) {
		App.currentUser.on("change", this.render, this);
		this.render();
	},
	render: function() {
		// set asker name
		this.$("#asker").text(App.currentUser.get("userName"));
		// show/hide view
		this.$el.toggleClass("hidden", !App.currentUser.isLoggedIn());
		return this;
	}
});
App.Views.NewQuestion = Backbone.View.extend({
	initialize: function(options) {
		App.currentUser.on("change", this.render, this);
		this.render();
	},
	events: {
		"click #addItem": "addItem"
	},
	render: function() {
		// set asker name
		this.$("#asker").text(App.currentUser.get("userName"));
		// show/hide view
		this.$el.toggleClass("hidden", !App.currentUser.isLoggedIn());
		return this;
	},
	addItem: function() {
		var question = {
			text: this.$("#newQuestion").val(),
			userName: App.currentUser.get("userName")
		};

		this.model.add(new App.Models.Question(question));
		this.$("#newQuestion").val("");
	}
});
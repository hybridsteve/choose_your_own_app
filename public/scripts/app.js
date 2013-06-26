$(function() {
	// initialize vars
	App.currentUser = new App.Models.User();
	var questions = new App.Collections.Questions();

	// initialize views
	var loginView = new App.Views.Login({
		el: $("#loginView"),
		model: App.currentUser
	});
	var newQuestionView = new App.Views.NewQuestion({
		el: $("#newQuestionView"),
		model: questions
	});
	var questionView = new App.Views.Questions({
		el: $("#questions"),
		model: questions
	});

	// get data
	questions.fetch();
});

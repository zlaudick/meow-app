// configure our routes
app.config(function($routeProvider, $locationProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			controller  : 'homeController',
			templateUrl : 'angular/views/home.php'
		})

		// route for the treats page
		.when('/treats', {
			controller  : 'treatsController',
			templateUrl : 'angular/views/treats.php'
		})

		// route for the sign up page
		.when('/sign-up', {
			controller  : 'signupController',
			templateUrl : 'angular/views/signup.php'
		})

		// route for the donate page
		.when('/donate', {
			controller  : 'donateController',
			templateUrl : 'angular/views/donate.php'
		})

		// otherwise redirect to home
		.otherwise({
			redirectTo: '/'
		});

	//use the HTML5 History API
	$locationProvider.html5Mode(true);
});

angular.module('authService', [])

// ==============================
// auth factory to login and get information
// inject $http for communicating with the API
// inject $q to return promise objects
// inject AuthToken to manage tokens
// ==============================

.factory('Auth', function($http, $q, AuthToken) {
	
	// create auth factory object
	var authFactory = {};
	
	// log a user in
	authFactory.login = function(username, passwod) {
		
		// return the promise object and its data
		return $http.post('/api/authenticate', {
			username: username,
			password: password
		})
		
		.success(function(data) {
			AuthToken.setToken(data.token);
			return data;
		});
	};
	
	// handle logout
	
	// check if user is logged in
	
	// get the user info
	
	// return auth factory object
	
	return authFactory;
})

// ==============================
// factory for handling tokens
// inject $window to store token client-side
// ==============================
.factory('AuthToken', function($window) {
	
	var authTokenFactory = {};
	
	// get the token out of local storage
	authTokenFactory.getToken = function() {
		return $window.localStorage.getItem('token');
	};
	
	// function to set token or clear token
	// if a token is passed, set the token
	// if there is no token, clear it from local storage
	authTokenFactory.setToken = function(token) {
		if(token)
			$window.localStorage.setItem('token', token);
		else
			$window.localStorage.removeItem('token');
	};
	
	return authTokenFactory;
})

// ==============================
// application configuration to integrate token into requests
// ==============================
.factory('AuthInterceptor', function($q, AuthToken) {
	
	var interceptorFactory = {};
	
	// attach the token to every request
	
	// redirect if a token doesn't authenticate
	
	return interceptorFactory;
});
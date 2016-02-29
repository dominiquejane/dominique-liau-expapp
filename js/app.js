var app = angular.module('ExpApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider, $httpProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('add', {
		url: '/',
		templateUrl: '',
		controller: '',
	})
	.state('manage', {
		url: '/manage',
		templateUrl: '',
		controller: '',
	})
	/*
	.state('login', {
	  url: '/login',
	  templateUrl: '',
	  controller: '',
	})
	*/



})

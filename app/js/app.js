var App;

(function(){
	'use strict';

	var sections;

	App = angular.module('Inio', [
		'ngRoute',
		'Inio.filters',
		'Inio.services',
		'Inio.directives',
		'Inio.controllers'
	]);

	App.controller('AppController', function($scope) {

		$scope.safeApply = function(fn) {
			var phase = this.$root.$$phase;
			if (phase == '$apply' || phase == '$digest') {
				if (fn && typeof fn === 'function') {
					fn();
				}
			} else {
				this.$apply(fn);
			}
		};

		$scope.sections = sections;
	})

	App.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: 'partials/home.html',
				controller: 'Home',
				header: 'partials/snippet/header.html',
				footer: 'partials/snippet/footer.html'
			});

			$routeProvider.when('/catalog', {
				templateUrl: 'partials/catalog.html',
				controller: 'Catalog',
				header: 'partials/snippet/header.html',
				footer: 'partials/snippet/footer.html'
			});

			$routeProvider.when('/catalog/:genreId', {
				templateUrl: 'partials/catalog.html',
				controller: 'Catalog',
				header: 'partials/snippet/header.html',
				footer: 'partials/snippet/footer.html'
			});

			$routeProvider.when('/tvshows', {
				templateUrl: 'partials/tvshows.html',
				controller: 'Tvshows',
				header: 'partials/snippet/header.html',
				footer: 'partials/snippet/footer.html'
			});

			$routeProvider.when('/tvshows/:serieId', {
				templateUrl: 'partials/tvshows.html',
				controller: 'Tvshows',
				header: 'partials/snippet/header.html',
				footer: 'partials/snippet/footer.html'
			});
			
			$routeProvider.when('/detail/:movieId', {
				templateUrl: 'partials/detail.html',
				controller: 'Detail',
				header: 'partials/snippet/header.html',
				footer: 'partials/snippet/footer.html'
			});

			$routeProvider.when('/playback/:movieId', {
				templateUrl: 'partials/playback.html',
				controller: 'Playback',
				header: 'partials/snippet/header.html',
				footer: 'partials/snippet/footer.html'
			});

			$routeProvider.otherwise({
				redirectTo: '/'
			});
		}
	]);

	App.run(function($rootScope, $route) {
		$rootScope.layoutPartial = function(partialName) {
			return $route.current ? $route.current[partialName] : '';
		};
	});

	App.controllers = angular.module('Inio.controllers', []);
	App.directives = angular.module('Inio.directives', []);

	function bootstrap() {
		Content.init();

		Content.find('filters.sections').slice(0).done(function(items) {
			sections = items;
			angular.bootstrap(document, ['Inio']);

		}, this).fail(function() {

		});
	}

	bootstrap();
})();
(function() {
	'use strict';

	App.controllers.controller('Home', ['$scope',
		function($scope) {
			Content.find('content.carousel').slice(0).done(function(items){
				$scope.safeApply(function() {
					$scope.carousel = items;
				});
			});

			Content.find('content.editors_choice').slice(0).done(function(items) {
				$scope.safeApply(function() {
					$scope.movies = items;
				});
			});
		}
	]);
})();
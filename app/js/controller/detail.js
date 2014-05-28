(function() {
	'use strict';

	App.controllers.controller('Detail', ['$scope', '$routeParams',
		function($scope, $routeParams) {
			var collection;

			collection = Content.find('content.detail');

			collection.load($routeParams.movieId).done(function() {
				collection.at(0).done(function(model) {
					$scope.safeApply(function() {
						$scope.item = model;
					});

				}).fail(function() {
					
				});
			});
		}
	]);
})();
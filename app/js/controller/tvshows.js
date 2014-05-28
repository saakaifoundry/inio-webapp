(function() {
	'use strict';

	App.controllers.controller('Tvshows', ['$scope', '$routeParams',
		function($scope, $routeParams) {
			var collection;

			if($routeParams.serieId){
				collection = Content.find('content.catalog');

				collection.load($routeParams.serieId).done(function(){
					collection.slice(0).done(function(items){

						items.map(function(item){
							item.isEpisode = true;
						});

						$scope.safeApply(function() {
							$scope.movies = items;
						});
					});
				});

			} else {
				Content.find('content.tvshows').slice(0).done(function(items) {
					items.map(function(item){
						item.controller = 'tvshows';
					});

					$scope.safeApply(function() {
						$scope.movies = items;
					});
				});
			}
		}
	]);
})();
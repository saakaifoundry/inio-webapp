(function() {
	'use strict';

	App.controllers.controller('Playback', ['$scope', '$routeParams',
		function($scope, $routeParams) {
			var collection;

			$scope.movieDetailOpen = false;

			$scope.toggleDetail = function(){
				$scope.movieDetailOpen = !$scope.movieDetailOpen;
				console.log('>>', $scope.movieDetailOpen)
			};

			collection = Content.find('content.detail');

			collection.load($routeParams.movieId).done(function() {
				collection.at(0).done(function(model) {
					$scope.safeApply(function() {
						$scope.item = model;
					});

				}).fail(function() {
					
				});
			});

			brightcove.createExperiences();

			window.BCLTemplateReady = function(){
				var player = brightcove.api.getExperience("myExperience");
				var playerAPI = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
				playerAPI.loadVideoByID($scope.item.id);
			}
		}
	]);
})();
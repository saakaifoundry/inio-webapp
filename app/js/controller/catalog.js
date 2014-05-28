(function() {
	'use strict';

	App.controllers.controller('Catalog', ['$scope', '$location', '$routeParams',
		function($scope, $location, $routeParams) {
			var genres = [], genreId, collection;

			if($routeParams && $routeParams.genreId){
				genreId = $routeParams.genreId;
			}

			$scope.sections.forEach(function(model) {
				var item;

				if (model.length) {
					item = {
						title: model.attr('title'),
						href: model.attr('href'),
						active: (false && ! genreId && $location.$$path === '/'+model.attr('href')),
						items: []
					};

					model.forEach(function(submodel) {
						if(!genreId){
							genreId = submodel.id;
						}

						item.items.push({
							id: submodel.id,
							title: submodel.title,
							href: submodel.href,
							active: (submodel.id == genreId)
						});
					});

					genres.push(item);
				}
			});

			collection = Content.find('content.catalog');

			collection.load(genreId).done(function(items) {
				collection.slice(0).done(function(arr){
					$scope.safeApply(function() {
						$scope.movies = arr;
					})
				})
			});

			$scope.safeApply(function() {
				$scope.genres = genres;
			})
		}
	]);
})();
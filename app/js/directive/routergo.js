(function() {
	'use strict';

	App.directives.directive('routerGo', function($location) {
		return function($scope, el, attrs) {
			var path;

			attrs.$observe('routerGo', function(val) {
				path = val;
			});

			el.bind('click', function() {
				$scope.$apply(function() {
					$location.path(path);
				});
			});
		}
	});
})();
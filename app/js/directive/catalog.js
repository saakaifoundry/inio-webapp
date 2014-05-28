(function() {
	'use strict';

	App.directives.directive('inioCatalog', function(){
			return {
				scope: {
					sidebar: '=',
					tvshows: '=',
					items: '=',
					genres: '='
				},
				replace: true, 
				link: function(){

				},
				templateUrl: 'partials/snippet/catalog.html'
			};
		});
})();
(function() {
	'use strict';

	App.directives.directive('inioMenu', function(){
			return {
				scope: {
					items: '='
				},
				replace: false, 
				link: function(){

				},
				template: '<li ng-repeat="item in items"><a href="#/{{item.attr(\'href\')}}">{{item.attr(\'title\')}}</a></li>'
			};
		});
})();
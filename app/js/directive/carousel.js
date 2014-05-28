(function() {
	'use strict';

	App.directives.directive('inioCarousel', function() {
		var width = 1422,
			elRoot, elWrap;

		function moveToPage(page) {
			var tmp;

			elWrap.style['transform'] = 'translate3d(' + (width * -1 * page) + 'px, 0px, 0px)';
			elWrap.style['-webkit-transform'] = 'translate3d(' + (width * -1 * page) + 'px, 0px, 0px)';

			if (tmp = elRoot.querySelector('span.active')) {
				tmp.classList.remove('active');
			}

			elRoot.querySelector('.bullets').querySelector('span:nth-child(' + (page + 1) + ')').classList.add('active');
		}

		return {
			scope: {
				items: '='
			},
			replace: true,
			link: function($scope, el, arrts) {
				elRoot = el[0];
				elWrap = elRoot.querySelector('.carousel-wrap').querySelector('ul');
				$scope.moveToPage = moveToPage;
			},
			templateUrl: 'partials/snippet/carousel.html'
		};
	});
})();
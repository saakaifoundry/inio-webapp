(function() {
	'use strict';

	angular.module('Inio.services', [])
		/*
		.factory('Provider', ['$q',
			function($q) {
				return {
					get: function(id) {
						var deferred = $q.defer(),
							comp;

						comp = Content.find(id);

						if (!comp) {
							throw new Error('Component `' + id + '` not found')
						}

						comp.slice(0).done(function(items) {
							deferred.resolve(items);

						}).fail(function() {
							deferred.reject();
						});


						return deferred.promise;
					}
				};
			}
		]);*/

})();
(function(){
	'use strict';

	angular.module('DIApp', [])
	.controller('DIController', DIController);

	function DIController ($scope, $filter){
		$scope.name = "Ksenia";

		$scope.upper = function(){
           var upCase = $filter('uppercase');
           $scope.name = upCase($scope.name);
		};
	}

})();
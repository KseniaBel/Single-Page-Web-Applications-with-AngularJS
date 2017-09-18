(function(){
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
	function LunchCheckController ($scope){
		$scope.input = "";
		$scope.message = "";

		$scope.displayMessage = function(){
			var messageDisplay = calculateNrOfWords($scope.input);
			$scope.message = messageDisplay;
		};

		function calculateNrOfWords(string){
			var str = string.replace(/[\s,]+/g, ',');
			var arrayOfStrings = str.split(',');
			if(arrayOfStrings == ""){
				return "Please enter data first";
			}
			else if(arrayOfStrings.length <=3){
                return "Enjoy!";
			}
			else {
                return "Too much!";
			}
		}

	}

})();
(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.food = "";
        $scope.results = "";

    
        $scope.determineFoodAmount = function () {
            var foodAmount = determineFoodAmount($scope.food);
            
            $scope.results = foodAmount;
        }
        
        function isEmptyOrSpaces(str){
            return str === null || str.match(/^ *$/) !== null;
        }
        
        function determineFoodAmount(string) {
            if(isEmptyOrSpaces(string)){
                return "Please enter data first"
            }

            var foodEntered = string.split(',');           
            var numberOfResults = foodEntered.length;

            if(numberOfResults <= 3)
            {
                return "Enjoy";
            }
            else
            {
                return "Too much!";
            }          
        }
    
    }
    
    
    })();
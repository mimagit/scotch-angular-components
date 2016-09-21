'use strict'

angular.module('myApp').config(['$locationProvider', '$routeProvider', 
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');    
        
        $routeProvider.
        when('/home', {
            template: '<accordion></<accordion>'
        }).
        otherwise('/home')
    }
]);
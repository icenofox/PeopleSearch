'use strict';

var app = angular.module('searchApp', [
    'ngRoute',
    'searchController',
    'searchService',
    'searchFilter'
]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/search', {
                templateUrl: 'app/partials/search.html',
                controller: 'SearchCtrl',
                controllerAs: 'vm'
            }).
            otherwise({
                redirectTo: '/search'
            });
    }
]);


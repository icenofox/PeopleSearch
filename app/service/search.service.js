'use strict';

/* Services */

var searchService = angular.module('searchService', []);

searchService.service('filterService',['$http', '$q', filterService]);

function filterService ($http, $q) {
    var defferd = $q.defer();
    this.getData = function(){
        return $http.get('data.json').then(function(resp){
            defferd.resolve(resp);
            return defferd.promise;
        },function(resp){
            defferd.reject(resp);
            return defferd.promise;
        })
    }
}
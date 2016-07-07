'use strict';

/* Controllers */

var searchController = angular.module('searchController', []);

searchController.controller('SearchCtrl', ['$scope', '$http', 'filterService', '$filter', searchCtrl]);

function searchCtrl($scope, $http, filterService, $filter) {
    var vm = this;

    vm.peoples = [];
    vm.searchCriteria = "";

    vm.initData = initData;
    vm.removeSearchCriteria = removeSearchCriteria;

    /* Initializing the data*/
    function initData() {
        filterService.getData().then(function (result) {
            if (null != result.data) {
                vm.peoples = result.data.data;
            }
        });
    }

    /*Function will clear the text of input box*/
    function removeSearchCriteria() {
        vm.searchCriteria = "";
    }
}
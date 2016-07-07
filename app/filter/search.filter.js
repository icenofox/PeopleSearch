'use strict';

/* Filters */

angular.module('searchFilter', []).filter('searchFilter', searchFilter);


function searchFilter () {
        return function(input,searchSting) {
            var fiterArr = [];
            var letterMatch = new RegExp(searchSting, 'i');
            angular.forEach(input,function(val,key){
                var item = val;
                if (letterMatch.test(item.firstName.substring(0, item.length))) {
                    fiterArr.push(item);
                }
            })
            return fiterArr;
        };
    }
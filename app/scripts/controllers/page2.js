'use strict';

angular
    .module('exampleApp')
    .component('page2', {
        templateUrl: () => window.accountSettingsBaseDir + 'views/page2.html',
        controller: ['$scope', function ($scope) {
            $scope.title = "Page2 scope";
            $scope.head = "AngularJS APP #1";
        }]
    })

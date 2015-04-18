'use strict';

/**
 * @ngdoc directive
 * @name otherTestApp.directive:slider
 * @description
 * # slider
 */
angular.module('smashFinderApp')
  .directive('slider', function () {
    return {
      //template: '<div></div>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var config = scope.$eval(attrs.slider);
        $(element).attr('value', '1,' + config.to);
        $(element).jRange(config);
      }
    };
  });

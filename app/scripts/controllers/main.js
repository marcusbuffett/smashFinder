'use strict';

/**
 * @ngdoc function
 * @name smashFinderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smashFinderApp
 */
angular.module('smashFinderApp')
.controller('MainCtrl', ['$options', '$characters', '$scope', function ($options, $characters, $scope) {
  var filterCharacters = function() {
    /* jshint validthis:true */
    return this.characters.filter(function(char) {
      var passes = true;
      this.options.allOptions.forEach(function (opt) {
        var charOptValue = char[opt.name];
        if (opt.type === 'multiple') {
          if (opt.curValue === undefined) {
            return;
          }
          if (opt.curValue !== charOptValue) {
            passes = false;
          }
          return;
        }
        if (opt.type === 'range') {
          if (opt.curHigh < charOptValue || opt.curLow > charOptValue) {
            passes = false;
          }
          return;
        }
      });
      return passes;
    }.bind(this));
  }.bind(this);
  this.characters = $characters.characters;
  this.filteredCharacters = this.characters;
  this.options = {};
  this.options.multiple = $options.options.multiple;
  this.options.range = $options.options.range;
  this.options.allOptions = this.options.multiple.concat(this.options.range);
  this.options.range.forEach(function(element) {
    element.callback = filterCharacters;
    element.onstatechange = function(value) {
      var values = value.split(',');
      element.curLow = parseInt(values[0]);
      element.curHigh = parseInt(values[1]);
      console.log('this is being called');
      console.log(filterCharacters());
      this.refilterCharacters();
      $scope.$apply();
    }.bind(this);
  }.bind(this));
  this.refilterCharacters = function () {
    console.log('yeah I\'m here');
    this.filteredCharacters = filterCharacters();
    console.log(this.options.range[0]);
  };
}]);


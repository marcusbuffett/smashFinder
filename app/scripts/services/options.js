'use strict';

/**
 * @ngdoc service
 * @name smashFinderApp.options
 * @description
 * # options
 * Service in the smashFinderApp.
 */
angular.module('smashFinderApp')
.service('$options', function () {
  var max = 48;
  var allOptions = [];
  allOptions.push({
    displayName: 'Projectile',
    name: 'projectile',
    type: 'multiple',
    subOptions: [
      {displayName: 'Yes', value: true},
      {displayName: 'No',  value: false},
      {displayName: 'N/A', value: undefined}
    ],
    curValue: undefined,
  });
  allOptions.push({
    displayName: 'Counter',
    name: 'counter',
    type: 'multiple',
    subOptions: [
      {displayName: 'Yes', value: true},
      {displayName: 'No',  value: false},
      {displayName: 'N/A', value: undefined}
    ],
    curValue: undefined,
  });
  allOptions.push({
    displayName: 'Reflector',
    name: 'reflector',
    type: 'multiple',
    subOptions: [
      {displayName: 'Yes', value: true},
      {displayName: 'No', value: false},
      {displayName: 'N/A', value: undefined},
    ],
    curValue: undefined,
  });
  allOptions.push({
    displayName: 'Air speed',
    name: 'airSpeed',
    type: 'range',
    curLow: 1,
    curHigh: max,
  });
  allOptions.push({
    displayName: 'Walking speed',
    name: 'walkSpeed',
    type: 'range',
    curLow: 1,
    curRange: max-1,
    curHigh: max,
  });
  allOptions.push({
    displayName: 'Sprint speed',
    name: 'sprintSpeed',
    type: 'range',
    curLow: 1,
    curHigh: max,
  });
  allOptions.push({
    displayName: 'Rank',
    name: 'rank',
    type: 'range',
    curLow: 1,
    curHigh: max,
  });
  this.options = {};
  this.options.multiple = allOptions.filter(function (element) { 
    return (element.type === 'multiple');
  });
  this.options.range = allOptions.filter(function (element) { 
    return (element.type === 'range');
  });
  this.options.range.forEach(function(element) {
    element.from = 1;
    element.to = max;
    element.step = 1;
    element.isRange = true;
    element.width = '80%';
    element.callback = null;
  });


});

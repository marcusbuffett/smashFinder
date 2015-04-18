"use strict";angular.module("smashFinderApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("smashFinderApp").controller("MainCtrl",["$options","$characters","$scope",function(a,b,c){var d=function(){return this.characters.filter(function(a){var b=!0;return this.options.allOptions.forEach(function(c){var d=a[c.name];if("multiple"===c.type){if(void 0===c.curValue)return;return void(c.curValue!==d&&(b=!1))}return"range"===c.type?void((c.curHigh<d||c.curLow>d)&&(b=!1)):void 0}),b}.bind(this))}.bind(this);this.characters=b.characters,this.filteredCharacters=this.characters,this.options={},this.options.multiple=a.options.multiple,this.options.range=a.options.range,this.options.allOptions=this.options.multiple.concat(this.options.range),this.options.range.forEach(function(a){a.callback=d,a.onstatechange=function(b){var e=b.split(",");a.curLow=parseInt(e[0]),a.curHigh=parseInt(e[1]),console.log("this is being called"),console.log(d()),this.refilterCharacters(),c.$apply()}.bind(this)}.bind(this)),this.refilterCharacters=function(){console.log("yeah I'm here"),this.filteredCharacters=d(),console.log(this.options.range[0])}}]),angular.module("smashFinderApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("smashFinderApp").service("$options",function(){var a=48,b=[];b.push({displayName:"Projectile",name:"projectile",type:"multiple",subOptions:[{displayName:"Yes",value:!0},{displayName:"No",value:!1},{displayName:"N/A",value:void 0}],curValue:void 0}),b.push({displayName:"Counter",name:"counter",type:"multiple",subOptions:[{displayName:"Yes",value:!0},{displayName:"No",value:!1},{displayName:"N/A",value:void 0}],curValue:void 0}),b.push({displayName:"Reflector",name:"reflector",type:"multiple",subOptions:[{displayName:"Yes",value:!0},{displayName:"No",value:!1},{displayName:"N/A",value:void 0}],curValue:void 0}),b.push({displayName:"Air speed",name:"airSpeed",type:"range",curLow:1,curHigh:a}),b.push({displayName:"Walking speed",name:"walkSpeed",type:"range",curLow:1,curRange:a-1,curHigh:a}),b.push({displayName:"Sprint speed",name:"sprintSpeed",type:"range",curLow:1,curHigh:a}),b.push({displayName:"Rank",name:"rank",type:"range",curLow:1,curHigh:a}),this.options={},this.options.multiple=b.filter(function(a){return"multiple"===a.type}),this.options.range=b.filter(function(a){return"range"===a.type}),this.options.range.forEach(function(b){b.from=1,b.to=a,b.step=1,b.isRange=!0,b.width="80%",b.callback=null})}),angular.module("smashFinderApp").service("$characters",function(){function a(a,b,c,d,e,f,g,h,i){return{name:a,walkSpeed:b,sprintSpeed:c,airSpeed:d,weight:e,rank:f,projectile:g,reflector:h,counter:i,image:null}}this.characters=[],this.characters=[a("Bowser",44,14,25,0,40,!0,!1,!1),a("Bowser Jr.",40,39,13,0,34,!0,!1,!1),a("Captain Falcon",35,2,10,0,7,!1,!1,!1),a("Charizard",19,8,42,0,48,!0,!1,!1),a("Dark Pit",15,20,43,0,25,!0,!0,!1),a("Dedede",34,42,45,0,43,!0,!1,!1),a("Diddy Kong",11,13,40,0,3,!0,!1,!1),a("Donkey Kong",9,18,6,0,47,!1,!1,!1),a("Dr. Mario",37,43,8,0,41,!0,!0,!1),a("Duck Hunt Dog",21,23,14,0,20,!0,!1,!1),a("Falco",10,35,29,0,31,!0,!0,!1),a("Fox",3,4,18,0,13,!0,!0,!1),a("Game and Watch",23,26,15,0,42,!0,!0,!1),a("Ganondorf",47,46,44,0,44,!1,!1,!1),a("Greninja",4,6,3,0,12,!0,!1,!0),a("Ike",41,30,12,0,32,!1,!1,!0),a("Jigglypuff",48,47,4,0,28,!1,!1,!1),a("Kirby",36,31,47,0,29,!1,!1,!1),a("Link",17,41,27,0,11,!0,!1,!1),a("Little Mac",8,3,20,0,37,!1,!1,!0),a("Lucario",33,34,24,0,9,!0,!1,!0),a("Lucina",1,15,19,0,18,!1,!1,!0),a("Luigi",27,32,48,0,22,!0,!1,!1),a("Mario",25,24,8,0,14,!0,!0,!1),a("Marth",2,16,23,0,15,!1,!1,!0),a("Mega Man",28,38,9,0,26,!0,!1,!1),a("Meta Knight",18,9,21,0,38,!1,!1,!1),a("Mewtwo",24,24,24,0,24,!0,!0,!1),a("Ness",42,36,33,0,8,!0,!1,!1),a("Olimar",38,37,46,0,45,!1,!1,!1),a("Pac-Man",31,27,22,0,36,!0,!1,!1),a("Palutena",14,10,41,0,30,!0,!0,!0),a("Peach",43,40,38,0,21,!0,!1,!0),a("Pikachu",12,11,35,0,10,!0,!1,!1),a("Pit",16,21,39,0,24,!0,!0,!1),a("Rob",24,25,16,0,27,!0,!0,!1),a("Robin",39,48,28,0,19,!0,!1,!1),a("Rosalina",29,22,30,0,1,!0,!1,!1),a("Samus",30,29,36,0,35,!0,!1,!1),a("Sheik",5,7,11,0,2,!0,!1,!1),a("Shulk",26,28,17,0,17,!1,!1,!0),a("Sonic",7,1,7,0,5,!1,!1,!1),a("Toon Link",13,17,37,0,16,!0,!1,!1),a("Villager",32,45,34,0,23,!0,!0,!1),a("Wario",46,33,2,0,39,!1,!1,!1),a("Wii Fit Trainer",20,19,32,0,46,!0,!1,!1),a("Yoshi",22,12,1,0,6,!0,!1,!1),a("Zelda",45,44,26,0,33,!0,!0,!1),a("Zerosuit Samus",6,5,5,0,4,!0,!1,!1)],this.characters.forEach(function(a){var b=a.name.toLowerCase();b=b.split(" ").join("_"),b=b.split(".").join(""),b+=".png",a.image=b})}),angular.module("smashFinderApp").directive("slider",function(){return{restrict:"A",link:function(a,b,c){var d=a.$eval(c.slider);$(b).attr("value","1,"+d.to),$(b).jRange(d)}}});
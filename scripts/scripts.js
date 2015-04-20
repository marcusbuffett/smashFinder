"use strict";angular.module("smashFinderApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("smashFinderApp").controller("MainCtrl",["$options","$characters","$scope",function(a,b,c){var d=function(){return this.characters.filter(function(a){var b=!0;return this.options.allOptions.forEach(function(c){var d=a[c.name];if("multiple"===c.type){if(void 0===c.curValue)return;return void(c.curValue!==d&&(b=!1))}return"range"===c.type?void((c.curHigh<d||c.curLow>d)&&(b=!1)):void 0}),b}.bind(this))}.bind(this);this.characters=b.characters,this.filteredCharacters=this.characters,this.options={},this.options.multiple=a.options.multiple,this.options.range=a.options.range,this.options.allOptions=this.options.multiple.concat(this.options.range),this.options.range.forEach(function(a){a.callback=d,a.onstatechange=function(b){var e=b.split(",");a.curLow=parseInt(e[0]),a.curHigh=parseInt(e[1]),console.log("this is being called"),console.log(d()),this.refilterCharacters(),c.$apply()}.bind(this)}.bind(this)),this.refilterCharacters=function(){console.log("yeah I'm here"),this.filteredCharacters=d(),console.log(this.options.range[0])}}]),angular.module("smashFinderApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("smashFinderApp").service("$options",function(){var a=49,b=[];b.push({displayName:"Projectile",name:"projectile",type:"multiple",subOptions:[{displayName:"Yes",value:!0},{displayName:"No",value:!1},{displayName:"N/A",value:void 0}],curValue:void 0}),b.push({displayName:"Counter",name:"counter",type:"multiple",subOptions:[{displayName:"Yes",value:!0},{displayName:"No",value:!1},{displayName:"N/A",value:void 0}],curValue:void 0}),b.push({displayName:"Reflector",name:"reflector",type:"multiple",subOptions:[{displayName:"Yes",value:!0},{displayName:"No",value:!1},{displayName:"N/A",value:void 0}],curValue:void 0}),b.push({displayName:"Air speed",name:"airSpeed",type:"range",curLow:1,curHigh:a}),b.push({displayName:"Walking speed",name:"walkSpeed",type:"range",curLow:1,curRange:a-1,curHigh:a}),b.push({displayName:"Sprint speed",name:"sprintSpeed",type:"range",curLow:1,curHigh:a}),b.push({displayName:"Weight",name:"weight",type:"range",curLow:1,curHigh:a}),b.push({displayName:"Rank",name:"rank",type:"range",curLow:1,curHigh:a}),this.options={},this.options.multiple=b.filter(function(a){return"multiple"===a.type}),this.options.range=b.filter(function(a){return"range"===a.type}),this.options.range.forEach(function(b){b.from=1,b.to=a,b.step=1,b.isRange=!0,b.width="80%",b.callback=null})}),angular.module("smashFinderApp").service("$characters",function(){function a(a,b,c,d,e,f,g,h,i){return{name:a,walkSpeed:b,sprintSpeed:c,airSpeed:d,weight:e,rank:f,projectile:g,reflector:h,counter:i,image:null}}this.characters=[],this.characters=[a("Bowser",44,14,25,1,28,!0,!1,!1),a("Bowser Jr.",40,39,13,4,29,!0,!1,!1),a("Captain Falcon",35,2,10,11,11,!1,!1,!1),a("Charizard",19,8,42,5,46,!0,!1,!1),a("Dark Pit",15,20,43,21,20,!0,!0,!1),a("Dedede",34,42,45,3,23,!0,!1,!1),a("Diddy Kong",11,13,40,29,1,!0,!1,!1),a("Donkey Kong",9,18,6,2,39,!1,!1,!1),a("Dr. Mario",37,43,8,17,35,!0,!0,!1),a("Duck Hunt Dog",21,23,14,31,19,!0,!1,!1),a("Falco",10,35,29,38,38,!0,!0,!1),a("Fox",3,4,18,42,9,!0,!0,!1),a("Game and Watch",23,26,15,47,33,!0,!0,!1),a("Ganondorf",47,46,44,6,43,!1,!1,!1),a("Greninja",4,6,3,27,22,!0,!1,!0),a("Ike",41,30,12,8,42,!1,!1,!0),a("Jigglypuff",48,47,4,49,36,!1,!1,!1),a("Kirby",36,31,47,46,40,!0,!1,!1),a("Link",17,41,27,11,34,!0,!1,!1),a("Little Mac",8,3,20,39,30,!1,!1,!0),a("Lucario",33,34,24,16,21,!0,!1,!0),a("Lucina",1,15,19,33,48,!1,!1,!0),a("Luigi",27,32,48,19,14,!0,!1,!1),a("Mario",25,24,8,18,12,!0,!0,!1),a("Marth",2,16,23,33,47,!1,!1,!0),a("Mega Man",28,38,9,14,16,!0,!1,!1),a("Meta Knight",18,9,21,41,26,!1,!1,!1),a("Mewtwo",49,49,49,48,49,!0,!0,!1),a("Ness",42,36,33,27,10,!0,!0,!1),a("Olimar",38,37,46,42,25,!0,!1,!1),a("Pac-Man",31,27,22,24,16,!0,!1,!1),a("Palutena",14,10,41,32,32,!0,!0,!0),a("Peach",43,40,38,35,27,!0,!1,!0),a("Pikachu",12,11,35,43,13,!0,!1,!1),a("Pit",16,21,39,22,18,!0,!0,!1),a("Rob",24,25,16,10,15,!0,!0,!1),a("Robin",39,48,28,25,37,!0,!1,!1),a("Rosalina",29,22,30,45,5,!0,!1,!1),a("Samus",30,29,36,7,44,!0,!1,!1),a("Sheik",5,7,11,37,2,!0,!1,!1),a("Shulk",26,28,17,15,31,!1,!1,!0),a("Sonic",7,1,7,26,4,!1,!1,!1),a("Toon Link",13,17,37,30,24,!0,!1,!1),a("Villager",32,45,34,20,23,!0,!0,!1),a("Wario",46,33,2,9,6,!0,!1,!1),a("Wii Fit Trainer",20,19,32,23,41,!0,!1,!1),a("Yoshi",22,12,1,13,3,!0,!1,!1),a("Zelda",45,44,26,37,45,!0,!0,!1),a("Zerosuit Samus",6,5,5,40,8,!0,!1,!1)],this.characters.forEach(function(a){var b=a.name.toLowerCase();b=b.split(" ").join("_"),b=b.split(".").join(""),b+=".png",a.image=b}),this.walkSpeedRankings=["Lucina","Marth","Fox","Greninja","Sheik","Zero Suit Samus","Sonic","Little Mac","DK","Falco","Diddy Kong","Pikachu","Toon Link","Palutena","Dark Pit","Pit","Link","Meta Knight","Charizard","Wii Fit Trainer","Duck Hunt Dog","Yoshi","ROB","Game and Watch","Mario","Shulk","Rosalina","Luigi","Mega Man","Samus","Villager","Pac","Lucario","Dedede","Captain Falcon","Kirby","Dr. Mario","Olimar","Robin","Bowser Jr.","Ike","Peach","Ness","Bowser","Zelda","Wario","Ganondorf","Jigglypuff"]}),angular.module("smashFinderApp").directive("slider",function(){return{restrict:"A",link:function(a,b,c){var d=a.$eval(c.slider);$(b).attr("value","1,"+d.to),$(b).jRange(d)}}});
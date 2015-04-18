'use strict';

/**
 * @ngdoc service
 * @name smashFinderApp.characters
 * @description
 * # characters
 * Service in the smashFinderApp.
 */
angular.module('smashFinderApp')
  .service('$characters', function () {
    this.characters = [];
    function character(name, wSpeed, sSpeed, aSpeed, weight, rank, proj, refl, counter)
    {
      return {
        name: name,
        walkSpeed: wSpeed,
        sprintSpeed: sSpeed,
        airSpeed: aSpeed,
        weight: weight,
        rank: rank,
        projectile: proj,
        reflector: refl,
        counter: counter,
        image: null,
      };
    }
    this.characters = [
      //character('name'          , w  , s  , a  , w , r  , proj  , refl   , counter) ,
      character('Bowser'          , 44 , 14 , 25 , 0 , 40 , true  , false , false) ,
      character('Bowser Jr.'      , 40 , 39 , 13 , 0 , 34 , true  , false , false) ,
      character('Captain Falcon'  , 35 , 2  , 0 , 10 , 7 , false , false , false) ,
      character('Charizard'       , 19 , 8  , 0 , 42 , 48 , true  , false , false) ,
      character('Dark Pit'        , 15 , 20 , 0 , 43 , 25 , true  , true  , false) ,
      character('Dedede'          , 34 , 42 , 0 , 45 , 43 , true  , false , false) ,
      character('Diddy Kong'      , 11 , 13 , 0 , 40 , 3 , true  , false , false) ,
      character('Donkey Kong'     , 9  , 18 , 0 , 6  , 47 , false , false , false) ,
      character('Dr. Mario'       , 37 , 43 , 0 , 8  , 41 , true  , true  , false) ,
      character('Duck Hunt Dog'   , 21 , 23 , 0 , 14 , 20 , true  , false , false) ,
      character('Falco'           , 10 , 35 , 0 , 29 , 31 , true  , true  , false) ,
      character('Fox'             , 3  , 4  , 0 , 18 , 13 , true  , true  , false) ,
      character('Game and Watch'  , 23 , 26 , 0 , 15 , 42 , true  , true  , false) ,
      character('Ganondorf'       , 47 , 46 , 0 , 44 , 44 , false , false , false) ,
      character('Greninja'        , 4  , 6  , 0 , 3  , 12 , true  , false , true ) ,
      character('Ike'             , 41 , 30 , 0 , 12 , 32 , false , false , true ) ,
      character('Jigglypuff'      , 48 , 47 , 0 , 4  , 28 , false , false , false) ,
      character('Kirby'           , 36 , 31 , 0 , 47 , 29 , false , false , false) ,
      character('Link'            , 17 , 41 , 0 , 27 , 11 , true  , false , false) ,
      character('Little Mac'      , 8  , 3  , 0 , 20 , 37 , false , false , true ) ,
      character('Lucario'         , 33 , 34 , 0 , 24 , 9 , true  , false , true ) ,
      character('Lucina'          , 1  , 15 , 0 , 19 , 18 , false , false , true ) ,
      character('Luigi'           , 27 , 32 , 0 , 48 , 22 , true  , false , false) ,
      character('Mario'           , 25 , 24 , 0 , 8  , 14 , true  , true  , false) ,
      character('Marth'           , 2  , 16 , 0 , 23 , 15 , false , false , true ) ,
      character('Mega Man'        , 28 , 38 , 0 , 9  , 26 , true  , false , false) ,
      character('Meta Knight'     , 18 , 9  , 0 , 21 , 38 , false , false , false) ,
      character('Mewtwo'          , 24 , 24 , 0 , 24 , 24 , true , true , false) ,
      character('Ness'            , 42 , 36 , 0 , 33 , 8 , true  , false , false) ,
      character('Olimar'          , 38 , 37 , 0 , 46 , 45 , false , false , false) ,
      character('Pac-Man'         , 31 , 27 , 0 , 22 , 36 , true  , false , false) ,
      character('Palutena'        , 14 , 10 , 0 , 41 , 30 , true  , true  , true ) ,
      character('Peach'           , 43 , 40 , 0 , 38 , 21 , true  , false , true ) ,
      character('Pikachu'         , 12 , 11 , 0 , 35 , 10 , true  , false , false) ,
      character('Pit'             , 16 , 21 , 0 , 39 , 24 , true  , true  , false) ,
      character('Rob'             , 24 , 25 , 0 , 16 , 27 , true  , true  , false) ,
      character('Robin'           , 39 , 48 , 0 , 28 , 19 , true  , false , false) ,
      character('Rosalina'        , 29 , 22 , 0 , 30 , 1 , true  , false , false) ,
      character('Samus'           , 30 , 29 , 0 , 36 , 35 , true  , false , false) ,
      character('Sheik'           , 5  , 7  , 0 , 11 , 2 , true  , false , false) ,
      character('Shulk'           , 26 , 28 , 0 , 17 , 17 , false , false , true ) ,
      character('Sonic'           , 7  , 1  , 0 , 7  , 5 , false , false , false) ,
      character('Toon Link'       , 13 , 17 , 0 , 37 , 16 , true  , false , false) ,
      character('Villager'        , 32 , 45 , 0 , 34 , 23 , true  , true  , false) ,
      character('Wario'           , 46 , 33 , 0 , 2  , 39 , false , false , false) ,
      character('Wii Fit Trainer' , 20 , 19 , 0 , 32 , 46 , true  , false , false) ,
      character('Yoshi'           , 22 , 12 , 0 , 1  , 6 , true  , false , false) ,
      character('Zelda'           , 45 , 44 , 0 , 26 , 33 , true  , true  , false) ,
      character('Zerosuit Samus'  , 6  , 5  , 0 , 5  , 4 , true  , false , false) ,
    ];
    this.characters.forEach(function (char) {
      var imgName = char.name.toLowerCase();
      imgName = imgName.split(' ').join('_');
      imgName = imgName.split('.').join('');
      imgName =  imgName + '.png';
      char.image = imgName;
    });

  });

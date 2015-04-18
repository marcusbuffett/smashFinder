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
      character('Captain Falcon'  , 35 , 2  , 10 , 0 , 7 , false , false , false) ,
      character('Charizard'       , 19 , 8  , 42 , 0 , 48 , true  , false , false) ,
      character('Dark Pit'        , 15 , 20 , 43 , 0 , 25 , true  , true  , false) ,
      character('Dedede'          , 34 , 42 , 45 , 0 , 43 , true  , false , false) ,
      character('Diddy Kong'      , 11 , 13 , 40 , 0 , 3 , true  , false , false) ,
      character('Donkey Kong'     , 9  , 18 , 6  , 0 , 47 , false , false , false) ,
      character('Dr. Mario'       , 37 , 43 , 8  , 0 , 41 , true  , true  , false) ,
      character('Duck Hunt Dog'   , 21 , 23 , 14 , 0 , 20 , true  , false , false) ,
      character('Falco'           , 10 , 35 , 29 , 0 , 31 , true  , true  , false) ,
      character('Fox'             , 3  , 4  , 18 , 0 , 13 , true  , true  , false) ,
      character('Game and Watch'  , 23 , 26 , 15 , 0 , 42 , true  , true  , false) ,
      character('Ganondorf'       , 47 , 46 , 44 , 0 , 44 , false , false , false) ,
      character('Greninja'        , 4  , 6  , 3  , 0 , 12 , true  , false , true ) ,
      character('Ike'             , 41 , 30 , 12 , 0 , 32 , false , false , true ) ,
      character('Jigglypuff'      , 48 , 47 , 4  , 0 , 28 , false , false , false) ,
      character('Kirby'           , 36 , 31 , 47 , 0 , 29 , false , false , false) ,
      character('Link'            , 17 , 41 , 27 , 0 , 11 , true  , false , false) ,
      character('Little Mac'      , 8  , 3  , 20 , 0 , 37 , false , false , true ) ,
      character('Lucario'         , 33 , 34 , 24 , 0 , 9 , true  , false , true ) ,
      character('Lucina'          , 1  , 15 , 19 , 0 , 18 , false , false , true ) ,
      character('Luigi'           , 27 , 32 , 48 , 0 , 22 , true  , false , false) ,
      character('Mario'           , 25 , 24 , 8  , 0 , 14 , true  , true  , false) ,
      character('Marth'           , 2  , 16 , 23 , 0 , 15 , false , false , true ) ,
      character('Mega Man'        , 28 , 38 , 9  , 0 , 26 , true  , false , false) ,
      character('Meta Knight'     , 18 , 9  , 21 , 0 , 38 , false , false , false) ,
      character('Mewtwo'          , 24 , 24 , 24 , 0 , 24 , true , true , false) ,
      character('Ness'            , 42 , 36 , 33 , 0 , 8 , true  , false , false) ,
      character('Olimar'          , 38 , 37 , 46 , 0 , 45 , false , false , false) ,
      character('Pac-Man'         , 31 , 27 , 22 , 0 , 36 , true  , false , false) ,
      character('Palutena'        , 14 , 10 , 41 , 0 , 30 , true  , true  , true ) ,
      character('Peach'           , 43 , 40 , 38 , 0 , 21 , true  , false , true ) ,
      character('Pikachu'         , 12 , 11 , 35 , 0 , 10 , true  , false , false) ,
      character('Pit'             , 16 , 21 , 39 , 0 , 24 , true  , true  , false) ,
      character('Rob'             , 24 , 25 , 16 , 0 , 27 , true  , true  , false) ,
      character('Robin'           , 39 , 48 , 28 , 0 , 19 , true  , false , false) ,
      character('Rosalina'        , 29 , 22 , 30 , 0 , 1 , true  , false , false) ,
      character('Samus'           , 30 , 29 , 36 , 0 , 35 , true  , false , false) ,
      character('Sheik'           , 5  , 7  , 11 , 0 , 2 , true  , false , false) ,
      character('Shulk'           , 26 , 28 , 17 , 0 , 17 , false , false , true ) ,
      character('Sonic'           , 7  , 1  , 7  , 0 , 5 , false , false , false) ,
      character('Toon Link'       , 13 , 17 , 37 , 0 , 16 , true  , false , false) ,
      character('Villager'        , 32 , 45 , 34 , 0 , 23 , true  , true  , false) ,
      character('Wario'           , 46 , 33 , 2  , 0 , 39 , false , false , false) ,
      character('Wii Fit Trainer' , 20 , 19 , 32 , 0 , 46 , true  , false , false) ,
      character('Yoshi'           , 22 , 12 , 1  , 0 , 6 , true  , false , false) ,
      character('Zelda'           , 45 , 44 , 26 , 0 , 33 , true  , true  , false) ,
      character('Zerosuit Samus'  , 6  , 5  , 5  , 0 , 4 , true  , false , false) ,
    ];
    this.characters.forEach(function (char) {
      var imgName = char.name.toLowerCase();
      imgName = imgName.split(' ').join('_');
      imgName = imgName.split('.').join('');
      imgName =  imgName + '.png';
      char.image = imgName;
    });

  });

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
    function character(name, wSpeed, sSpeed, aSpeed, rank, proj, refl, counter)
    {
      return {
        name: name,
        walkSpeed: wSpeed,
        sprintSpeed : sSpeed,
        airSpeed : aSpeed,
        rank : rank,
        projectile : proj,
        reflector : refl,
        counter: counter,
        image : null,
      };
    }
    this.characters = [
      //character('name'          , w  , s  , a , r    , proj  , refl   , counter) ,
      character('Bowser'          , 44 , 14 , 25 , 40 , true  , false , false) ,
      character('Bowser Jr.'      , 40 , 39 , 13 , 34 , true  , false , false) ,
      character('Captain Falcon'  , 35 , 2  , 10 , 7 , false , false , false) ,
      character('Charizard'       , 19 , 8  , 42 , 48 , true  , false , false) ,
      character('Dark Pit'        , 15 , 20 , 43 , 25 , true  , true  , false) ,
      character('Dedede'          , 34 , 42 , 45 , 43 , true  , false , false) ,
      character('Diddy Kong'      , 11 , 13 , 40 , 3 , true  , false , false) ,
      character('Donkey Kong'     , 9  , 18 , 6  , 47 , false , false , false) ,
      character('Dr. Mario'       , 37 , 43 , 8  , 41 , true  , true  , false) ,
      character('Duck Hunt Dog'   , 21 , 23 , 14 , 20 , true  , false , false) ,
      character('Falco'           , 10 , 35 , 29 , 31 , true  , true  , false) ,
      character('Fox'             , 3  , 4  , 18 , 13 , true  , true  , false) ,
      character('Game and Watch'  , 23 , 26 , 15 , 42 , true  , true  , false) ,
      character('Ganondorf'       , 47 , 46 , 44 , 44 , false , false , false) ,
      character('Greninja'        , 4  , 6  , 3  , 12 , true  , false , true ) ,
      character('Ike'             , 41 , 30 , 12 , 32 , false , false , true ) ,
      character('Jigglypuff'      , 48 , 47 , 4  , 28 , false , false , false) ,
      character('Kirby'           , 36 , 31 , 47 , 29 , false , false , false) ,
      character('Link'            , 17 , 41 , 27 , 11 , true  , false , false) ,
      character('Little Mac'      , 8  , 3  , 20 , 37 , false , false , true ) ,
      character('Lucario'         , 33 , 34 , 24 , 9 , true  , false , true ) ,
      character('Lucina'          , 1  , 15 , 19 , 18 , false , false , true ) ,
      character('Luigi'           , 27 , 32 , 48 , 22 , true  , false , false) ,
      character('Mario'           , 25 , 24 , 8  , 14 , true  , true  , false) ,
      character('Marth'           , 2  , 16 , 23 , 15 , false , false , true ) ,
      character('Mega Man'        , 28 , 38 , 9  , 26 , true  , false , false) ,
      character('Meta Knight'     , 18 , 9  , 21 , 38 , false , false , false) ,
      character('Mewtwo'          , 24 , 24  , 24 , 24 , true , true , false) ,
      character('Ness'            , 42 , 36 , 33 , 8 , true  , false , false) ,
      character('Olimar'          , 38 , 37 , 46 , 45 , false , false , false) ,
      character('Pac-Man'         , 31 , 27 , 22 , 36 , true  , false , false) ,
      character('Palutena'        , 14 , 10 , 41 , 30 , true  , true  , true ) ,
      character('Peach'           , 43 , 40 , 38 , 21 , true  , false , true ) ,
      character('Pikachu'         , 12 , 11 , 35 , 10 , true  , false , false) ,
      character('Pit'             , 16 , 21 , 39 , 24 , true  , true  , false) ,
      character('Rob'             , 24 , 25 , 16 , 27 , true  , true  , false) ,
      character('Robin'           , 39 , 48 , 28 , 19 , true  , false , false) ,
      character('Rosalina'        , 29 , 22 , 30 , 1 , true  , false , false) ,
      character('Samus'           , 30 , 29 , 36 , 35 , true  , false , false) ,
      character('Sheik'           , 5  , 7  , 11 , 2 , true  , false , false) ,
      character('Shulk'           , 26 , 28 , 17 , 17 , false , false , true ) ,
      character('Sonic'           , 7  , 1  , 7  , 5 , false , false , false) ,
      character('Toon Link'       , 13 , 17 , 37 , 16 , true  , false , false) ,
      character('Villager'        , 32 , 45 , 34 , 23 , true  , true  , false) ,
      character('Wario'           , 46 , 33 , 2  , 39 , false , false , false) ,
      character('Wii Fit Trainer' , 20 , 19 , 32 , 46 , true  , false , false) ,
      character('Yoshi'           , 22 , 12 , 1  , 6 , true  , false , false) ,
      character('Zelda'           , 45 , 44 , 26 , 33 , true  , true  , false) ,
      character('Zerosuit Samus'  , 6  , 5  , 5  , 4 , true  , false , false) ,
    ];
    this.characters.forEach(function (char) {
      var imgName = char.name.toLowerCase();
      imgName = imgName.split(' ').join('_');
      imgName = imgName.split('.').join('');
      imgName =  imgName + '.png';
      char.image = imgName;
    });

  });

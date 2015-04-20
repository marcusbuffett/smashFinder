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
      //character('name'          , w  , s  , a  , w  , r  , proj  , refl  , counter) ,
      character('Bowser'          , 44 , 14 , 25 , 1  , 28 , true  , false , false)   ,
      character('Bowser Jr.'      , 40 , 39 , 13 , 4  , 29 , true  , false , false)   ,
      character('Captain Falcon'  , 35 , 2  , 10 , 11 , 11  , false , false , false)   ,
      character('Charizard'       , 19 , 8  , 42 , 5  , 46 , true  , false , false)   ,
      character('Dark Pit'        , 15 , 20 , 43 , 21 , 20 , true  , true  , false)   ,
      character('Dedede'          , 34 , 42 , 45 , 3  , 23 , true  , false , false)   ,
      character('Diddy Kong'      , 11 , 13 , 40 , 29 , 1  , true  , false , false)   ,
      character('Donkey Kong'     , 9  , 18 , 6  , 2  , 39 , false , false , false)   ,
      character('Dr. Mario'       , 37 , 43 , 8  , 17 , 35 , true  , true  , false)   ,
      character('Duck Hunt Dog'   , 21 , 23 , 14 , 31 , 19 , true  , false , false)   ,
      character('Falco'           , 10 , 35 , 29 , 38 , 38 , true  , true  , false)   ,
      character('Fox'             , 3  , 4  , 18 , 42 , 9 , true  , true  , false)   ,
      character('Game and Watch'  , 23 , 26 , 15 , 47 , 33 , true  , true  , false)   ,
      character('Ganondorf'       , 47 , 46 , 44 , 6  , 43 , false , false , false)   ,
      character('Greninja'        , 4  , 6  , 3  , 27 , 22 , true  , false , true )   ,
      character('Ike'             , 41 , 30 , 12 , 8  , 42 , false , false , true )   ,
      character('Jigglypuff'      , 48 , 47 , 4  , 49 , 36 , false , false , false)   ,
      character('Kirby'           , 36 , 31 , 47 , 46 , 40 , false , false , false)   ,
      character('Link'            , 17 , 41 , 27 , 11 , 34 , true  , false , false)   ,
      character('Little Mac'      , 8  , 3  , 20 , 39 , 30 , false , false , true )   ,
      character('Lucario'         , 33 , 34 , 24 , 16 , 21  , true  , false , true )   ,
      character('Lucina'          , 1  , 15 , 19 , 33 , 48 , false , false , true )   ,
      character('Luigi'           , 27 , 32 , 48 , 19 , 14 , true  , false , false)   ,
      character('Mario'           , 25 , 24 , 8  , 18 , 12 , true  , true  , false)   ,
      character('Marth'           , 2  , 16 , 23 , 33 , 47 , false , false , true )   ,
      character('Mega Man'        , 28 , 38 , 9  , 14 , 16 , true  , false , false)   ,
      character('Meta Knight'     , 18 , 9  , 21 , 41 , 26 , false , false , false)   ,
      character('Mewtwo'          , 49 , 49 , 49 , 48 , 49 , true  , true  , false)   ,
      character('Ness'            , 42 , 36 , 33 , 27 , 10  , true  , true  , false)   ,
      character('Olimar'          , 38 , 37 , 46 , 42 , 25 , false , false , false)   ,
      character('Pac-Man'         , 31 , 27 , 22 , 24 , 16 , true  , false , false)   ,
      character('Palutena'        , 14 , 10 , 41 , 32 , 32 , true  , true  , true )   ,
      character('Peach'           , 43 , 40 , 38 , 35 , 27 , true  , false , true )   ,
      character('Pikachu'         , 12 , 11 , 35 , 43 , 13 , true  , false , false)   ,
      character('Pit'             , 16 , 21 , 39 , 22 , 18 , true  , true  , false)   ,
      character('Rob'             , 24 , 25 , 16 , 10 , 15 , true  , true  , false)   ,
      character('Robin'           , 39 , 48 , 28 , 25 , 37 , true  , false , false)   ,
      character('Rosalina'        , 29 , 22 , 30 , 45 , 5  , true  , false , false)   ,
      character('Samus'           , 30 , 29 , 36 , 7  , 44 , true  , false , false)   ,
      character('Sheik'           , 5  , 7  , 11 , 37 , 2  , true  , false , false)   ,
      character('Shulk'           , 26 , 28 , 17 , 15 , 31 , false , false , true )   ,
      character('Sonic'           , 7  , 1  , 7  , 26 , 4  , false , false , false)   ,
      character('Toon Link'       , 13 , 17 , 37 , 30 , 24 , true  , false , false)   ,
      character('Villager'        , 32 , 45 , 34 , 20 , 23 , true  , true  , false)   ,
      character('Wario'           , 46 , 33 , 2  , 9  , 6 , true  , false , false)   ,
      character('Wii Fit Trainer' , 20 , 19 , 32 , 23 , 41 , true  , false , false)   ,
      character('Yoshi'           , 22 , 12 , 1  , 13 , 3  , true  , false , false)   ,
      character('Zelda'           , 45 , 44 , 26 , 37 , 45 , true  , true  , false)   ,
      character('Zerosuit Samus'  , 6  , 5  , 5  , 40 , 8  , true  , false , false)   ,
    ];
    this.characters.forEach(function (char) {
      var imgName = char.name.toLowerCase();
      imgName = imgName.split(' ').join('_');
      imgName = imgName.split('.').join('');
      imgName =  imgName + '.png';
      char.image = imgName;
    });
    this.walkSpeedRankings = [
      'Lucina',
      'Marth',
      'Fox',
      'Greninja',
      'Sheik',
      'Zero Suit Samus',
      'Sonic',
      'Little Mac',
      'DK',
      'Falco',
      'Diddy Kong',
      'Pikachu',
      'Toon Link',
      'Palutena',
      'Dark Pit',
      'Pit',
      'Link',
      'Meta Knight',
      'Charizard',
      'Wii Fit Trainer',
      'Duck Hunt Dog',
      'Yoshi',
      'ROB',
      'Game and Watch',
      'Mario',
      'Shulk',
      'Rosalina',
      'Luigi',
      'Mega Man',
      'Samus',
      'Villager',
      'Pac',
      'Lucario',
      'Dedede',
      'Captain Falcon',
      'Kirby',
      'Dr. Mario',
      'Olimar',
      'Robin',
      'Bowser Jr.',
      'Ike',
      'Peach',
      'Ness',
      'Bowser',
      'Zelda',
      'Wario',
      'Ganondorf',
      'Jigglypuff'
      ];

  });

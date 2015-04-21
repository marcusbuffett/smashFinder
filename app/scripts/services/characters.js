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
    function character(name, sSpeed, proj, refl, counter)
    {
      return {
        name: name,
        walkSpeed: 0,
        sprintSpeed: sSpeed,
        airSpeed: 0,
        weight: 0,
        fallSpeed: 0,
        rank: 0,
        projectile: proj,
        reflector: refl,
        counter: counter,
        image: null,
      };
    }
    this.characters = [
      //character('name'          s     proj  , refl  , counter) ,
      character('Bowser'          , 14 ,  true  , false , false)   ,
      character('Bowser Jr.'      , 39 ,  true  , false , false)   ,
      character('Captain Falcon'  , 2  ,  false , false , false)   ,
      character('Charizard'       , 8  ,  true  , false , false)   ,
      character('Dark Pit'        , 20 ,  true  , true  , false)   ,
      character('Dedede'          , 42 ,  true  , false , false)   ,
      character('Diddy Kong'      , 13 ,  true  , false , false)   ,
      character('Donkey Kong'     , 18 ,  false , false , false)   ,
      character('Dr. Mario'       , 43 ,  true  , true  , false)   ,
      character('Duck Hunt Dog'   , 23 ,  true  , false , false)   ,
      character('Falco'           , 35 ,  true  , true  , false)   ,
      character('Fox'             , 4  ,  true  , true  , false)   ,
      character('Game and Watch'  , 26 ,  true  , true  , false)   ,
      character('Ganondorf'       , 46 ,  false , false , false)   ,
      character('Greninja'        , 6  ,  true  , false , true )   ,
      character('Ike'             , 30 ,  false , false , true )   ,
      character('Jigglypuff'      , 47 ,  false , false , false)   ,
      character('Kirby'           , 31 ,   true , false , false)   ,
      character('Link'            , 41 ,  true  , false , false)   ,
      character('Little Mac'      , 3  ,  false , false , true )   ,
      character('Lucario'         , 34 ,  true  , false , true )   ,
      character('Lucina'          , 15 ,  false , false , true )   ,
      character('Luigi'           , 32 ,  true  , false , false)   ,
      character('Mario'           , 24 ,  true  , true  , false)   ,
      character('Marth'           , 16 ,  false , false , true )   ,
      character('Mega Man'        , 38 ,  true  , false , false)   ,
      character('Meta Knight'     , 9  ,  false , false , false)   ,
      character('Mewtwo'          , 49 ,  true  , true  , false)   ,
      character('Ness'            , 36 ,  true  , true  , false)   ,
      character('Olimar'          , 37 ,   true , false , false)   ,
      character('Pac-Man'         , 27 ,  true  , false , false)   ,
      character('Palutena'        , 10 ,  true  , true  , true )   ,
      character('Peach'           , 40 ,  true  , false , true )   ,
      character('Pikachu'         , 11 ,  true  , false , false)   ,
      character('Pit'             , 21 ,  true  , true  , false)   ,
      character('Rob'             , 25 ,  true  , true  , false)   ,
      character('Robin'           , 48 ,  true  , false , false)   ,
      character('Rosalina'        , 22 ,  true  , false , false)   ,
      character('Samus'           , 29 ,  true  , false , false)   ,
      character('Sheik'           , 7  ,  true  , false , false)   ,
      character('Shulk'           , 28 ,  false , false , true )   ,
      character('Sonic'           , 1  ,   true , false , false)   ,
      character('Toon Link'       , 17 ,  true  , false , false)   ,
      character('Villager'        , 45 ,  true  , true  , false)   ,
      character('Wario'           , 33 ,  true  , false , false)   ,
      character('Wii Fit Trainer' , 19 ,  true  , false , false)   ,
      character('Yoshi'           , 12 ,  true  , false , false)   ,
      character('Zelda'           , 44 ,  true  , true  , false)   ,
      character('Zerosuit Samus'  , 5  ,  true  , false , false)   ,
    ];
    this.characters.forEach(function (char) {
      var imgName = char.name.toLowerCase();
      imgName = imgName.split(' ').join('_');
      imgName = imgName.split('.').join('');
      imgName =  imgName + '.png';
      char.image = imgName;
    });

    var walkSpeedRankings = [
      'Lucina',
      'Marth',
      'Fox',
      'Greninja',
      'Sheik',
      'Zerosuit Samus',
      'Sonic',
      'Little Mac',
      'Donkey Kong',
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
      'Rob',
      'Game and Watch',
      'Mario',
      'Shulk',
      'Rosalina',
      'Luigi',
      'Mega Man',
      'Samus',
      'Villager',
      'Pac-Man',
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
      'Jigglypuff',
      'Mewtwo',
    ];

    var airSpeedRankings = [
      'Yoshi',
      'Jigglypuff',
      'Wario',
      'Zerosuit Samus',
      'Greninja',
      'Donkey Kong',
      'Dr. Mario',
      'Mario',
      'Sonic',
      'Game and Watch',
      'Captain Falcon',
      'Duck Hunt Dog',
      'Mega Man',
      'Sheik',
      'Bowser Jr.',
      'Ike',
      'Rob',
      'Shulk',
      'Pac-Man',
      'Zelda',
      'Lucina',
      'Marth',
      'Lucario',
      'Little Mac',
      'Robin',
      'Rosalina',
      'Meta Knight',
      'Bowser',
      'Wii Fit Trainer',
      'Fox',
      'Ness',
      'Peach',
      'Samus',
      'Toon Link',
      'Villager',
      'Pikachu',
      'Palutena',
      'Falco',
      'Dark Pit',
      'Pit',
      'Diddy Kong',
      'Link',
      'Charizard',
      'Olimar',
      'Kirby',
      'Ganondorf',
      'Luigi',
      'Dedede',
      'Mewtwo',
    ];

    var weightRankings = [
      'Bowser',
      'Donkey Kong',
      'Dedede',
      'Charizard',
      'Ganondorf',
      'Bowser Jr.',
      'Samus',
      'Ike',
      'Wario',
      'Rob',
      'Captain Falcon',
      'Link',
      'Yoshi',
      'Shulk',
      'Mega Man',
      'Lucario',
      'Dr. Mario',
      'Mario',
      'Villager',
      'Luigi',
      'Wii Fit Trainer',
      'Dark Pit',
      'Pit',
      'Robin',
      'Sonic',
      'Pac-Man',
      'Greninja',
      'Ness',
      'Toon Link',
      'Diddy Kong',
      'Palutena',
      'Duck Hunt Dog',
      'Lucina',
      'Marth',
      'Peach',
      'Zelda',
      'Sheik',
      'Little Mac',
      'Falco',
      'Zerosuit Samus',
      'Meta Knight',
      'Fox',
      'Olimar',
      'Pikachu',
      'Rosalina',
      'Kirby',
      'Game and Watch',
      'Mewtwo',
      'Jigglypuff',
    ];

    var fallSpeedRankings = [
      'Fox',
      'Dedede',
      'Greninja',
      'Captain Falcon',
      'Falco',
      'Sheik',
      'Diddy Kong',
      'Mega Man',
      'Little Mac',
      'Zerosuit Samus',
      'Meta Knight',
      'Ganondorf',
      'Ike',
      'Donkey Kong',
      'Link',
      'Bowser Jr.',
      'Wario',
      'Duck Hunt Dog',
      'Rob',
      'Lucina',
      'Marth',
      'Pikachu',
      'Lucario',
      'Robin',
      'Shulk',
      'Mario',
      'Dr. Mario',
      'Dark Pit',
      'Pit',
      'Sonic',
      'Palutena',
      'Charizard',
      'Bowser',
      'Pac-Man',
      'Zelda',
      'Olimar',
      'Villager',
      'Ness',
      'Wii Fit Trainer',
      'Yoshi',
      'Toon Link',
      'Samus',
      'Game and Watch',
      'Luigi',
      'Kirby',
      'Rosalina',
      'Peach',
      'Jigglypuff',
      'Mewtwo',
    ];

    var tierList = [
      'Diddy Kong',
      'Sheik',
      'Yoshi',
      'Sonic',
      'Rosalina',
      'Wario',
      'Villager',
      'Zerosuit Samus',
      'Fox',
      'Ness',
      'Captain Falcon',
      'Mario',
      'Pikachu',
      'Luigi',
      'Rob',
      'Mega Man',
      'Pac-Man',
      'Pit',
      'Duck Hunt Dog',
      'Pit',
      'Lucario',
      'Greninja',
      'Dedede',
      'Toon Link',
      'Olimar',
      'Meta Knight',
      'Peach',
      'Bowser',
      'Bowser Jr.',
      'Little Mac',
      'Shulk',
      'Palutena',
      'Game and Watch',
      'Link',
      'Dr. Mario',
      'Jigglypuff',
      'Robin',
      'Falco',
      'Donkey Kong',
      'Kirby',
      'Wii Fit Trainer',
      'Ike',
      'Ganondorf',
      'Samus',
      'Zelda',
      'Charizard',
      'Marth',
      'Lucina',
      'Mewtwo',
    ];

    function characterByName(characters, name) {
      var character = null;
      characters.forEach(function (char) {
        if (char.name === name) {
          character = char;
        }
      });
      return character;
    }
    walkSpeedRankings.forEach(function(charName, index) {
      var character = characterByName(this.characters, charName);
      character.walkSpeed = index + 1;
    }.bind(this));

    airSpeedRankings.forEach(function(charName, index) {
      var character = characterByName(this.characters, charName);
      character.airSpeed = index + 1;
    }.bind(this));

    weightRankings.forEach(function(charName, index) {
      var character = characterByName(this.characters, charName);
      character.weight = index + 1;
    }.bind(this));

    tierList.forEach(function(charName, index) {
      var character = characterByName(this.characters, charName);
      character.rank = index + 1;
    }.bind(this));

    fallSpeedRankings.forEach(function(charName, index) {
      var character = characterByName(this.characters, charName);
      console.log(charName);
      character.fallSpeed = index + 1;
      console.log(character);
    }.bind(this));

  });

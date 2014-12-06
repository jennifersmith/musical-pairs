'use strict';


var assetsObj = {
    "audio": {
        "asound": "scripts/sounds/sound.wav"
        }
}

var Game = {
  // Initialize and start our game
  start: function () {
    Crafty.load(assetsObj, function () {
        
      // Start crafty and set a background color so that we can see it's working
      Crafty.init(800, 600);

      // Simply start splashscreen
      Crafty.scene('oneScreenToRuleThemAll');
    });
  }
};

Game.start();

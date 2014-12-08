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



MIDI.loadPlugin({
		soundfontUrl: "/bower_components/midi-soundfonts/FluidR3_GM/",
		instruments: ["acoustic_grand_piano", "synth_drum"],
		callback: function() {
                          MIDI.programChange(0, 0);
      MIDI.programChange(1, 118);

                    Game.start();
		}
	});

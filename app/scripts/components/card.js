Crafty.c('card', {
  
  _width:64,
  _height:64,
  _padding:16,
  _note:60,
  _placeholder: "..",
   
  init: function() {
      this.requires("2D, Canvas, Color, Polygon, Mouse, Delay");
      this.color("#FF0000");
      this.bind('Click', function(MouseEvent){
	  var delay = 0; // play one note every quarter second
	  var velocity = 127; // how hard the note hits
	  // play the note
	  MIDI.setVolume(0, 127);
	  MIDI.noteOn(0, this._note, velocity, delay);
	  MIDI.noteOff(0, this._note, delay + 0.75);
          
          this.addComponent("SelectedCard");
      });
  },
  note:function(n){
      this._note = n;
  },
  getNote:function(){
      return this._note
      },
  layoutOnGrid:function(x,y){
      this.attr({w: this._width, h: this._height, x: (x* (this._width + this._padding)) + 50, y: (this._height + this._padding) * y});
      return this;
  },

  deselect: function(){
      this.delay(function(){
          this.removeComponent("SelectedCard");
          this.color("#FF0000");
          }, 1000,0);
  },

  remove: function (entityDestroyed) {
    // called just before this component is removed
    //  or before an entity is destroyed
  },

  // constructor
  card: function(placeholder) {
    this.placeholder = placeholder;

    return this;
  }

});


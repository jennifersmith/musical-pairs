Crafty.c('UnmatchedCard', {

  _placeholder: "..",

  init: function() {
      // called when this component is added to an entity
      this.requires("Color, Mouse");
      this.color("#559911");
      this._clickUnbind = this.bind('Click', function(MouseEvent){
          this.play();
          Crafty.trigger("cardSelected", this);
      });
      
  },

  remove: function (entityDestroyed) {
          console.log("OHAIaa", this._clickUnbind);
window.glob = this._clickUnbind;
    // called just before this component is removed
      //  or before an entity is destroyed
      this.unbind('Click', this._clickUnbind);
  },

  // constructor
  unmatchedcard: function(placeholder) {
    this.placeholder = placeholder;

    return this;
  }

});

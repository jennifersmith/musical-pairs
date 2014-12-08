Crafty.c('UnmatchedCard', {

  _placeholder: "..",

  init: function() {
      // called when this component is added to an entity
      this.requires("Color, Mouse");
      this.color("#559911");
      this.bind('Click', function(MouseEvent){
          this.play();
          Crafty.trigger("cardSelected", this);
      });
      
  },

  remove: function (entityDestroyed) {

    // called just before this component is removed
      //  or before an entity is destroyed
      this.unbind('Click');
  },

  // constructor
  unmatchedcard: function(placeholder) {
    this.placeholder = placeholder;

    return this;
  }

});

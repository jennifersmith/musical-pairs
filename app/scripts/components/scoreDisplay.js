Crafty.c('scoreDisplay', {

  init: function() {
    // called when this component is added to an entity
    this.requires("2D,Canvas,Text")
    this.text("0");
  },

  remove: function (entityDestroyed) {
    // called just before this component is removed
    //  or before an entity is destroyed
  },

  // constructor
  scoredisplay: function(placeholder) {
    this.placeholder = placeholder;

    return this;
  }

});

Crafty.c('MatchedCard', {

  init: function() {
    // called when this component is added to an entity
    this.requires("Gravity,Color");
    this.color("#012249");
    this.gravity();
  },

  remove: function (entityDestroyed) {
    // called just before this component is removed
    //  or before an entity is destroyed
  },

  // constructor
  matchedcard: function(placeholder) {
    this.placeholder = placeholder;

    return this;
  }

});

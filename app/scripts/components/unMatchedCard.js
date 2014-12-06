Crafty.c('UnmatchedCard', {

  _placeholder: "..",

  init: function() {
    // called when this component is added to an entity
    this.requires("Color");
    this.color("#559911");
  },

  remove: function (entityDestroyed) {
    // called just before this component is removed
    //  or before an entity is destroyed
  },

  // constructor
  unmatchedcard: function(placeholder) {
    this.placeholder = placeholder;

    return this;
  }

});

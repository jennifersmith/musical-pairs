Crafty.c('SelectedCard', {

  _placeholder: "..",

  init: function() {
    // called when this component is added to an entity
    this.requires("Card, Color, Gravity");
      this.color("#674458")
      Crafty.trigger("cardSelected");
  },

  remove: function (entityDestroyed) {
    // called just before this component is removed
    //  or before an entity is destroyed
  },

  // constructor
  selectedcard: function(placeholder) {
    this.placeholder = placeholder;

    return this;
  }

});

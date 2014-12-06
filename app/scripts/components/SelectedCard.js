Crafty.c('SelectedCard', {

    init: function() {
        this.requires("Card, Color");
        this.color("#674458")
    },

  remove: function (entityDestroyed) {
    // called just before this component is removed
    //  or before an entity is destroyed
  },

  // constructor
  selectedcard: function() {

    return this;
  }

});

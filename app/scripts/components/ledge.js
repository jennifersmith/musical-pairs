Crafty.c('Ledge', {

  _placeholder: "..",

  init: function() {
    // called when this component is added to an entity
    this.requires("2D, Canvas, Color, Polygon,Collision");
    this.color("#404040");
    this.attr({x:0, y:350, w:800, h:20});
  },

  remove: function (entityDestroyed) {
    // called just before this component is removed
    //  or before an entity is destroyed
  },

  // constructor
  ledge: function(placeholder) {
    this.placeholder = placeholder;

    return this;
  }

});

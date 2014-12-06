Crafty.c('card', {
  
  _width:64,
  _height:64,
  _padding:16,
  _placeholder: "..",

  init: function() {
      this.requires("2D, Canvas, Color, Polygon");
      this.color("#FF0000");
  },

  layoutOnGrid:function(x,y){
      this.attr({w: this._width, h: this._height, x: (x* (this._width + this._padding)) + 50, y: (this._height + this._padding) * y});
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


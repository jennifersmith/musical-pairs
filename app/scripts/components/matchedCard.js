Crafty.c('MatchedCard', {

  init: function() {
    // called when this component is added to an entity
    this.requires("Gravity,Color,Collision");
    this.color("#012249");
   },

  fall: function(){
      this.gravity().gravityConst(.05 + (0.1 * Math.random()));
      this.onHit("Ledge", function(){
          this.play();
          this.destroy();
      });
  },
  remove: function (entityDestroyed) {
    Crafty.trigger("cardDestroyed");
    // called just before this component is removed
    //  or before an entity is destroyed
  },

  // constructor
  matchedcard: function(placeholder) {
    this.placeholder = placeholder;
      
    return this;
  }

});

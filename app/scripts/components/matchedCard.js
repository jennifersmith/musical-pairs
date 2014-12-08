Crafty.c('MatchedCard', {

  init: function() {
    // called when this component is added to an entity
    this.requires("Gravity,Color,Collision,Tween,Delay");
    this.color("#674458");
    this.attr({alpha:1.0})
          .tween({alpha:0.4}, 10);
    this.delay(function(){this.playHit()}, 10);

   },

  fall: function(){
      this.gravity().gravityConst(.025 + (0.02 * Math.random()));
      this.onHit("Ledge", function(){
          this.play();
          this.destroy();
      });
      this.onHit("MatchedCard", function(){
          this.play();
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

Crafty.c('MatchedCard', {

  init: function() {
    // called when this component is added to an entity
    this.requires("Gravity,Color,Collision");
    this.color("#012249");
    this.gravity();
    this.onHit("Ledge", function(){
        this.play();
        });
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
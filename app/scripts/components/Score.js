Crafty.c('Score', {

  selectionsMade: 0,
  unmatchedCards: 0,
  init: function() {
    // called when this component is added to an entity
    this.requires("Model");
    this.bind("Change", function(){
            console.log(this.get("unmatchedCards"));
    });
  },
  increment: function(){
      this.attr({selectionsMade: this.selectionsMade +1})
  },
  remove: function (entityDestroyed) {
    // called just before this component is removed
    //  or before an entity is destroyed
  },

  // constructor
  score: function(unmatchedCards) {

    this.unmatchedCards = unmatchedCards;
    return this;
  }

});

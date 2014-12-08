Crafty.c('notesContainer', {

  _placeholder: "..",
  _tempNoteCounter: 0,
  init: function() {
    // called when this component is added to an entity
    this.requires("Canvas, Polygon, 2D, Color")
      this.attr({x:0, y:0, h:600, w:400});
      this.color("#f9a022");
  },

  addNote: function(noteNumber){
      //ssshhhh!
      this.attach(Crafty.e("card").card({note: noteNumber}).layoutOnGrid(this._tempNoteCounter%3,Math.floor(this._tempNoteCounter/3)));
      this._tempNoteCounter ++;
  },

  remove: function (entityDestroyed) {
    // called just before this component is removed
    //  or before an entity is destroyed
  },

  // constructor
  notescontainer: function(placeholder) {
    this.placeholder = placeholder;

    return this;
  }

});

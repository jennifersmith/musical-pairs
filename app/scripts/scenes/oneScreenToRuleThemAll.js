Crafty.scene('oneScreenToRuleThemAll', function() {
    var possibleNotes = [60,64,67,72];
   var notes = _.shuffle(possibleNotes.concat(possibleNotes));
   _(8).times(function(n){
       Crafty.e("card").layoutOnGrid(n%3,Math.floor(n/3)).note(notes[n]);
       })
}, function() {
  // destructor
});

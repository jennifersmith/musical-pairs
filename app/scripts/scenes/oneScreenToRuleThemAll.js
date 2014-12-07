Crafty.scene('oneScreenToRuleThemAll', function() {
    Crafty.bind("cardSelected", function(newCard){

        var clickedNote = newCard._note;
        var selectedCards = Crafty("SelectedCard");
        var selectedNotes = _.pluck(selectedCards.get(), "_note")[0];
        
        if(selectedNotes == clickedNote){
            selectedCards.each(function(){this.match()});
            newCard.match();
        } else {
            selectedCards.each(function(){this.deselect()});
            newCard.select();
        }
        return;

    });
    
    var possibleNotes = [60,64,67,72];
    var notes = _.shuffle(possibleNotes.concat(possibleNotes));
    _(8).times(function(n){
       Crafty.e("card").card({note: notes[n]}).layoutOnGrid(n%3,Math.floor(n/3));
       })
}, function() {
  // destructor
});

Crafty.scene('oneScreenToRuleThemAll', function() {
    var score = Crafty.e("Score");
    var possibleNotes = [60,64,67,72];    
    var updateUnmatched = function(){
        score.attr({unmatchedCards: Crafty("UnmatchedCard").length});
        if(score.unmatchedCards ==0){
            Crafty.trigger("gameEnded");
        }
    };

    Crafty.bind("gameEnded", function(){
        bigplaybad(possibleNotes);
        Crafty.enterScene("end");
    });
    
    Crafty.bind("cardSelected", function(newCard){

        var clickedNote = newCard._note;
        var selectedCards = Crafty("SelectedCard");
        var selectedNotes = _.pluck(selectedCards.get(), "_note")[0];
        if(selectedNotes == clickedNote){
            selectedCards.each(function(){this.match()});
            newCard.match();
            score.increment();
            updateUnmatched();

        } else {
            selectedCards.each(function(){this.deselect()});
            newCard.select();
        }
        return;

    });

    var notes = _.shuffle(possibleNotes.concat(possibleNotes));
    _(8).times(function(n){
       Crafty.e("card").card({note: notes[n]}).layoutOnGrid(n%3,Math.floor(n/3));
       });
    Crafty.e("Ledge");
    score.score(8);
}, function() {
  // destructor
});


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
        Crafty("MatchedCard").each(function() {
            this.fall();
        });
        //Crafty.enterScene("end");
    });
    
    //erk
    delayer =  Crafty.e("Delay");
    Crafty.bind("cardDestroyed", function(){
        if( Crafty("Card").get().length==1){
            delayer.delay(function(){ 
                Crafty.enterScene("end", {score: score.selectionsMade})}, 10, 0);
        }
    });
    
    Crafty.bind("cardSelected", function(newCard){
        score.increment();
        var clickedNote = newCard._note;
        var selectedCards = Crafty("SelectedCard");
        var selectedNotes = _.pluck(selectedCards.get(), "_note")[0];
        if(selectedNotes == clickedNote){
            selectedCards.each(function(){this.match()});
            newCard.match();
            updateUnmatched();

        } else {
            selectedCards.each(function(){this.deselect()});
            newCard.select();
        }
        return;

    });

    var scoreDisplay = Crafty.e("scoreDisplay");
    
    var notesContainer = Crafty.e("notesContainer");

    
    var notes = _.shuffle(possibleNotes.concat(possibleNotes));
    _(8).times(function(n){
        notesContainer.addNote(notes[n]);
       });
    Crafty.e("Ledge");
    score.score(8);
}, function() {
  // destructor
});


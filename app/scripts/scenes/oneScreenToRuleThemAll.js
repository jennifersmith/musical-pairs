Crafty.scene('oneScreenToRuleThemAll', function() {
    Crafty.bind("cardSelected", function(){
        var selectedCards = Crafty("SelectedCard");
        console.log(selectedCards.length);
        if(selectedCards.length>1){
            selectedNotes = _.pluck(selectedCards.get(), "_note");
            if(_.uniq(selectedNotes).length==1){
                selectedCards.each(function(){this.matched();});
            } else{
                selectedCards.each(
                    function(){
                        this.deselect();
                    })
                    }
        }
    });
    
    var possibleNotes = [60,64,67,72];
    var notes = _.shuffle(possibleNotes.concat(possibleNotes));
    _(8).times(function(n){
       Crafty.e("card").card({note: notes[n]}).layoutOnGrid(n%3,Math.floor(n/3));
       })
}, function() {
  // destructor
});

Crafty.scene('oneScreenToRuleThemAll', function() {
   _(9).times(function(n){
       console.log(Math.floor(n/3));
       Crafty.e("card").layoutOnGrid(n%3,Math.floor(n/3));
       })
}, function() {
  // destructor
});

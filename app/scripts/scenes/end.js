Crafty.scene('end', function(args) {
    console.log(args);
  // constructor
    snowman = "\u2603";
   Crafty.e("2D, Canvas, Text,Tween")
        .textFont({ size: '35px', weight: 'bold' })
        .text("CONGRATULATIONS YOU MADE IT!").attr({x:50,y:100})
        .attr({alpha:0.0})
        .tween({alpha: 1.0},1000);

   Crafty.e("2D, Canvas, Text,Tween")
        .textFont({ size: '35px', weight: 'bold' })
        .text("You scored: " + args.score).attr({x:100,y:150})
        .attr({alpha:0.0})
        .tween({alpha: 1.0},1000);

   snowmen = Crafty.e("2D, Canvas, Text, Delay").textFont({ size: '40px'})
        .attr({x:0, y:0}); 
    snowmenText = "";
    snowmen.delay(function(){
        snowmenText += snowman;
        if(!snowmenText.length%20){
            snowmenText +="<br/>";
        }
        this.text(snowmenText);
        this.draw();
        },20,111);

}, function() {
  // destructor
});

$(document).ready(function(){

  var dancer;

  $('body').append('<div id="info" class="popbox"></div>')

  $('.dancefloor')
  .on('mouseenter', '.dancer', function(){
    dancer = window.dancers[this.id];
    console.log(this.id, this)
    $('.popbox').text("money in wallet: $" + dancer.money);
    $('.popbox').show();
  });

  $('.dancefloor')
  .on('mouseleave', '.dancer', function(){
    $('.popbox').hide();
  });

  $('.dancefloor')
  .on('click', '.dancer', function(){
    dancer.money -= 10;
  });

  //findDistance takes arrays
  // var findDistance = function (pos1, pos2) {
  //   var y = pos1[0] - pos2[0];
  //   var x = pos1[1] - pos2[1];
  //   return Math.sqrt(y*y + x*x);
  // };

});

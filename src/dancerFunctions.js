$(document).ready(function(){

  var dancer;

  // popbox is the popup that has dancer info in it
  $('body').append('<div id="info" class="popbox"></div>');

  //announcement will make announcements in the center of the screen
  $('.dancefloor').append('<span id="announcement" class="announcement"></span>')

  $('.dancefloor')
  .on('mouseover', '.dancer', function(){
    dancer = window.dancers[this.id];
    $('.popbox').html(
      '<p>name: ' + dancer.name + '</p>' +
      '<p>money in wallet: $' + dancer.money + '</p>'
      );
    $('.popbox').css({
      top: dancer._position[0] + 50,
      left: dancer._position[1] + 50
    });
    $('.popbox').fadeIn('fast');
  });

  $('.dancefloor')
  .on('mouseleave', '.dancer', function(){
    $('.popbox').fadeOut('slow');
  });

  $('.dancefloor')
  .on('click', '.dancer', function(){
    dancer.money -= 10;
    window.clubRevenue += 10;
    $('.ClubRevenue').html(window.clubRevenue);
  });

  $('.LineUpButton').on('click', function(event){
    for(var i = 0; i < window.dancers.length; i++) {
      if(window.dancers[i]) {
        window.dancers[i].setPosition([
          $('body').height()*0.6, $('.dancefloor').width()*0.9 - 100*i
        ]);
        window.dancers[i].money -=10;
        window.clubRevenue += 10;
        $('.ClubRevenue').html(window.clubRevenue);
      }
    }
  });

});

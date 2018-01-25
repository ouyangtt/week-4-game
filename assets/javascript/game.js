 

 $( document ).ready(function() {
    var guess = 55;
    var count = 0;
    var number1 = [10];
    var number2 = [5];
    var number3 = [3];
    var number4 = [7];
    $('number1 number2 number3 number4').text(guess);
    for (var i=0; i< number1.length; i++){
      var imageCrystal1 = $('<img>');
      
      imageCrystal1.attr('data-num', number1[i]);
      imageCrystal1.attr('src', 'assets/images/red.png');
      imageCrystal1.attr('alt', 'red crystal');
      imageCrystal1.attr('class', 'fancy');
      imageCrystal1.addClass('crystalImage');

      $('#crystals').append(imageCrystal1);
    }

    for (var i=0; i< number2.length; i++){
      var imageCrystal2 = $('<img>');
      
      imageCrystal2.attr('data-num', number2[i]);
      imageCrystal2.attr('src', 'assets/images/clear.png');
      imageCrystal2.attr('alt', 'clear crystal');
      imageCrystal2.attr('class', 'fancy');
      imageCrystal2.addClass('crystalImage');
      $('#crystals').append(imageCrystal2);
    }

    for (var i=0; i< number3.length; i++){
      var imageCrystal3 = $('<img>');
      
      imageCrystal3.attr('data-num', number3[i]);
      imageCrystal3.attr('src', 'assets/images/blue.png');
      imageCrystal3.attr('alt', 'blue crystal');
      imageCrystal3.attr('class', 'fancy');
      imageCrystal3.addClass('crystalImage');
      $('<img>').width(100); 
      $('#crystals').append(imageCrystal3);
    }

    for (var i=0; i< number4.length; i++){
      var imageCrystal4 = $('<img>');
      
      imageCrystal4.attr('data-num', number4[i]);
      imageCrystal4.attr('src', 'assets/images/green.png');
      imageCrystal4.attr('alt', 'green crystal');
      imageCrystal4.attr('class', 'fancy');
      imageCrystal4.addClass('crystalImage');
      $('#crystals').append(imageCrystal4);
    }
    
    $('#reset').on('click', function(){
        reset();
    });

    function reset(){
      console.log("made it");
      count = 0;      
      $('#yourNumber').text(count);

      number1 = [5];
      number2 = [3];
      number3 = [7];
      number4 = [10];
      $('number1 number2 number3 number4').text(guess);
      console.log('Is it working');
    };

    $('.crystalImage').on('click', function(){
      count = count + parseInt($(this).data('num'));
      
      $('#yourNumber').text(count);
      if (count == guess){
        alert('You won!');
        reset();
        console.log("try it");
      }else if( count > guess){
        alert('You lost!');
        reset();
      }
    });
  
  });

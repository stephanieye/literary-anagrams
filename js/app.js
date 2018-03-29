$(()=>{
  var levelcount = 0;
  const $startbutton = $('button.start');
  const $submitbutton = $('button.submit');
  const $intro = $('div.intro');
  const $level = $('section');
  const $tile = $('div.tile');
  const $anagramboard = $('div.anagramboard');
  const $answerboard = $('div.answerboard');



  $startbutton.on('click', function(){
    console.log('started game');
    $intro.eq(0).remove();
    $level.eq(levelcount).css({'display': 'block', 'visibility': 'visible'});
    var $currentAnagramBoard = $level.eq(levelcount).find($anagramboard);
    console.log(levelcount);
    var $currentTile = $currentAnagramBoard.find($tile);
    console.log($currentTile);
    var $currentAnswerBoard = $answerboard.eq(levelcount);
    for (var i = 0; i < $currentTile.length; i++) {
      $($currentTile[i]).on('click', function(){
        if (($(this)).hasClass('chosen')) {
          console.log('you touched me again')
          $currentAnagramBoard.append($(this));
          $($(this)).removeClass('chosen');
        } else {
          console.log('you touched me');
          ($(this)).addClass('chosen');
          $currentAnswerBoard.append($(this));
        }
      });
    }
  });

  $submitbutton.on('click', function(){
    // $('div.anagramboard').empty();
    // $answerboard.empty();
    $level.eq(levelcount).remove();
    levelcount += 1;
    console.log(levelcount);
    $level.eq(levelcount).css({'display': 'block', 'visibility': 'visible'});
    var $currentAnagramBoard = $level.eq(levelcount).find($anagramboard);
    console.log(levelcount);
    var $currentTile = $currentAnagramBoard.find($tile);
    console.log($currentTile);
    var $currentAnswerBoard = $answerboard.eq(levelcount);
    for (var i = 0; i < $currentTile.length; i++) {
      $($currentTile[i]).on('click', function(){
        if (($(this)).hasClass('chosen')) {
          console.log('you touched me again')
          $currentAnagramBoard.append($(this));
          $($(this)).removeClass('chosen');
        } else {
          console.log('you touched me');
          ($(this)).addClass('chosen');
          $currentAnswerBoard.append($(this));
        }
      });
    }
  });
});

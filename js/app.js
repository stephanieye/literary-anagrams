$(()=>{
  var levelcount = 0;
  var points = 0;
  const $startbutton = $('button.start');
  const $submitbutton = $('button.submit');
  const $intro = $('div.intro');
  const $level = $('section');
  const $tile = $('div.tile');
  const $anagramboard = $('div.anagramboard');
  const $answerboard = $('div.answerboard');
  const $contents = $('div.contents').find('p');
  const $scoreboard = $('div.score').find('p');

  const $titles = ['OLIVERTWIST', 'FRANKENSTEIN', 'HEARTOFDARKNESS', 'PRIDEANDPREJUDICE', 'WUTHERINGHEIGHTS', 'THELORDOFTHERINGS', 'LORDOFTHEFLIES', 'ACLOCKWORKORANGE', 'THEWAROFTHEWORLDS', 'ANIMALFARM', 'DAVIDCOPPERFIELD', 'THEHITCHHIKERSGUIDETOTHEGALAXY', 'PERSUASION', 'GREATEXPECTATIONS', 'BRAVENEWWORLD', 'THEWINDINTHEWILLOWS', 'MANSFIELDPARK', 'SILASMARNER','SONSANDLOVERS','JUDETHEOBSCURE'];





  $submitbutton.on('click', function(){
    $contents.text(`You are on anagram ${levelcount+1} of 20`);
    var $answer = $('div.chosen');
    console.log($answer.text());
    console.log($titles[levelcount-1]);
    if ($answer.text() === $titles[levelcount-1]) {
      points += 5;
      console.log(points);
      var score = points + 0;
      $scoreboard.text(`You have ${score} out of 100 marks`);
    }
    $level.eq(levelcount).remove();
    levelcount += 1;
    $level.eq(levelcount).css({'display': 'block', 'visibility': 'visible'});
    var $currentAnagramBoard = $level.eq(levelcount).find($anagramboard);
    var $currentTile = $currentAnagramBoard.find($tile);
    var $currentAnswerBoard = $answerboard.eq(levelcount-1);
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

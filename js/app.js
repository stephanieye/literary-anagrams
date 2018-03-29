$(()=>{
  var levelcount = 0;
  var points = 0;
  var demerits = 0;
  const $submitbutton = $('button.submit');
  const $level = $('section');
  const $tile = $('div.tile');
  const $anagramboard = $('div.anagramboard');
  const $answerboard = $('div.answerboard');
  const $hint1 = $('div.hint1');
  const $hint2 = $('div.hint2');
  const $contents = $('div.contents').find('p');
  const $scoreboard = $('div.score').find('p');

  const $titles = ['OLIVERTWIST', 'FRANKENSTEIN', 'HEARTOFDARKNESS', 'PRIDEANDPREJUDICE', 'WUTHERINGHEIGHTS', 'THELORDOFTHERINGS', 'LORDOFTHEFLIES', 'ACLOCKWORKORANGE', 'THEWAROFTHEWORLDS', 'ANIMALFARM', 'DAVIDCOPPERFIELD', 'THEHITCHHIKERSGUIDETOTHEGALAXY', 'PERSUASION', 'GREATEXPECTATIONS', 'BRAVENEWWORLD', 'THEWINDINTHEWILLOWS', 'MANSFIELDPARK', 'SILASMARNER','SONSANDLOVERS','JUDETHEOBSCURE'];

  const $hints = [['Charles Dickens', '2 words'], ['Mary Shelley', '1 word'], ['Joseph Conrad', '3 words'], ['Jane Austen', '3 words'], ['Emily Bronte', '2 words'], ['J.R.R. Tolkien', '5 words'], ['William Golding','4 words'], ['Anthony Burgess', '3 words'], ['H.G. Wells', '5 words'], ['George Orwell', '2 words'], ['Charles Dickens', '2 words'], ['Douglas Adams', '6 words'], ['Jane Austen', '1 word'], ['Charles Dickens', '2 words'], ['Aldous Huxley', '3 words'], ['Kenneth Grahame', '5 words'], ['Jane Austen', '2 words'], ['George Eliot', '2 words'], ['D.H. Lawrence', '3 words'], ['Thomas Hardy', '3 words']];


  $submitbutton.on('click', function(){
    $contents.text(`Anagram ${levelcount+1} of 20`);
    var $answer = $('div.chosen');
    console.log($answer.text());
    console.log($titles[levelcount-1]);
    if ($answer.text() === $titles[levelcount-1]) {
      points += 5;
      console.log(points);
      var score = points - demerits;
      $scoreboard.text(`${score} out of 100 marks`);
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
          $currentAnagramBoard.append($(this));
          $($(this)).removeClass('chosen');
        } else {
          ($(this)).addClass('chosen');
          $currentAnswerBoard.append($(this));
        }
      });
    }
  });


  $hint1.on('click', function(){
    $(this).find('p').text(`${$hints[levelcount-1][0]}`);
    demerits += 1;
  });

  $hint2.on('click', function(){
    $(this).find('p').text(`${$hints[levelcount-1][1]}`);
    demerits += 1;
  });















  $('header').on('click', function(){
    location.reload();
  });


});

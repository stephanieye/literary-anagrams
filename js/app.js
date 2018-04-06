$(()=>{


  var levelcount = 0;
  var points = 0;
  var demerits = 0;
  var timerId = null;
  var players = 1;
  var player1 = [0];
  var player2 = [0];
  var soc = 1;

  const $identities = $('div.identities');
  const $getnamesbutton = $('button.getnames');
  const $submitbutton = $('button.submit');
  const $duobutton = $('button.duo');
  const $level = $('section');
  const $tile = $('div.tile');
  const $anagramboard = $('div.anagramboard');
  const $answerboard = $('div.answerboard');
  const $hint1 = $('div.hint1');
  const $hint2 = $('div.hint2');
  const $contents = $('div.contents').find('p');
  const $scoreboard = $('div.score').find('p');
  const $finale = $('div.finale').find('p');
  const $finalee = $('div.finalee').find('p');
  const $timer = $('div.timer').find('p');
  const $ranking1 = $('#ranking1');
  const $ranking2 = $('#ranking2');
  const $ranking3 = $('#ranking3');
  const $ranking4 = $('#ranking4');
  const $ranking5 = $('#ranking5');
  const $ranking6 = $('#ranking6');
  const $ranking7 = $('#ranking7');
  const $playagainbutton = $('button.playagain');
  const $showsociety = $('div.showsociety');
  const $music = $('div.music');
  const $cross = $('div.cross');
  const $audio = $('audio');

  const choose = document.getElementById('choose');
  choose.src = 'sounds/choose.mp3';
  const unchoose = document.getElementById('unchoose');
  unchoose.src = 'sounds/unchoose.mp3';
  const compete = document.getElementById('compete');
  compete.src = 'sounds/typereturn.wav';
  const submit = document.getElementById('submit');
  submit.src = 'sounds/submit.wav';
  const purr = document.getElementById('purr');
  purr.src = 'sounds/purr.wav';
  const fanfare = document.getElementById('fanfare');
  fanfare.src = 'sounds/fanfare.flac';
  const warn = document.getElementById('warn');
  warn.src = 'sounds/warn.wav';


  $duobutton.on('click', function(){
    compete.play();
    $identities.css({'display': 'block'});
  });


  $getnamesbutton.on('click', function(){
    player1name = document.getElementById('player1name').value;
    player2name = document.getElementById('player2name').value;
    players += 1;
    playGame2(player1name, player2name);
  });


  $submitbutton.on('click', function() {
    if (players === 1) {
      playGame();
    } else {
      playGame2(player1name, player2name);
    }
  });


  function playGame(){
    submit.play();
    $timer.removeClass('warning');
    clearInterval(timerId);
    if (levelcount < 20) {
      startTimer();
    }
    var $answer = $('div.chosen');
    if ($answer.text() === $titles[levelcount-1]) {
      points +=5;
    } else {
      points += 0;
    }
    var score = points - demerits;
    $scoreboard.text(`${score} / 100 marks`);
    $level.eq(levelcount).remove();
    levelcount += 1;
    if (levelcount === 21) {
      fanfare.play();
      $finale.text(`You earned ${score} / 100 marks!`);
      rankPlayer(score);
    }
    layOutGame();
  }


  function playGame2(player1name, player2name){
    submit.play();
    $timer.removeClass('warning');
    clearInterval(timerId);
    if (levelcount < 20) {
      startTimer();
    }
    var $answer = $('div.chosen');
    if ($answer.text() === $titles[levelcount-1]) {
      if (levelcount%2 === 0) {
        player2.push(10);
      } else {
        player1.push(10);
      }
    } else {
      if (levelcount%2 === 0) {
        player2.push(0);
      } else {
        player1.push(0);
      }
    }
    var indivscore1 = player1.reduce(getSum);
    var indivscore2 = player2.reduce(getSum);
    if (levelcount%2 === 0) {
      $scoreboard.text(`${indivscore1} / 100 marks`);
    } else {
      $scoreboard.text(`${indivscore2} / 100 marks`);
    }
    $level.eq(levelcount).remove();
    levelcount += 1;
    if (levelcount === 21) {
      fanfare.play();
      $finale.html(`<span class='p1colour'>${player1name}</span> has ${indivscore1} / 100 marks and <span class='p2colour'>${player2name}</span> has ${indivscore2} / 100 marks!`);
      if (indivscore1 > indivscore2) {
        $finalee.addClass('p1colour');
        $finalee.html(`&#9733; ${player1name} is the winner! &#9733;`);
      }  else if (indivscore1 < indivscore2) {
        $finalee.addClass('p2colour');
        $finalee.html(`&#9733; ${player2name} is the winner! &#9733;`);
      } else {
        $finalee.html('<span class=\'p1colour\'>&#9733;</span> It&#8217;s a tie! <span class=\'p2colour\'>&#9733;</span>');
      }
    }
    layOutGame();
  }


  function layOutGame() {
    $level.eq(levelcount).css({'display': 'block', 'visibility': 'visible'});
    if (players === 2) {
      if (levelcount%2 === 0) {
        $contents.removeClass('p1colour');
        $contents.addClass('p2colour');
        $contents.html(`${player2name}&#8217;s turn`);
      } else {
        $contents.removeClass('p2colour');
        $contents.addClass('p1colour');
        $contents.html(`${player1name}&#8217;s turn`);
      }
    }
    var $currentAnagramBoard = $level.eq(levelcount).find($anagramboard);
    var $currentTile = $currentAnagramBoard.find($tile);
    var $currentAnswerBoard = $answerboard.eq(levelcount-1);
    for (var i = 0; i < $currentTile.length; i++) {
      $($currentTile[i]).on('click', function(){
        if (($(this)).hasClass('chosen')) {
          unchoose.play();
          $currentAnagramBoard.find('.anagramrow:first').append($(this));
          $($(this)).removeClass('chosen');
        } else {
          choose.play();
          ($(this)).addClass('chosen');
          $currentAnswerBoard.find('.anagramrow:first').append($(this));
        }
      });
    }
  }


  function startTimer() {
    $timer.text('60 seconds left');
    var timeRemaining = 60;
    timerId = setInterval(()=> {
      timeRemaining--;
      $timer.text(`${timeRemaining} seconds left`);
      if (timeRemaining < 11) {
        $timer.addClass('warning');
        warn.play();
      }
      if (timeRemaining === 0) {
        clearInterval(timerId);
        if (players === 1) {
          playGame();
        } else {
          playGame2(player1name, player2name);
        }
      }
    }, 1000);
  }


  function getSum(total, num) {
    return total + num;
  }


  function rankPlayer(s){
    switch (true) {
      case (s === 100):
        $ranking1.css({'display': 'block'});
        break;
      case (s > 79):
        $ranking2.css({'display': 'block'});
        break;
      case (s > 69):
        $ranking3.css({'display': 'block'});
        break;
      case (s > 59):
        $ranking4.css({'display': 'block'});
        break;
      case (s > 49):
        $ranking5.css({'display': 'block'});
        break;
      case (s > 39):
        $ranking6.css({'display': 'block'});
        break;
      default:
        $ranking7.css({'display': 'block'});
    }
  }


  $hint1.one('click', function(){
    purr.play();
    $(this).find('p').text(`${$hints[levelcount-1][0]}`);
    $(this).addClass('hintrevealed');
    giveDemerits();
  });


  $hint2.one('click', function(){
    purr.play();
    $(this).find('p').text(`${$hints[levelcount-1][1]}`);
    $(this).addClass('hintrevealed');
    giveDemerits();
  });


  function giveDemerits() {
    if (players===2) {
      if (levelcount%2 === 0) {
        player2.push(-2);
      } else {
        player1.push(-2);
      }
    } else {
      demerits += 1;
    }
  }


  $playagainbutton.on('click', function(){
    location.reload();
  });


  $showsociety.on('click', function(){
    if (soc === 1) {
      $('div.society').css({'display': 'block'});
      soc -= 1;
    } else {
      $('div.society').css({'display': 'none'});
      soc += 1;
    }
  });


  $music.on('click', function(){
    for (var i = 0; i < $audio.length; i++) {
      if ($audio[i].muted === true) {
        $audio[i].muted = false;
        $cross.css({'display': 'none'});
      } else {
        $audio[i].muted = true;
        $cross.css({'display': 'block'});
      }
    }
  });


});

$(()=>{


  var levelcount = 0;
  var points = 0;
  var demerits = 0;
  var timerId = null;

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
  const $audio = $('audio');

  const choose = document.getElementById('choose');
  choose.src = 'sounds/choose.mp3';
  const unchoose = document.getElementById('unchoose');
  unchoose.src = 'sounds/unchoose.mp3';
  const submit = document.getElementById('submit');
  submit.src = 'sounds/submit.wav';
  const purr = document.getElementById('purr');
  purr.src = 'sounds/purr.wav';
  const fanfare = document.getElementById('fanfare');
  fanfare.src = 'sounds/fanfare.flac';
  const warn = document.getElementById('warn');
  warn.src = 'sounds/warn.wav';

  const $titles = ['FRANKENSTEIN', 'OLIVERTWIST', 'HEARTOFDARKNESS', 'BRIDESHEADREVISITED', 'WUTHERINGHEIGHTS', 'THEREMAINSOFTHEDAY', 'LORDOFTHEFLIES', 'ACLOCKWORKORANGE', 'THEWAROFTHEWORLDS', 'ANIMALFARM', 'APASSAGETOINDIA', 'MRSDALLOWAY', 'TINKERTAILORSOLDIERSPY', 'ASTUDYINSCARLET', 'BRAVENEWWORLD', 'THEWINDINTHEWILLOWS', 'MANSFIELDPARK', 'SILASMARNER','MYFAMILYANDOTHERANIMALS','JUDETHEOBSCURE'];

  const $hints = [['Mary Shelley', 'F'], ['Charles Dickens', 'O'], ['Joseph Conrad', 'H'], ['Evelyn Waugh', 'B'], ['Emily Brontë', 'W'], ['Kazuo Ishiguro', 'T'], ['William Golding','L'], ['Anthony Burgess', 'A'], ['H.G. Wells', 'T'], ['George Orwell', 'A'], ['E.M. Forster', 'A'], ['Virginia Woolf', 'M'], ['John le Carré', 'T'], ['Arthur Conan Doyle', 'A'], ['Aldous Huxley', 'B'], ['Kenneth Grahame', 'T'], ['Jane Austen', 'M'], ['George Eliot', 'S'], ['Gerald Durrell', 'M'], ['Thomas Hardy', 'J']];

  var players = 1;
  var player1 = [0];
  var player2 = [0];


  $submitbutton.on('click', playgame);

  $duobutton.on('click', function(){
    players += 1;
    $contents.text('Player 1');
    playgame;
  });


  function getSum(total, num) {
    return total + num;
  }



  function playgame(){
    submit.play();
    console.log(levelcount);
    $timer.removeClass('warning');
    clearInterval(timerId);
    if (levelcount < 20) {
      startTimer();
    }
    var $answer = $('div.chosen');
    console.log($answer.text());
    console.log($titles[levelcount-1]);
    if ($answer.text() === $titles[levelcount-1]) {
      points += 5;
      if (players===2) {
        if (levelcount%2 === 0) {
          player2.push(10);
        } else {
          player1.push(10);
        }
      }
    } else {
      points += 0;
      if (players===2) {
        if (levelcount%2 === 0) {
          player2.push(0);
        } else {
          player1.push(0);
        }
      }
    }

    var score = points - demerits;

    if (players===2) {
      var indivscore1 = player1.reduce(getSum);
      var indivscore2 = player2.reduce(getSum);
      if (levelcount%2 === 0) {
        $scoreboard.text(`${indivscore1} / 100 marks`);
      } else {
        $scoreboard.text(`${indivscore2} / 100 marks`);
      }
    } else {
      $scoreboard.text(`${score} / 100 marks`);
    }



    $level.eq(levelcount).remove();
    levelcount += 1;
    if (levelcount === 21) {
      fanfare.play();
      if (players === 2) {
        if (indivscore1 > indivscore2) {
          $finale.html(`Player 1 has ${indivscore1} and Player 2 has ${indivscore2}! Player 1 wins!`);
        }  else if (indivscore1 < indivscore2) {
          $finale.html(`Player 1 has ${indivscore1} and Player 2 has ${indivscore2}! Player 2 wins!`);
        } else {
          $finale.html(`Player 1 has ${indivscore1} and Player 2 has ${indivscore2}! It&#8217;s a tie!`);
        }
      } else {
        $finale.text(`You earned ${score} / 100 marks!`);
        rankplayer(score);
      }
    }

    $level.eq(levelcount).css({'display': 'block', 'visibility': 'visible'});
    if (players === 2) {
      if (levelcount%2 === 0) {
        $contents.text('Player 2');
      } else {
        $contents.text('Player 1');
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
          $currentAnswerBoard.append($(this));
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
        playgame();
      }
    }, 1000);
  }


  function rankplayer(s){
    if (s === 100) {
      $ranking1.css({'display': 'block'});
    } else if (s > 79) {
      $ranking2.css({'display': 'block'});
    } else if (s > 69) {
      $ranking3.css({'display': 'block'});
    } else if (s > 59) {
      $ranking4.css({'display': 'block'});
    } else if (s > 49) {
      $ranking5.css({'display': 'block'});
    } else if (s > 39) {
      $ranking6.css({'display': 'block'});
    } else {
      $ranking7.css({'display': 'block'});
    }
  }


  $hint1.one('click', function(){
    purr.play();
    $(this).find('p').text(`${$hints[levelcount-1][0]}`);
    $(this).addClass('hintrevealed');
    demerits += 1;
    if (players===2) {
      if (levelcount%2 === 0) {
        player2.push(-2);
      } else {
        player1.push(-2);
      }
    }
  });


  $hint2.one('click', function(){
    purr.play();
    $(this).find('p').text(`${$hints[levelcount-1][1]}`);
    $(this).addClass('hintrevealed');
    demerits += 1;
    console.log(demerits);
    if (players===2) {
      if (levelcount%2 === 0) {
        player2.push(-2);
      } else {
        player1.push(-2);
      }
    }
  });


  $playagainbutton.on('click', function(){
    location.reload();
  });


  var soc = 1;
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
        $music.find('p').html('&#9835;');
      } else {
        $audio[i].muted = true;
        $music.find('p').text('...');
      }
    }
  });

});

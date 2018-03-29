$(()=>{

  const $startbutton = $('button.start');
  const $submitbutton = $('button.submit');
  const $intro = $('div.intro');
  const $level = $('div.level');
  var levelcount = 0;

  $startbutton.on('click', function(){
    console.log('started game');
    $intro.eq(0).remove();
    $level.eq(0).css({'display': 'block', 'visibility': 'visible'});
    $level.eq(0).one('mouseover', function(){
      createAnagramBoard();
    });
  });

  $submitbutton.on('click', function(){
    $('div.anagramboard').empty();
    $('div.answerboard').empty();
    $level.eq(levelcount).remove();
    levelcount += 1;
    console.log(levelcount);
    $level.eq(levelcount).css({'display': 'block', 'visibility': 'visible'});
    $level.eq(levelcount).one('mouseover', function(){
      createAnagramBoard();
    });
  });



  var createAnagramBoard = function() {
    for (var i = 0; i < tiles[levelcount].length; i++) {
      var tile = $('<div></div>').addClass('tile');
      tile.html(`${tiles[levelcount][i]}`);
      tile.on('click', function(){
        $('div.answerboard').append($(this));
      });
      $('div.anagramboard').append(tile);
    }
  };




  var tiles = [
    ['V','I','T','R','I','O','L','S','T','E','W'],
    ['T','A','N','N','E','R','S','K','N','I','F','E'],
    ['F','O','R','S','A','K','E','N','H','A','T','R','E','D','S'],
    ['D','A','D','P','I','E','R','C','E','D','J','U','N','I','P','E','R'],
    ['H','U','G','E','W','I','T','H','T','H','E','G','R','I','N','S'],
    ['D','E','L','I','G','H','T','F','O','R','H','O','R','N','E','T','S'],
    ['F','R','O','T','H','E','D','F','O','L','L','I','E','S'],
    ['K','A','N','G','A','R','O','O','C','R','E','W','L','O','C','K'],
    ['T','H','R','O','W','D','E','A','T','H','F','L','O','W','E','R','S'],
    ['A','R','M','F','A','I','L','M','A','N'],
    ['D','E','P','R','I','V','E','D','O','F','P','L','A','C','I','D'],
    ['T','H','I','S','G','L','U','E','D','H','I','G','H','H','A','T','H','O','C','K','E','Y','E','X','T','R','A','T','I','E'],
    ['S','E','R','I','O','U','S','N','A','P'],
    ['E','X','A','S','P','E','R','A','T','I','N','G','O','C','T','E','T'],
    ['L','E','V','E','R','D','R','A','W','N','B','O','W'],
    ['D','O','W','N','W','H','I','L','E','W','I','T','H','T','I','N','S','E','L'],
    ['I','M','P','A','L','E','D','F','R','A','N','K','S'],
    ['A','L','A','R','M','S','I','R','E','N','S'],
    ['N','O','L','A','S','S','V','E','N','D','O','R','S'],
    ['R','E','D','H','U','E','D','O','B','J','E','C','T','S']
  ];

});

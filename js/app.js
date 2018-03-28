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
  });

  $submitbutton.on('click', function(){
    console.log('next level');
    levelcount += 1;
    $level.eq(levelcount - 1).remove();
    $level.eq(levelcount).css({'display': 'block', 'visibility': 'visible'});
  });

});

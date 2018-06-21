![Title Page](/READMEimages/titlepage.png)

------------------
#LITERARY ANAGRAMS
------------------

* [Play game online](http://stephanieye.com/literary-anagrams/)
* [View repository on GitHub](https://github.com/stephslye/literary-anagram-game)

This game combines my love of books and of puzzles. The player must unscramble a series of anagrams to reveal the titles of novels by British writers. There is also a two-player option (with customisable names), where players alternate levels and a winner is announced at the end. The player has 60 seconds per level.

One player:
Number of levels = number of anagrams = 20.
Each level is worth 5 points, giving the player a final score out of 100.

Two players:
10 anagrams each, alternating levels.
Each level is worth 10 points, giving each player a final score out of 100.

![Level](/READMEimages/anagram.png)
* At each level, the player is presented with a series of tiles that spell out an anagram. The player can click on any tile to select it, and click on it again to deselect it.

![Level completed](/READMEimages/answer.png)
 * Players click on tiles in sequence to spell out the book title. There are also two hint buttons at the bottom of the screen, which when clicked reveal hints. However, each click costs the player points (1 point for a solo player, 2 points for a player in a 2-player game).

![Result](/READMEimages/result.png)
 * At the end of the game, the final mark is displayed. The solo player will get a ranking (from Alpha Double-Plus to Epsilon), based on the caste system in Aldous Huxley's *Brave New World*. In the 2-player game, a winner is announced, and players can also look at the ranking.

<img src="/READMEimages/mobile.png" alt="mobile" style="width: 20%; float: left; padding: 20px 20px 0 0" />

* The design is responsive and, theoretically, can be played on all mobile devices.

* Another feature is sound effects, which can be switched off by clicking on the music note icon in the upper right corner. When muted, the music note icon has a cross over it.

----------
##Approach
----------
Each level is a separate section in the HTML file, and remains hidden with display:none until called upon by the player pressing the 'submit' button, whereby the level's display changes to 'block'.

Originally, I created all the anagram tiles in JavaScript; however, this meant each level took several seconds to render, so I decided to code the anagrams in HTML. I am still in two minds about this, as coding in HTML means all the questions can be seen in the source code. However, the answers cannot be seen, and I've decided to prioritise speed over secrecy.

JavaScript/jQuery is used for the event listener buttons, the timer, the player's interaction with the game and the calculation of marks.

The key game feature -- that when the player clicks on a tile, it is moved to the player's board -- is achieved using jQuery's append(). I experimented with drag-and-drop with jQuery UI, but found the responsiveness too sluggish.

----------------------
##Room for improvement
----------------------
* The CSS animation of the title sequence relies on width percentages in order for all the letters to line up properly at the end of the animation. However, the percentages seem not to translate well as the screen width is resized to < 800px, so I created a media query for the animation with new percentages. It would be ideal to find a solution where the animation works at all sizes without the need for media queries.

* The game displays well on iPad and iPhone, however, I have not tested it on other devices and am not confident it is fully responsive.

* This game was created in a Chrome browser, and I am not confident it renders perfectly in other browsers, particularly the title animation.

* My 'play again' button uses location.reload(), which I am aware is considered an amateurish method, so I could work on restoring the game's start page in a more sophisticated way.

* I could do with more refactoring of my code.

--------------
##Technologies
--------------
Languages:
* HTML5 with HTML Audio
* Sass/CSS with Flexbox and animation
* jQuery/JavaScript

Anagram generator:
* [Internet Anagram Server](https://wordsmith.org/anagram/)

Typefaces:
* [Google Fonts](http://fonts.google.com)

Sound effects:
* [Freesound](http://freesound.org)
* [ZapSplat](http://zapsplat.com)

Text Editor:
* Atom

Browser:
* Chrome

---------
##Contact
---------

* hello@stephanieye.com
* http://stephanieye.com

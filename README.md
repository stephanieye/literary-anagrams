#LITERARY ANAGRAMS

A literary anagram game in which the player must unscramble the titles of novels by British writers, from the letters provided. There is also a two-player option.


-------------------------------------------------------------------------------------------------------------------------
##Structure of the game
-------------------------------------------------------------------------------------------------------------------------

One player:
Number of levels = number of anagrams = 20

Two players:
10 anagrams each, alternating levels.

-------------------------------------------------------------------------------------------------------------------------

Per level:
Each level of the game is in a separate section of the same HTML file. The section in play is displayed on screen in turn using display: none/block.
[Skills need: HTML, CSS, Javascript]

Anagram display: A row of tiles. Each letter of the anagram is displayed on a tile.
[Skills needed: HTML, CSS]

User input: Player clicks on a tile to select that letter. The selected tile will move to the player's board. Player can de-select any tile clicked by clicking on it again. Player can submit answer anytime by clicking the 'submit' button.
[Skills needed: CSS animation, Javascript, HTML audio when tile clicked]

-------------------------------------------------------------------------------------------------------------------------

Points:
One player: each level is worth 5 points
Two players: each level is worth 10 points

There will be two hint buttons that will reveal hints when clicked. Solo player loses 1 point per click, competing players lose 2 points per click.
  1. First hint is the author's name.
  2. Second hint is the first letter of the title.

If the player is unable to unscramble the title, they get zero points.
Live tally of player's score is displayed in the corner of the screen.
[Skills needed: CSS hidden divs, Javascript event listener and callback functions]

-------------------------------------------------------------------------------------------------------------------------

Timer: User will be given 60 seconds for each level. This is counted down in countdown timer. When the timer ends without any user submission, user is moved on to the next level, earning zero points. User can also give up early by clicking the 'submit' button and moving on to the next level.
[Skills needed: Javascript set/clearInterval]

-------------------------------------------------------------------------------------------------------------------------

Ending: Game ends when all the levels are completed. On the final page, the player's score will be revealed as compared to the maximum possible score (max score is 100). In the case of competing players, the winner will be announced.
[Skills needed: CSS, Javascript]

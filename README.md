#LITERARY ANAGRAMS

A literary anagram game in which the player must unscramble the title of a novel by a famous British writer, from the letters provided.


##Structure of the game

Number of levels = number of anagrams = 20

Per level:
Each level of the game is in a separate section of the same HTML file. The section in play is displayed on screen using CSS page transitions (rather than separate HTML file for each level).
[Skills need: HTML, CSS]

Anagram display: A row of tiles. Each letter of the anagram is displayed on a tile.
[Skills needed: CSS]

User input: User clicks on a tile to select that letter. The tile will change colour/fade/move, while the selected letter will appear in a user input display. (**Or possibly tile will move down to user display if I can figure out how to do this**) Selected letters appear in the order clicked. User can de-select the last tile clicked by clicking on it again. (**Or deselect any tile if I can figure out how to move tiles**) User can submit answer anytime by clicking the 'submit' button.
[Skills needed: CSS animation, Javascript event listener and arrays, possible HTML audio when tile clicked]

Points: User starts with 5 points for each level.
There will be two hint buttons that will reveal hints when clicked. User loses 1 point per click (hence, if user clicks both and manages to unscramble the title, they will get 3 points).
  1. First hint is the author's name.
  2. Second hint is the number of words in the title.
If the user is unable to unscramble the title, they get zero points.
Possible feature: Live tally of current score in corner of screen.
[Skills needed: CSS hidden divs, Javascript event listener, callback functions]

Timer: User will be given 1.5 minutes for each level. This is counted down in countdown timer. When the timer ends without any user submission, user is moved on to the next level, earning zero points. User can also give up early by clicking 'submit' button and moving on to the next level.
[Skills needed: Javascript set/clearInterval]

Ending: Game ends when all levels completed. On final page, score will be displayed as compared to maximum possible score (max score is 10 * number of levels(20), i.e 100). There will also be options to restart game or to reveal answers.
[Skills needed: CSS, Javascript]


##Steps to build

1. Make framework of website: how to move from one level to another
2. Start page, start button and info on game
3. Tiles: how to display them
4. User input: how to display it
5. Tiles: logic behind tiles, make them interactive
6. Points: how to tally
7. User input: how it affects game progression/points
8. Submit button and effect on game progression/points
9. Timer, counting down and effect on game progression/points
10. Ending: displaying points, reset and answers


##List of 20 anagrams:

1. Vitriol Stew OLIVER TWIST
  1. Charles Dickens
  2. 2 words
2. Tanners Knife	FRANKENSTEIN
  1. Mary Shelley
  2. 1 word
3. Forsaken Hatreds HEART OF DARKNESS
  1. Joseph Conrad
  2. 3 words
4. Dad Pierced Juniper	PRIDE AND PREJUDICE
  1. Jane Austen
  2. 3 words
5. Huge With The Grins	WUTHERING HEIGHTS
  1. Emily Bronte
  2. 2 words
6. Delight For Hornets	THE LORD OF THE RINGS
  1. J.R.R. Tolkien
  2. 5 words
7. Frothed Follies	LORD OF THE FLIES
  1. William Golding
  2. 4 words
8. Kangaroo Crew Lock	A CLOCKWORK ORANGE
  1. Anthony Burgess
  2. 3 words
9. Throw Death Flowers	THE WAR OF THE WORLDS
  1. H.G. Wells
  2. 5 words
10. Arm Fail Man ANIMAL FARM
  1. George Orwell
  2. 2 words
11. Deprived Of Placid	DAVID COPPERFIELD
  1. Charles Dickens
  2. 2 words
12. This Glued High Hat Hockey Extra Tie	THE HITCHHIKERS GUIDE TO THE GALAXY
  1. Douglas Adams
  2. 6 words
13. Serious Nap PERSUASION
  1. Jane Austen
  2. 1 word
14. Exasperating Octet GREAT EXPECTATIONS
  1. Charles Dickens
  2. 2 words
15. Lever Drawn Bow BRAVE NEW WORLD
  1. Aldous Huxley
  2. 3 words
16. Down While With Tinsel	THE WIND IN THE WILLOWS
  1. Kenneth Grahame
  2. 5 words
17. Impaled Franks MANSFIELD PARK
  1. Jane Austen
  2. 2 words
18. Alarm Sirens SILAS MARNER
  1. George Eliot
  2. 2 words
19. No Lass Vendors SONS AND LOVERS
  1. D.H. Lawrence
  2. 3 words
20. Red Hued Objects JUDE THE OBSCURE
  1. Thomas Hardy
  2. 3 words

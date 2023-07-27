import { Puzzle, Game } from './models';
/*
Gameplay Bagpoints
1.  select a random puzzle.
2.    there is a list of questions and the host moves the pointer of the current question.
        show current question at a time.
        show the letters in random order, (depend on game mode the letters comes with random points)
        if (guessed) the points are added to the current team and move the turn to next team.

2.2 global has to be a team turn.
2.3 there is score for categories and shows who was the winner and the points.
2.4
 
Host Controls
2. move between "questions" forward backwards.
3. activates the appearance of letters.
4. during gameplay gives the chance to guess and 
   add points if guessed correctly.(depends on the game mode )
5. gives the opportunity to show the hint (during the gameplay)
    Background story
    Explanation
    Bitesize message
    Hint
    Question: is it biblical? Or a trivia

Scoreboard
1. Winner by Categories.
*/

class GamePlay {
    gamePlay : Game;
    constructor(game: Game) {
        // game
        this.gamePlay = game;
    }

    getRandomPuzzle() : Puzzle {
        let selected = Math.floor(Math.random() * this.gamePlay.puzzles.length);
        return this.gamePlay.puzzles[selected];
    }

    getNext
}
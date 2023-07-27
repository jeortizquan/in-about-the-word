import { Game } from './models'; 

class Host {
    hostedGame : Game;

    constructor(game: Game) {
     this.hostedGame = game;
    }

    forward() {
        // game play move question forward
    }

    backward() {
        // game play move question backwards
    }

    showLetter() {
        // shows letters
    }

    showHint() {
        // show hint
    }
}
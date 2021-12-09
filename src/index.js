import Game from './scripts/game';
import View from './scripts/view';


document.addEventListener("DOMContentLoaded", () => {
    
    const canvasEl = document.querySelector(".game-canvas");
    const game = new Game();
    new View(game, canvasEl);
 });








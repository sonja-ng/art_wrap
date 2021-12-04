import Game from './scripts/game';
import View from './scripts/view';

console.log("Webpack is working!")

document.addEventListener("DOMContentLoaded", () => {
    
    const canvasEl = document.querySelector(".game-canvas");
    const game = new Game();
    new View(game, canvasEl);
 });








import Game from './scripts/game';
// import View from './view';

console.log("Webpack is working!")

document.addEventListener("DOMContentLoaded", () => {
    
    const canvasEl = document.querySelector(".game-canvas");
    const game = new Game(canvasEl);
    // new View(game, canvasEl);
 });








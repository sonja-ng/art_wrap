import Game from './scripts/game';
import View from './view';

console.log("Webpack is working!")

document.addEventListener("DOMContentLoaded", () => {
    const game = new Game();
    const canvasEl = document.querySelector(".game-canvas");
    new View(game, canvasEl);
 });




// document.addEventListener("DOMContentLoaded", ()=> {
//     const canvas = document.getElementById('game-canvas');

//     const ctx = canvas.getContext('2d');

//     ctx.fillStyle = 'blue';
//     ctx.fillRect( 0, 0, 1000, 1000)

//     g1 = new Game();
//     g1.yell();
// });







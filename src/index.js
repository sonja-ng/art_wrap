const Game = require('./game.js');

console.log("Webpack is working!")

document.addEventListener("DOMContentLoaded", ()=> {
    const canvas = document.getElementById('game-canvas');

    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'red';
    ctx.fillRect( 0, 0, 1000, 1000)
});
import Game from './game';
import Artwork from './artwork';

console.log("View file!")

class View  {
    constructor(game, canvas) {
        this.ctx = canvas.getContext('2d');
        this.game = game;
        this.start();
        // this.drawCardboard(this.ctx);
        // this.drawCrate(this.ctx);
        // this.drawBubble(this.ctx);
        // this.drawPaper(this.ctx);
    }

    removeIntro() {
        const intro = document.querySelector(".splash-intro");
        intro.classList.add("hidden");

        const instruction = document.querySelector(".instruction");
        instruction.classList.remove("hidden");

        const leftCanvas = document.querySelector(".legend");

        const gameHeader = document.querySelector(".title-header");
        gameHeader.classList.remove("hidden");
        
        document.addEventListener("keydown", (e) => {
          e.preventDefault();
          const keyName = e.key;
          const keyCode = e.code;
          if (this.game.fresh === true && keyCode === 'Enter') {
            instruction.classList.add("hidden");
            leftCanvas.classList.remove("hidden");  
            this.bindKeysHandle();
              console.log("Enter");
              // this.game.setUpTimer();
              this.game.draw();
          }
      });
    }
  
    start() {
        document.addEventListener("keydown", (e) => {
            e.preventDefault();
            const keyName = e.key;
            const keyCode = e.code;
            if (this.game.level === 0 && keyCode === 'Enter') {
                this.removeIntro();
            }
        });
    }

    bindKeysHandle(){
        //bind the four arrow keys to a specific value ('C', 'B', 'P', 'W')

        document.addEventListener("keydown", (e) => {
          const keyCode = e.code;
          e.preventDefault();
          if (keyCode === "ArrowUp") {
            this.game.currentKey = "B";
            this.checkMatch();
            console.log(`${this.game.currentKey}`);
          } else if (keyCode === "ArrowDown") {
            this.game.currentKey = "P";
            this.checkMatch();
            console.log(`${this.game.currentKey}`);
          } else if (keyCode === "ArrowLeft") {
            this.game.currentKey = "C";
            this.checkMatch();
            console.log(`${this.game.currentKey}`);
          } else if (keyCode === "ArrowRight") {
            this.game.currentKey = "W";
            this.checkMatch();
            console.log(`${this.game.currentKey}`);
          }
        }, false);
    
        document.addEventListener("keyup", (e) => {
          this.game.currentKey = "X";
          // console.log("X"); //need to fix this, it's not changing back to X
        }, false);
      }
      
      checkMatch(){
          if (this.game.isCorrect()) {
              // debugger
              if (this.game.artwork[0].status === 0) {
                this.game.addWrapper();
              } else if (this.game.artwork[0].status === 1) {
                this.game.addSecondWrapper();
                // console.log(`${this.game.artwork}`);
                this.game.artwork.shift();
                 // console.log(`${this.game.artwork}`);
                if (this.game.levelEnd()) {
                    // debugger
                    setTimeout(this.game.moveUpLevel.bind(this.game), 450);
                } 
              }
          } 
      }

      // drawCardboard(ctx) {
      //   let w = 80;
      //   let h = 80;

      //   this.ctx.fillStyle = 'green';
      //   this.ctx.fillRect(50, 20, w, h);
      // }

      // drawPaper(ctx){
      //   let w = 80;
      //   let h = 80;

      //   this.ctx.fillStyle = 'yellow';
      //   this.ctx.fillRect(150, 20, w, h);
      // }

      // drawBubble(ctx){
      //   let w = 80;
      //   let h = 80;

      //   this.ctx.fillStyle = 'orange';
      //   this.ctx.fillRect(250, 20, w, h);
      // }

      // drawCrate(ctx){
      //   let w = 80;
      //   let h = 80;

      //   this.ctx.fillStyle = 'blue';
      //   this.ctx.fillRect(350, 20, w, h);
      // }

      // animate() {
      //   let cardboard = false;
      //   let bubble = false;
      //   let crate = false;
      //   let paper = false;
      // }
      



  }
  
  export default View;
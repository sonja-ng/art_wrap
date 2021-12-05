import Game from './game';
import Artwork from './artwork';

console.log("View file!")

class View  {
    constructor(game, canvas) {
        this.ctx = canvas.getContext('2d');
        this.game = game;
        this.start(); 
    }

    removeIntro() {
        const intro = document.querySelector(".splash-intro");
        intro.classList.add("hidden");

        // const test = document.querySelector(".test-img");
        // test.classList.remove("hidden");
    }
  
    start() {
        const intro = document.querySelector(".splash-intro");
        document.addEventListener("keydown", (e) => {
            const keyName = e.key;
            const keyCode = e.code;
            if (keyCode === 'Enter') {
                this.removeIntro();
                this.bindKeysHandle();
                console.log("Enter");
                this.game.draw();
            }
        })
        
        
        // this.drawArt(); CANVAS CODE
        // this.drawWrapper(this.ctx); CANVAS CODE
  
    }

    //CANVAS-SPECIFIC CODE
    // drawArt() {
    //     for (let i = 0; i < this.game.artwork.length; i++) {
    //         this.game.draw(this.ctx);
    //     }
    // }

    bindKeysHandle(){
        //bind the four arrow keys to a specific value ('C', 'B', 'P', 'W')

        document.addEventListener("keydown", (e) => {
          const keyCode = e.code;
          if (keyCode === "ArrowUp") {
            this.game.currentKey = "B";
            this.checkMatch();
            console.log("B");
          } else if (keyCode === "ArrowDown") {
            this.game.currentKey = "P";
            this.checkMatch();
            console.log("P");
          } else if (keyCode === "ArrowLeft") {
            this.game.currentKey = "C";
            this.checkMatch();
            console.log("C");
          } else if (keyCode === "ArrowRight") {
            this.game.currentKey = "W";
            this.checkMatch();
            console.log("W");
          }
        }, false);
    
        document.addEventListener("keyup", (e) => {
          this.game.currentKey = "X";
          console.log("X"); //need to fix this, it's not changing back to X
        }, false);
      }
      
      checkMatch(){
          if (this.game.isCorrect()) {
            //   debugger
              if (this.game.artwork[0].status === 0) {
                this.game.addWrapper();
                //   this.game.addWrapper(this.ctx);
              } else if (this.game.artwork[0].status === 1) {
                this.game.addSecondWrapper();
                if (this.game.levelEnd()) {
                    // debugger
                    setTimeout(this.game.moveUpLevel.bind(this.game), 450);
                    // this.game.draw();
                    // this.game.moveUpLevel(this.ctx);
                    // this.drawArt();
                }
              }
          }
          
      }

      drawWrapper(ctx) {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(100, 50, 80, 80);
        this.ctx.fillStyle = 'yellow';
        this.ctx.fillRect(200, 50, 80, 80);
        this.ctx.fillStyle = 'orange';
        this.ctx.fillRect(300, 50, 80, 80);
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(400, 50, 80, 80);
      }


  }
  
  export default View;
  
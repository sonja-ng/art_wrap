import Game from './game';
import Artwork from './artwork';

console.log("View file!")

class View  {
    constructor(game, canvas) {
        this.ctx = canvas.getContext('2d');
        this.game = game;
        this.start(); //added this.ctx to test drawing art from game class
        
        // this.changeWrapper.bind(this);
    }

    removeIntro() {
        const intro = document.querySelector(".splash-intro");
        intro.classList.add("hidden");
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
            }
        })
        for (let i = 0; i < this.game.artwork.length; i++) {
            this.game.draw(this.ctx);
        }
        
        this.drawWrapper(this.ctx);
  
    }

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
          this.currentKey = "X";
        }, false);
      }
      
      checkMatch(){
          if (this.game.isCorrect()) {
            //   debugger
              if (this.game.artwork[0].status === 0) {
                  this.game.addWrapper(this.ctx);
              } else if (this.game.artwork[0].status === 1) {
                this.game.addSecondWrapper(this.ctx);
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
  
import Game from './game';
import Artwork from './artwork';


class View  {
    constructor(game, canvas) {
        this.ctx = canvas.getContext('2d');
        this.game = game;
        this.start();
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
          const keyCode = e.code;
          if (this.game.fresh === true && keyCode === 'Enter') {
            instruction.classList.add("hidden");
            leftCanvas.classList.remove("hidden");  
            this.bindKeysHandle();
              this.game.setUpTimer();
              this.game.draw();
              this.game.fresh = false;
          }
      });
    }
  
    start() {
        document.addEventListener("keydown", (e) => {
            e.preventDefault();
            const keyName = e.key;
            const keyCode = e.code;
            if (this.game.fresh === true && keyCode === 'Enter') {
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
            const bubble = document.querySelector(".bubble");
            bubble.classList.add("selected");
          } else if (keyCode === "ArrowDown") {
            this.game.currentKey = "P";
            this.checkMatch();
            const paper = document.querySelector(".paper");
                paper.classList.add("selected");
          } else if (keyCode === "ArrowLeft") {
            this.game.currentKey = "C";
            this.checkMatch();
            const cardboard = document.querySelector(".cardboard");
                cardboard.classList.add("selected");
          } else if (keyCode === "ArrowRight") {
            this.game.currentKey = "W";
            this.checkMatch();
            const crate = document.querySelector(".crate");
                crate.classList.add("selected");
          }
        }, false);
    
        document.addEventListener("keyup", (e) => {
          this.game.currentKey = "X";
          const keycode = e.code;
          if (e.code === "ArrowLeft" || e.code === "ArrowRight" || e.code === "ArrowDown" || e.code === "ArrowUp"){
            const selected = document.querySelector(".selected");
            selected.classList.remove("selected");
          }
        }, false);
      }
      
      checkMatch(){
          if (this.game.isCorrect()) {
              // debugger
              if (this.game.artwork[0].status === 0) {
                this.game.addWrapper();
              } else if (this.game.artwork[0].status === 1) {
                this.game.addSecondWrapper();
                this.game.artwork.shift();
                if (this.game.levelEnd()) {
                    // debugger
                    setTimeout(this.game.moveUpLevel.bind(this.game), 450);
                } 
              } //below are for testing
           } else if (this.game.currentKey === "B" && !this.game.isCorrect()) {
            const bubble = document.querySelector(".bubble");
            bubble.classList.add("wrong");
           setTimeout(this.removeWrong.bind(this), 500);
          } else if (this.game.currentKey === "C" && !this.game.isCorrect()) {
            const cardboard = document.querySelector(".cardboard");
            cardboard.classList.add("wrong");
           setTimeout(this.removeWrong.bind(this), 500);
          } else if (this.game.currentKey === "P" && !this.game.isCorrect()) {
            const paper = document.querySelector(".paper");
            paper.classList.add("wrong");
           setTimeout(this.removeWrong.bind(this), 500);
          } else if (this.game.currentKey === "W" && !this.game.isCorrect()) {
            const crate = document.querySelector(".crate");
            crate.classList.add("wrong");
           setTimeout(this.removeWrong.bind(this), 500);
          } 
      }

      removeWrong(){
        const wrong = document.querySelector(".wrong");
        wrong.classList.remove("wrong");
      }
  }
  
  export default View;
import Artwork from './artwork';

// Game.MOVES = {
//   w:  
//   a:
//   s:
//   d:
// };


class Game  {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.start()
    this.artwork = [];
    this.wrapper = [];
}

  removeIntro() {
      const intro = document.querySelector(".splash-intro");
      intro.classList.add("hidden");
  }

  start() {
      const that = this;
      const intro = document.querySelector(".splash-intro");
      document.addEventListener("keydown", (e) => {
          const keyName = e.key;
          const keyCode = e.code;
          if (keyCode === 'Enter') {
              this.removeIntro();
          }
      })
      this.draw(this.ctx);

  }

  draw(ctx) {
    this.ctx.fillRect(100, 250, 180, 220);
    this.ctx.strokeRect(400, 250, 150, 100);
    this.ctx.fillRect(600, 250, 200, 220);
  }

  
 

}

export default Game;




// setupGame() {
//     const canvas = this.el;

//     const ctx = 


// }

// setupIntro() {
//     const newDiv = document.createElement("div");
//     newDiv.className = "splash-intro";
//     newDiv.innerText = "Instruction";

//     this.el.append(newDiv);
// }
// constructor(level) {
//   this.level = level;
//   this.artworks = new ArtworkQueue(this.level);
//   this.currentArtwork = this.artworks.queue[0];
// }
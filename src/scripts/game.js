import Artwork from './artwork';
console.log("Game file!")

class Game  {
  constructor() {
    this.artwork = [];
    this.wrapper = ['C', 'B', 'P', 'W'];
    this.currentKey = "X";

    this.addArtwork()
    // this.currentArtwork = this.artwork[0];
  }


  addArtwork(){
    //add new Artwork() to this.artwork []
    for (let i = 0; i < 3; i++) {
      let art = new Artwork();
      this.artwork.push(art);
    }
  }

  draw(ctx) {
    const painting = new Image();
    painting.onload = function() {
      // for (let i = 0; i < 4; i++) {
      //   for (let j = 0; j < 3; j++) {
          // ctx.drawImage(painting, j * 50, i * 38, 50, 38);
      //   }
      // }
      ctx.drawImage(painting, 100, 250, 220, 147);
    }
      painting.src = "./src/scripts/assets/monet1.png"
      // ctx.beginPath();
      // ctx.fillStyle = 'red';
      // ctx.fillRect(100, 250, 180, 220);
      // ctx.closePath();
  };

  addWrapper(ctx) {
    // ctx.beginPath();
    // ctx.fillStyle = 'green';
    // ctx.fillRect(100, 250, 180, 220);
    // ctx.closePath();

    const paper = new Image();
    paper.onload = function() {
      ctx.drawImage(paper, 100, 250, 220, 147);
    }
      paper.src = "./src/scripts/assets/monet2.png"
  }

  addSecondWrapper(ctx) {
    // ctx.beginPath();
    // ctx.fillStyle = 'blue';
    // ctx.fillRect(100, 250, 180, 220);
    // ctx.closePath();

    const bubble = new Image();
    bubble.onload = function() {
      ctx.drawImage(bubble, 100, 250, 220, 147);
    }
      bubble.src = "./src/scripts/assets/monet3.png"
  }

  
  isCorrect(){  //NEED TEST input should be the wrapper key from the user's input
    let currentArtwork = this.artwork[0];
    if (this.currentKey === currentArtwork.keys[0]) {
      currentArtwork.keys.shift();
      currentArtwork.status += 1;
      // console.log(`${currentArtwork.keys} and ${currentArtwork.status}`);
      return true;
    } else if (this.currentKey !== currentArtwork.keys[0] && this.wrapper.includes(this.currentKey)) {
        // throw new Error("wrong pick!");
        console.log("wrong pick from game file!");
       return false;
    }
}


  gameOver() {
    //return boolean value if the timer is up
    //show gameOver message
  }

  gameOverMessage(){
    //message
    //ask user if they want to play again
  }

  won(){
    //if the status of all artworkKeys in the array have been changed to "1"
  }

  winnerMessage(){

  }
}

export default Game;


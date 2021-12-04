import Artwork from './artwork';
console.log("Game file!")

class Game  {
  constructor() {
    this.artworks = [];
    this.artworkStatus = [];
    this.wrapper = ['C', 'B', 'P', 'W'];
    this.currentKey = "X";

    this.addArtwork()
  }


  addArtwork(){
    //add new Artwork() to this.artwork []
    for (let i = 0; i < 3; i++) {
      let art = new Artwork();
      this.artworks.push(art.keys);
      this.artworkStatus.push(art.status);
    }
  }

  draw(ctx) {
      ctx.beginPath();
      ctx.fillStyle = 'red';
      ctx.fillRect(100, 250, 180, 220);
      ctx.closePath(); 
  };

  addWrapper(ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.fillRect(100, 250, 180, 220);
    ctx.closePath();
  }

  
  isCorrect(){  //NEED TEST input should be the wrapper key from the user's input
    const that = this;
    let result = false;
    let artwork = this.artworks[0];
    if (this.currentKey === artwork[0]) {
      result = true;
    } else if (this.currentKey !== artwork[0] && this.wrapper.includes(this.currentKey)) {
        // throw new Error("wrong pick!");
        console.log("wrong pick from game file!");
    }
    return result;
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
    //if the status of all artworks in the array have been changed to "1"
  }

  winnerMessage(){

  }
}

export default Game;


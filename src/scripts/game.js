import Artwork from './artwork';
console.log("Game file!")

class Game  {
  constructor() {
    this.artworks = [];
    this.wrapper = ['C', 'B', 'P', 'W'];
    this.currentKey = "X";

    this.addArtwork()
  }


  addArtwork(){
    //add new Artwork() to this.artwork []
    for (let i = 0; i < 3; i++) {
      let art = new Artwork();
      this.artworks.push(art);
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(100, 250, 180, 220);
    ctx.closePath();

  
   
  };

  
  isCorrect(currentKey){  //NEED TEST input should be the wrapper key from the user's input
    let result = false;
    if (this.currentKey === this.keys[0]) { //this.keys[0] refers to artwork's attribute
        result = true;
    } else if (this.currentKey !== this.keys[0] && this.wrapper.includes(this.currentKey)) {
        throw new Error("wrong pick!");
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


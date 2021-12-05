import Artwork from './artwork';
console.log("Game file!")

const LEVEL = {
  0: 1,
  1: 3,
  2: 4
}

const CSS = {
  0: "one",
  1: "two",
  2: "three",
  3: "four"
}

class Game  {
  constructor() {
    this.artwork = [];
    this.wrapper = ['C', 'B', 'P', 'W'];
    this.artworkMedium = [];
    this.artworkSrc = [];
    this.firstWrappers = [];
    this.secondWrappers = [];
    this.currentKey = "X";
    this.level = 0;
    this.addArtwork()
  
  }

  addArtwork(){
  
    for (let i = 0; i < LEVEL[this.level]; i++) {
      let art = new Artwork();
      // debugger
      this.artwork.push(art);
      this.artworkMedium.push(art.medium);
      this.artworkSrc.push(art.picture);
      this.firstWrappers.push(art.firstWrapper);
      this.secondWrappers.push(art.secondWrapper);
      // console.log(this.artwork);
    }
  }

  draw(){
    const image = document.querySelector(".gallery");
    const ul = document.createElement("ul");

    for (let i = 0; i < this.artwork.length; i++) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = this.artworkSrc[i];
      img.classList.add(this.artworkMedium[i]);
      img.classList.add("next");
      if (i === 0) {
        img.classList.add("current");
        img.classList.remove("next");
      }
      li.append(img);
      ul.append(li);
    }

  image.append(ul);
  }

  addWrapper(){
    const art = document.querySelector(".current");
    art.src = this.firstWrappers[0];
    this.firstWrappers.shift();
  }

  addSecondWrapper(){
    const art = document.querySelector(".current");
    art.src = this.secondWrappers[0];
    art.classList.remove("current");
    art.classList.add("done");
    this.secondWrappers.shift();
    if (this.secondWrappers.length > 0) {
      const second = document.querySelectorAll(".next");
      second[0].classList.add("current");
      second[0].classList.remove("next");
   }
  }

  
  
  isCorrect() { 
   
    let currentArtwork = this.artwork[0];
    // debugger
    if (currentArtwork.status === -1) {
      if (this.currentKey === currentArtwork.keys[0]) {
        currentArtwork.updateStatus();
        // console.log(`${currentArtwork.keys} and ${currentArtwork.status}`);
        return true;
      } else if (this.currentKey !== currentArtwork.keys[0] && this.wrapper.includes(this.currentKey)) {
          // throw new Error("wrong pick!");
          console.log("wrong pick from game file!");
         return false;
      }
    } else if (currentArtwork.status === 0) {
      if (this.currentKey === currentArtwork.keys[1]) {
        currentArtwork.updateStatus();
        // console.log(`${currentArtwork.keys} and ${currentArtwork.status}`);
        return true;
      } else if (this.currentKey !== currentArtwork.keys[1] && this.wrapper.includes(this.currentKey)) {
          // throw new Error("wrong pick!");
          console.log("wrong pick from game file!");
         return false;
      }
    }
}

  levelEnd() {
    if (this.artwork.every(artwork => artwork.finishWrap())) {
      this.level += 1;
      return true;
    };
    return false;
  }

  moveUpLevel() {
    const ul = document.querySelector("ul");
    ul.remove();
    this.artwork = [];
    this.artworkMedium = [];
    this.artworkSrc = [];
    this.firstWrappers = [];
    this.secondWrappers = [];
    this.currentKey = "X";
    
    this.addArtwork();
    this.draw();
    console.log(`${this.artwork[0]}`);
  }

  restart() {
    const ul = document.querySelector("ul");
    ul.remove();
    this.artwork = [];
    this.artworkMedium = [];
    this.artworkSrc = [];
    this.firstWrappers = [];
    this.secondWrappers = [];
    this.currentKey = "X";
    this.level = 0;
    
    this.addArtwork();
    this.draw();
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



//CANVAS-SPECIFIC CODE
  // draw(ctx) {
  //   const a = new Image();
  //   a.onload = function() {
  //         ctx.drawImage(a, 100, 250, 220, 147);
  //       }
  //   a.src = "./src/scripts/assets/monet1.png";
  // };


 //CANVAS CODE
  // addWrapper(ctx) {
  //   const paper = new Image();
  //   paper.onload = function() {
  //     ctx.drawImage(paper, 100, 250, 220, 147);
  //   }
  //     paper.src = "./src/scripts/assets/monet2.png";
  // }


  //CANVAS CODE
  // addSecondWrapper(ctx) {

  //   const bubble = new Image();
  //   bubble.onload = function() {
  //     ctx.drawImage(bubble, 100, 250, 220, 147);
  //   }
  //     bubble.src = "./src/scripts/assets/monet3.png"
  // }
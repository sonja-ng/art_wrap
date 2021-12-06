import Artwork from './artwork';
console.log("Game file!")

const LEVEL = {
  0: 1,
  1: 3,
  2: 4,
  3: 5
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
    this.artworkPacked = 0;
    this.second = 5;
    this.addArtwork()
    // this.gameStart = false;
    this.timer = undefined;
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
  this.gameStart = true;
  console.log(this.level);
  }

  setUpTimer(){
    this.timer = setInterval(this.timerTick.bind(this), 1000);
    
  }

  timerTick(){
    const countdown = document.querySelector(".countdown-timer");
    countdown.classList.remove("hidden");
    countdown.innerText = `${this.second}`;
    this.second -= 1;
    console.log(this.second);    
    if (this.second === -1) {
      clearInterval(this.timer);
      countdown.classList.add("hidden");
      this.gameOverMessage();
      const ul = document.querySelector("ul");
      ul.remove();
    } 
  }

  gameOver() {
    return this.second === -1;
  }

  addWrapper(){
    const art = document.querySelector(".current");
    art.src = this.firstWrappers[0];
    this.firstWrappers.shift();
  }

  addSecondWrapper(){
    const art = document.querySelector(".current");
    art.src = this.secondWrappers[0];
    this.artworkPacked += 1;
    art.classList.remove("current");
    art.classList.add("done");
    this.secondWrappers.shift();
    if (this.secondWrappers.length > 0) {
      const second = document.querySelectorAll(".next");
      second[0].classList.add("current");
      second[0].classList.remove("next");
    } else if (this.secondWrappers.length === 0 && this.level === 3) {
      clearInterval(this.timer);
      setTimeout(this.winMessage.bind(this), 450);
    }
  }

  gameWon() {
    if (this.secondWrappers.length === 0 && this.level === 3) return true;
    return false;
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
    if (this.level < 3 && this.artwork.every(artwork => artwork.finishWrap())) {
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
    this.second = 5;
    
    this.addArtwork();
    this.draw();
    console.log(this.level);
  }

  restart() {
    const ul = document.querySelector("ul");
    if (ul) ul.remove();
    this.artwork = [];
    this.artworkMedium = [];
    this.artworkSrc = [];
    this.firstWrappers = [];
    this.secondWrappers = [];
    this.currentKey = "X";
    this.level = 0;
    this.second = 5;
    
    this.addArtwork();
    this.draw();
    this.setUpTimer();
  }

  gameOverMessage(){
    const gameOver = document.querySelector(".game-over");
    gameOver.classList.remove("hidden");
    console.log("time's up!");

    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      const keyName = e.key;
      const keyCode = e.code;
      if (keyCode === 'Enter') {
        const over = document.querySelector(".game-over");
        over.classList.add("hidden");
          this.restart();
      }
    });
  }

  winMessage(){
    const ul = document.querySelector("ul");
    ul.remove();
    const winner = document.querySelector(".winner");
    winner.classList.remove("hidden");
    console.log("You win!");

    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      const keyName = e.key;
      const keyCode = e.code;
      if (keyCode === 'Enter') {
        const winner = document.querySelector(".winner");
        winner.classList.add("hidden");
          this.restart();
      }
    });
  }
}

export default Game;


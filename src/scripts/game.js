import Artwork from './artwork';

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
    this.artworkSrc = [];
    this.firstWrappers = [];
    this.secondWrappers = [];
    this.currentKey = "X";
    this.level = 0;
    this.score = 0;
    this.second = 7;
    this.addArtwork()
    this.artworkCounter = 0;
    this.timer = undefined;
    this.fresh = true;
    this.over = false;
  }

  addArtwork(){
    for (let i = 0; i < LEVEL[this.level]; i++) {
      let art = new Artwork();
      this.artwork.push(art);
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
      img.classList.add("artwork", "next");
      if (i === 0) {
        img.classList.add("current");
        img.classList.remove("next");
      }
      li.append(img);
      ul.append(li);
    }

    image.append(ul);
    const icons = document.querySelector(".icons");
    icons.classList.remove("hidden");
    this.setUpScoreboard();
    this.fresh = false;
  }

  showPoint(){
    const scoreCounter = document.querySelector(".score");
    scoreCounter.classList.remove("hidden");

    if (this.score < 2) {
      scoreCounter.innerText = `Point: ${this.score}`;
    } else {
      scoreCounter.innerText = `Points: ${this.score}`;
    }
  }

  setUpScoreboard() {
    const counter = document.querySelector(".artwork-counter");
    counter.classList.remove("hidden");
    this.showPoint();
  }

  removeScoreboard() {
    const counter = document.querySelector(".artwork-counter");
    counter.classList.add("hidden");
  }

  setUpTimer(){
    this.timer = setInterval(this.timerTick.bind(this), 1000);
  }

  timerTick(){
    const countdown = document.querySelector(".countdown-timer");
    countdown.classList.remove("hidden");
    countdown.innerText = `0${this.second}`;
    this.second -= 1;   
    if (this.second === -1) {
      clearInterval(this.timer);
      countdown.classList.add("hidden");
      this.gameOverMessage();
      const ul = document.querySelector("ul");
      ul.remove();
    } 
  }

  gameOver() {
    this.over = true;
    return this.second === -1;
  }

  addWrapper(){
    const art = document.querySelector(".current");
    if(art) art.src = this.firstWrappers[0];
    this.firstWrappers.shift();
  }

  addSecondWrapper(){
    this.score += 1;
    this.showPoint();

    if (!this.gameOver()) {
    const art = document.querySelector(".current");
      art.src = this.secondWrappers[0];
      art.classList.remove("current");
      art.classList.add("done");
    }
    
    this.artworkCounter += 1;
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
    const currentArtwork = this.artwork[0];
    if (currentArtwork && currentArtwork.status === -1) {
      if (this.currentKey === currentArtwork.keys[0]) {
        currentArtwork.updateStatus();
        return true;
      } else if (this.currentKey !== currentArtwork.keys[0] && this.wrapper.includes(this.currentKey)) {
         return false;
      }
    } else if (currentArtwork && currentArtwork.status === 0) {
      if (this.currentKey === currentArtwork.keys[1]) {
        currentArtwork.updateStatus();
        return true;
      } else if (this.currentKey !== currentArtwork.keys[1] && this.wrapper.includes(this.currentKey)) {
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

  clearArtwork(sec){
    const ul = document.querySelector("ul");
    if (ul) ul.remove();
    this.artwork = [];
    this.artworkSrc = [];
    this.firstWrappers = [];
    this.secondWrappers = [];
    this.currentKey = "X";
    this.second = sec;
    this.addArtwork();
    this.draw();
  }

  moveUpLevel() {
    this.clearArtwork(6);
  }

  restart() {
    this.level = 0;
    this.score = 0;
    this.over = false;

    const legend = document.querySelector(".legend");
    legend.classList.remove("hidden");
    this.clearArtwork(7);
    this.setUpTimer();
  }

  gameOverMessage(){
    const gameOver = document.querySelector(".game-over");
    gameOver.classList.remove("hidden");
    this.artwork = [];
    this.over = true;

    const icons = document.querySelector(".icons");
    icons.classList.add("hidden");

    this.removeScoreboard();

    const legend = document.querySelector(".legend");
    legend.classList.add("hidden");

    const finalScore = document.querySelector(".final-score");
    finalScore.classList.remove("hidden");

    finalScore.innerText = `${this.score}`;

    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      const keyName = e.key;
      const keyCode = e.code;
      if (this.gameOver() && keyCode === 'Enter') {
        const over = document.querySelector(".game-over");
        over.classList.add("hidden");
          this.restart();
      }
    });
  }

  winMessage(){
    const ul = document.querySelector("ul");
    ul.remove();
    this.over = true;

    const icons = document.querySelector(".icons");
    icons.classList.add("hidden");

    const winner = document.querySelector(".winner");
    winner.classList.remove("hidden");
    const legend = document.querySelector(".legend");
    legend.classList.add("hidden");

    this.removeScoreboard();

    const final = document.querySelector(".final-score-winner");
    final.classList.remove("hidden");

    final.innerText = `${this.score}`;

    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      const keyName = e.key;
      const keyCode = e.code;
      if (this.gameWon() && keyCode === 'Enter') {
        const win = document.querySelector(".winner");
        win.classList.add("hidden");
          this.restart();
      }
    });
  }
}

export default Game;


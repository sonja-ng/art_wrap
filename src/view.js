class View  {
    constructor(game, el) {
        this.el = el;
        this.game = game;
        this.setupIntro()
        this.bindEvents()
        this.setupGame()
    }

    setupGame() {
        const newDiv = document.createElement("div");
        newDiv.className = "game-view";
        newDiv.innerText = "this is the game";

        this.el.append(newDiv);
    }

    setupIntro() {
        const newDiv = document.createElement("div");
        newDiv.className = "splash-intro";
        newDiv.innerText = "Instruction";

        this.el.append(newDiv);
    }

    removeIntro() {
        const intro = document.querySelector(".splash-intro");
        intro.classList.add("hidden");
    }

    bindEvents() {
        const that = this;
        const intro = document.querySelector(".splash-intro");
        document.addEventListener("keydown", (e) => {
            const keyName = e.key;
            const keyCode = e.code;
            if (keyCode === 'Enter') {
                this.removeIntro();
            }
        })
    }

   


  }
  
  export default View;
  
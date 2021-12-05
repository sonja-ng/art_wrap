const ARTKEYS = {
    "drawing": [['C', 'B'], "./src/scripts/assets/target1.png", "./src/scripts/assets/temp-art2.png", "./src/scripts/assets/temp-art3.png" ],
    "painting": [['P', 'B'], "./src/scripts/assets/monet1.png", "./src/scripts/assets/monet2.png", "./src/scripts/assets/monet3.png" ],
    "sculpture": [['B', 'W'], "./src/scripts/assets/zhanwang1.png", "./src/scripts/assets/temp-art3.png", "./src/scripts/assets/temp-art2.png"]
};

class Artwork {
  constructor() {
    this.status = -1;  //artwork status: -1, 0, 1. to indicate their wrapping status
    this.medium = Object.keys(ARTKEYS)[Math.floor(Math.random() * 3)];
    this.keys = ARTKEYS[this.medium][0]; //return an array like ['B', 'W']
    this.picture = ARTKEYS[this.medium][1], 
    this.firstWrapper = ARTKEYS[this.medium][2], 
    this.secondWrapper = ARTKEYS[this.medium][3]
  }
  
    updateStatus(){
        this.status += 1;
    }


    finishWrap() {  //when an artwork's is completely wrapped
        return this.status === 1;
    }

}

export default Artwork;


// addWrapper(){
//   const art = document.querySelector(".one");
//   art.src = this.firstWrappers[0];

// }

// addSecondWrapper(){
//   const firstWrapper = document.querySelector(".first-wrapper");
//   firstWrapper.classList.add("hidden");
//   const secondWrapper = document.createElement("img");
//   secondWrapper.src = this.secondWrappers[0];
//   const li = document.querySelector("li");
//   li.append(secondWrapper);
// }
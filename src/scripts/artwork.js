const ARTKEYS = {
    "d1": [['C', 'B'], "./src/scripts/assets/drawing/acconci.png", "./src/scripts/assets/drawing/acconci1.png", "./src/scripts/assets/drawing/acconci2.png" ],
    "d2": [['C', 'B'], "./src/scripts/assets/drawing/albers.png", "./src/scripts/assets/drawing/albers1.png", "./src/scripts/assets/drawing/albers2.png" ],
    "d3": [['C', 'B'], "./src/scripts/assets/drawing/arp_d.png", "./src/scripts/assets/drawing/arp1.png", "./src/scripts/assets/drawing/arp2.png" ],
    "d4": [['C', 'B'], "./src/scripts/assets/drawing/koh.png", "./src/scripts/assets/drawing/koh1.png", "./src/scripts/assets/drawing/koh2.png" ],
    "d5": [['C', 'B'], "./src/scripts/assets/drawing/print.png", "./src/scripts/assets/drawing/print1.png", "./src/scripts/assets/drawing/print2.png" ],
    "p1": [['P', 'B'], "./src/scripts/assets/painting/kusama.png", "./src/scripts/assets/painting/kusama1.png", "./src/scripts/assets/painting/kusama2.png" ],
    "p2": [['P', 'B'], "./src/scripts/assets/painting/leekit.png", "./src/scripts/assets/painting/leekit1.png", "./src/scripts/assets/painting/leekit2.png" ],
    "p3": [['P', 'B'], "./src/scripts/assets/painting/martin.png", "./src/scripts/assets/painting/martin1.png", "./src/scripts/assets/painting/martin2.png" ],
    "p4": [['P', 'B'], "./src/scripts/assets/painting/mondrian.png", "./src/scripts/assets/painting/mondrian1.png", "./src/scripts/assets/painting/mondrian2.png" ],
    "p5": [['P', 'B'], "./src/scripts/assets/painting/stingel.png", "./src/scripts/assets/painting/stingel1.png", "./src/scripts/assets/painting/stingel2.png" ],
    "s1": [['B', 'W'], "./src/scripts/assets/sculpture/balloondog.png", "./src/scripts/assets/sculpture/balloondog1.png", "./src/scripts/assets/sculpture/balloondog2.png"],
    "s2": [['B', 'W'], "./src/scripts/assets/sculpture/banana.png", "./src/scripts/assets/sculpture/banana1.png", "./src/scripts/assets/sculpture/banana2.png"],
    "s3": [['B', 'W'], "./src/scripts/assets/sculpture/kapoor.png", "./src/scripts/assets/sculpture/kapoor1.png", "./src/scripts/assets/sculpture/kapoor2.png"],
    "s4": [['B', 'W'], "./src/scripts/assets/sculpture/kowloon.png", "./src/scripts/assets/sculpture/kowloon1.png", "./src/scripts/assets/sculpture/kowloon2.png"]
  };

  

class Artwork {
  constructor() {
    this.status = -1;  //artwork status: -1, 0, 1. to indicate their wrapping status
    this.medium = Object.keys(ARTKEYS)[Math.floor(Math.random() * 14)];
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
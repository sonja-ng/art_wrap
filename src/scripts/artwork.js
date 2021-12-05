const ARTKEYS = {
    "drawing": [['C', 'B'], "./src/scripts/assets/target1.png"],
    "painting": [['P', 'B'], "./src/scripts/assets/monet1.png"],
    "sculpture": [['B', 'W'], "./src/scripts/assets/zhanwang1.png"]
};

class Artwork {
  constructor() {
    this.status = -1;  //artwork status: -1, 0, 1. to indicate their wrapping status
    this.medium = Object.keys(ARTKEYS)[Math.floor(Math.random() * 3)];
    this.keys = ARTKEYS[this.medium][0]; //return an array like ['B', 'W']
    this.picture = ARTKEYS[this.medium][1];
  }
  
    updateStatus(){
        this.status += 1;
        this.keys.shift();
    }

    finishWrap() {  //when an artwork's is completely wrapped
        return this.status === 1;
    }

    changeImg() {
        if (this.medium === "drawing" && this.status === 0){
            //change img;
        }
    }
}

export default Artwork;
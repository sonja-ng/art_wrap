const ARTKEYS = {
    "drawing": ['C', 'B'],
    "painting": ['P', 'B'],
    "sculpture": ['B', 'W']
};

class Artwork {
  constructor() {
    this.status = -1;  //artwork status: -1, 0, 1. to indicate their wrapping status
    this.medium = Object.keys(ARTKEYS)[Math.floor(Math.random() * 3)];
    this.keys = ARTKEYS[this.medium]; //return an array like ['B', 'W']
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
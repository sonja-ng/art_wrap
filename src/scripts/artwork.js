const KEYS = {
    DRAWING: ['cardboard', 'bubble'],
    PAINTING: ['paper', 'bubble'],
    SCULPTURE: ['bubble', 'crate']
};

class Artwork {
  constructor(num) {
    this.num = num;
    this.queue = this.populateQueue(this.num);
  }

  

  populateQueue(n) {
    const queue = [];
    for (let i = 0; i < n; i++) {
        queue.push('X');
    }

    return queue;
    }

    correctKey() {

    }

    isCorrectWrap(input){
        return input === this.correctKey();
    }

    addWrapper(){
        if (isCorrectWrap()) {
            this.queue[0] = "O";
        }
    }

    win() {
        return this.queue.every(el => el === 'P');
    }


}

export default Artwork;
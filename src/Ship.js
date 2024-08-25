export class Ship {
    constructor(length, position) {
        this.length = length
        this.hits = 0;
        this.crdLiedOn = [];
        this.hitCrds = []
        this.orientation = position;
    }

    hit() {
        this.hits = this.hits + 1
    }
    isSunk() {
        if (this.length === this.hits) return true;
        else return false;
    }
}
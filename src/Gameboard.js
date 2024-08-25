
import { areCollapsed, isNormalFLow, toNumberArray } from "../utilities/app-logic-util.js";

export class Gameboard {
    constructor() {
        this.allPtsOnBoard = [];
        this.allTargetShip = [];
        this.isHit = false;
        this.missedShot = [];
        this.allSunk = false; // look here
    }

    placeShips(theShip, crdsArr) {
        if (!areCollapsed(crdsArr, this.allPtsOnBoard) && isNormalFLow(toNumberArray(crdsArr), theShip.orientation)) {
            for (let pt of crdsArr) {
                if (theShip.crdLiedOn.includes(pt) || theShip.length !== crdsArr.length) break
                else {
                    theShip.crdLiedOn.push(pt)
                    this.allPtsOnBoard.push(pt)
                }
            }
            theShip.crdLiedOn.length ? this.allTargetShip.push(theShip) : null
        }
    }

    recieveAttack(crd) {
        this.isHit = false;

        for (let ship of this.allTargetShip) {
            if (ship.isSunk()) continue;
            else {
                if (ship.crdLiedOn.includes(crd) && !ship.hitCrds.includes(crd)) {
                    ship.hit()
                    ship.hitCrds.push(crd)
                    this.isHit = true;
                    break
                }
                else continue
            }
        }
        !this.isHit  ? this.missedShot.push(crd) : null
    }
    doesAllSunk() {
        return this.allTargetShip.every(e => e.isSunk())
    }
    sunkShips() {
        let sunk = 0;
        for (let ship of this.allTargetShip) ship.isSunk() ?  sunk += 1 : null
        return sunk
    }
}

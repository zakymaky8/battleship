import { Gameboard } from "../src/Gameboard";
import { Ship } from "../src/Ship";
import { isNormalFLow } from "../utilities/app-logic-util";

describe("Testing a functionality of the gameboard", () => {

    describe("ship placement tests", () => {

        it ("registers coord points in the gameboard object when placed", () => {

            const gamebrd = new Gameboard();

            const coordsArray = ['12', '13', '14']

            gamebrd.placeShips(new Ship(3, 'hor'), coordsArray)

            expect(gamebrd.allPtsOnBoard).toContain(...coordsArray)
        })

        it ("registers ship objects in the gameboard object when placed", () => {

            const gamebrd = new Gameboard();

            const coordsArray = ['12', '13', '14']

            gamebrd.placeShips(new Ship(3, 'hor'), coordsArray)

            const bool = gamebrd.allTargetShip.length && gamebrd.allTargetShip.every(e=>e.orientation==='hor')
            expect(bool).toBe(true)
        })

        it ("places when the ship has equal length with number of coord points", () => {

            const gamebrd = new Gameboard()
            const ship = new Ship(3, 'hor')

            const coordsArray = ['12', '13', '14']

            gamebrd.placeShips(ship, coordsArray)

            expect(coordsArray.every(crd=>gamebrd.allPtsOnBoard.includes(crd))).toBeTruthy()
        })

        it ("doesn't place when size of ship is  not equal to number of coord points", () => {

            const gamebrd = new Gameboard()
            const ship = new Ship(3, 'hor')

            const coordsArray = ['12', '13', '14', '15']

            gamebrd.placeShips(ship, coordsArray)

            expect(coordsArray.every(crd=>gamebrd.allPtsOnBoard.includes(crd))).toBeFalsy()
        })


        it ("places coords which are horizontal and descendent points", () => {

            const gamebrd = new Gameboard()
            const ship = new Ship(3, 'hor')

            const coordsArray = ['12', '13', '14']

            gamebrd.placeShips(ship, coordsArray)

            expect(isNormalFLow(coordsArray, ship.orientation)).toBeTruthy()
        })


        it ("places a ship when there is no collapse of coord points with previously placed coord points", () => {

            const gamebrd = new Gameboard()
            const coordsArray1 = ['12', '13', '14']
            const coordsArray2 = ['24', '34', '44']

            gamebrd.placeShips(new Ship(3, 'hor'), coordsArray1)

            gamebrd.placeShips(new Ship(3, 'ver'), coordsArray2)

            expect(coordsArray2.every(crd=>gamebrd.allPtsOnBoard.includes(crd))).toBeTruthy()
        })

        it ("doesn't place a ship when there is collapse ", () => {

            const gamebrd = new Gameboard()
            const coordsArray1 = ['12', '13', '14']
            const coordsArray2 = ['14', '24', '34']

            gamebrd.placeShips(new Ship(3, 'hor'), coordsArray1)

            gamebrd.placeShips(new Ship(3, 'ver'), coordsArray2)

            expect(coordsArray2.every(crd=>gamebrd.allPtsOnBoard.includes(crd))).toBeFalsy()
        })

        it ("ignores when points are off the grid ", () => {

            const gamebrd = new Gameboard()
            const coordsArray1 = ['102', '103', '104']

            expect(gamebrd.placeShips(new Ship(3, 'hor'), coordsArray1)).toBeUndefined()
        })

    })

    describe("Attack recieving tests", () => {

        it  ("hits only when it is a point on the ship,", () => {
            const gamebrd = new Gameboard()

            gamebrd.placeShips(new Ship(2, 'hor'), ["12", "13"])
            gamebrd.recieveAttack("12")

            expect(gamebrd.isHit).toBeTruthy()
        })

        it ("doesn't if it is not there", () => {
            const gamebrd = new Gameboard()

            gamebrd.placeShips(new Ship(2, 'hor'), ["13", "14"])
            gamebrd.recieveAttack("12")

            expect(gamebrd.isHit).toBeFalsy()
        })

        it ("collects missed shots", () => {
            const gamebrd = new Gameboard()

            gamebrd.placeShips(new Ship(2, 'hor'), ["13", "14"])
            gamebrd.placeShips(new Ship(3, 'ver'), ["23", "33", "43"])

            const attacks = ["13", "63", "93", "14"]
            attacks.forEach(crd=> gamebrd.recieveAttack(crd))

            expect(gamebrd.missedShot).toEqual(["63", "93"])
        })

        it ("returns the number of ships which are sunk", () => {
            const gamebrd = new Gameboard()

            gamebrd.placeShips(new Ship(2, 'hor'), ["13", "14"])
            gamebrd.placeShips(new Ship(2, 'ver'), ["23", "33"])
            gamebrd.placeShips(new Ship(3, 'hor'), ["52", "53", "54"])

            const attacks = ["13", "54", "14", "33", "23", "53"]
            attacks.forEach(crd=> gamebrd.recieveAttack(crd))

            expect(gamebrd.sunkShips()).toBe(2)
        })


        it ("returns true if all ships are sunk", () => {
            const gamebrd = new Gameboard()

            gamebrd.placeShips(new Ship(2, 'hor'), ["13", "14"])
            gamebrd.placeShips(new Ship(2, 'ver'), ["23", "33"])

            const attacks = ["13", "14", "23", "43", "33"]

            attacks.forEach(crd=> gamebrd.recieveAttack(crd))

            expect(gamebrd.doesAllSunk()).toBeTruthy()
        })

    })

})
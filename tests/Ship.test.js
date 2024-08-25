import { Ship } from "../src/Ship.js";

import { Gameboard } from "../src/Gameboard.js";


describe("testing ships functionality", () => {

    it ("accepts orientation", () => {
        const ship = new Ship(3, 'ver')
        expect(ship.orientation).toBe('ver')
    })

    it ("has specified length", () => {
        const ship = new Ship(3, 'hor');
        expect(ship.length).toBe(3)
    })

    it ("hit function increases the number of hits by one at a time", () => {
        const ship = new Ship(2, 'ver');
        ship.hit()
        expect(ship.hits).toBe(1)
    })

    it ("hits number increase by one", ()=> {
        const ship = new Ship(3, 'hor');
        let hit = ship.hits
        ship.hit()
        expect(ship.hits).toBe(1 + hit)
    })

    it ("makes a Ship with length 3 sunk after three hits", () => {
        const ship = new Ship(3, 'hor');
        ship.hit()
        ship.hit()
        ship.hit()
        expect(ship.isSunk()).toBeTruthy()
    })

    it ("registers coords lied on a ship", () => {
        const GAMEBOARD = new Gameboard();
        const SHIP = new Ship(3, 'hor')

        const coordsArray = ["11", "12", "13"]

        GAMEBOARD.placeShips(SHIP, coordsArray)

        expect(SHIP.crdLiedOn).toEqual(coordsArray)
    })

    it ("registers hit coords on a specific ship", () => {
        const GAMEBOARD = new Gameboard();
        const SHIP = new Ship(3, 'hor')

        const coordsArray = ["11", "12", "13"]

        GAMEBOARD.placeShips(SHIP, coordsArray)

        GAMEBOARD.recieveAttack("11")
        GAMEBOARD.recieveAttack("16")
        GAMEBOARD.recieveAttack("13")

        expect(SHIP.hitCrds).toEqual(["11", "13"])
    })
})
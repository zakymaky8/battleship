import { createBoard, createFocus, drawUsingArray, markSunkShip, statusUpdate, doWriting as write } from "../utilities/dom-util.js";
import { strArr, generateAllPoints, sglStr } from "../utilities/app-logic-util.js";
import { Gameboard } from "./Gameboard.js";
import { Ship } from "./Ship.js"
import "./style.css"

//  selecting DOM elements
const selEl = selctr => document.querySelector(selctr);

const [intro, welcom, gameName, trigger] = [selEl(".intro"), selEl("#welcom"), selEl("#game-name"), selEl("#trigger")]
const [mainBoard, dradro, gotoField] = [selEl(".main-board"), selEl(".dradro"), selEl(".goto")]
const [setting, friend, enemy] = [selEl('.maintain'), selEl('.friend'), selEl('.enemy')]
const [pref, dir, len] = [selEl('#pref'), selEl('#dir'), selEl('#len')]
const [notice, dialog, frSnkShp, enSnkShp] = [selEl('.notice'), selEl('dialog'), selEl('#fr-snk'), selEl('#en-snk')]
const [gameField, timeEl] = [selEl(".game-field"), selEl("#times")]

const [friendGB, enemyGB] = [new Gameboard(), new Gameboard()]

write(gameName, "Battleship Game", 100);
write(welcom, "Welcome to the battle!", 100);
write(trigger, "Get into it", 100);

// creating grids squares
[setting, friend, enemy].forEach(i=>createBoard(i))

window.addEventListener('DOMContentLoaded', ()=> giveRandforComp(enemyGB))

trigger.onclick = () => {
    intro.style.display = 'none'
    setTimeout(()=>mainBoard.style.display = 'flex', 500)
}

let timer;

gotoField.onclick = () => {
    if (friendGB.allTargetShip.length === 5) {
        mainBoard.style.display = 'none'
        gameField.style.display = 'flex'
        write(notice, statusUpdate.start, 30)
        timer = setInterval(()=> timeEl.textContent = +timeEl.textContent + 1, 1000)
    }
}
pref.onchange = () => {
    if (pref.value === 'ran') {
        giveRandforComp(friendGB)
        drawUsingArray(friend, friendGB.allPtsOnBoard)
        drawUsingArray(setting, friendGB.allPtsOnBoard)
    }
     else if (pref.value==='dad') {
        dradro.style.pointerEvents = "auto"
        EnabledragAndDropFeature()
    }
}

//  Hover-click placement as default feature

Array.from(setting.children).map(sq => {
    sq.addEventListener('click', () => {
        if (friendGB.allTargetShip.length < 5 && pref.value=== 'hac') {

            let lengths = [2, 3, 3, 4, 5];
            let ship = new Ship(+len.value, dir.value);

            friendGB.placeShips(ship, strArr(generateAllPoints(sq.crd, +len.value, dir.value)))

            len.value = lengths[friendGB.allTargetShip.length]

            drawUsingArray(setting, ship.crdLiedOn)
            drawUsingArray(friend, ship.crdLiedOn)
            createFocus(ship, dradro)
        }
    })
})

Array.from(enemy.children).map(c => c.onclick=()=> {
    if (c.innerHTML === '' && !(enemyGB.doesAllSunk() || friendGB.doesAllSunk())) {
        enemyGB.recieveAttack(sglStr(c.crd))
        enemyGB.isHit ? write(notice, statusUpdate.friendShot, 25) : write(notice, statusUpdate.friendMissed, 25)
        c.innerHTML = enemyGB.allPtsOnBoard.includes(sglStr(c.crd)) ? '<div id="get"></div>' : '<div id="missed"></div>'
        markSunkShip(enemy, enemyGB)
        enSnkShp.textContent = enemyGB.sunkShips()
        enemyBrdAppearance("none", "70%", "blur(2px)")
        checkWinner()
        setTimeout(()=> write(notice, statusUpdate.enemyTurn, 25), 1000)
        setTimeout (()=> doEnemyTurnActivity(), 2000)
    }
})

// game logic
function doEnemyTurnActivity() {
    computerHits();
    friendGB.isHit ? write(notice, statusUpdate.enemyShot, 25) : write(notice, statusUpdate.enemyMissed, 25);
    checkWinner();
    markSunkShip(friend, friendGB);
    frSnkShp.textContent = friendGB.sunkShips()
    setTimeout(()=>{
        write(notice, statusUpdate.friendTurn, 25)
        enemyBrdAppearance("auto", "100%", "blur(0px)")
    } , 800)
}
function enemyBrdAppearance(pE, opa, fil) {
    enemy.style.pointerEvents = pE
    enemy.style.opacity = opa
    enemy.style.filter = fil
}

function computerHits() {
    let ran = Math.floor(Math.random()*100)
    let ranPt = friend.children[ran]
    if (ranPt.innerHTML) {
        computerHits()
    } else  {
        ranPt.innerHTML = friendGB.allPtsOnBoard.includes(sglStr(ranPt.crd)) ?  '<div id="get"></div>' : '<div id="missed"></div>'
        friendGB.recieveAttack(sglStr(ranPt.crd))
    }
}

function checkWinner() {
    if (enemyGB.doesAllSunk()) {
        clearInterval(timer)
        write(notice, "You won!", 25)
        dialog.innerHTML =`<div>You got all enemy's ship sunk, Kudos!</div><br>
                           <ul><li>You Missed: ${enemyGB.missedShot.length} shoots.</li><li>It costed you ${timeEl.textContent} seconds to accomplish.</li></ul>
                           <button id="play-again" onclick="document.location.reload()">Play Again</button>
                           `
        dialog.showModal()
    } else if (friendGB.doesAllSunk()) {
        clearInterval(timer)
        write(notice, "You Lost!", 25)
        dialog.innerHTML =`<div>Enemy got all your ship sunk!</div><br>
                           <ul><li>Enemy Missed: ${friendGB.missedShot.length} shoots</li><li>It costed him ${timeEl.textContent} seconds to accomplish</li></ul>
                           <button id="play-again" onclick="document.location.reload()">Play Again</button>`
        dialog.showModal()
    }
}


function giveRandforComp(brdLgc) {
    while (brdLgc.allTargetShip.length < 5) {
        let [i, j] = [Math.floor(Math.random()*10), Math.floor(Math.random()*10)]
        const [dirr, lens] = [['hor', 'ver'], [2, 3, 3, 4, 5]]
        let ind = Math.floor(Math.random()*2)
        const ship = new Ship(lens[brdLgc.allTargetShip.length], dirr[ind])
        brdLgc.placeShips(ship, strArr(generateAllPoints([i, j], lens[brdLgc.allTargetShip.length], dirr[ind])))
    }
}

function EnabledragAndDropFeature () {
    if (pref.value === 'dad') {
        dradro.style.pointerEvents = 'auto'
        Array.from(dradro.children).forEach(el=>el.addEventListener('dragstart', e => e.dataTransfer.setData("text/plain", el.children.length)))
        Array.from(setting.children).map(sq => sq.addEventListener('dragover', e => e.preventDefault()))

        Array.from(setting.children).map(sq => {
            sq.addEventListener('drop', e => {
                e.preventDefault()
                if (friendGB.allTargetShip.length < 5 ) {
                    let len = e.dataTransfer.getData("text/plain")
                    let ship = new Ship(+len, dir.value);
                    friendGB.placeShips(ship, strArr(generateAllPoints(sq.crd, +len, dir.value)))
                    drawUsingArray(setting, ship.crdLiedOn)
                    drawUsingArray(friend, ship.crdLiedOn)
                }
                let a = friendGB.allTargetShip.filter(e=> e.crdLiedOn.length > 0)
                for (let i of a)
                    for (let j of Array.from(dradro.children))
                        if (i.length === j.children.length) {
                            j.style.display = 'none'
                            break
                        }
            })
        })
    }
}
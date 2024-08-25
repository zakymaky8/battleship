import { sglStr } from "./app-logic-util.js";

export const doWriting = (domEl, phrase, interval) => {
    domEl.innerHTML = '';
    if (phrase.length) {
        let i = 0
        let int = setInterval(()=> {
            if (i===phrase.length-1) clearInterval(int)
            domEl.innerHTML += phrase[i]; i++;
        }, interval)
    }
}

export const statusUpdate = {
    start: "Everything is set up. Be the icebreaker!",
    enemyTurn: "Enemy is aiming!",
    enemyMissed: "Enemy lost his target!",
    enemyShot: 'Enemy hit your ship!',
    friendTurn: "Your turn!",
    friendMissed: "You lost your target!",
    friendShot: "You hit enemy's ship!"
}


export const createFocus = (ship, domEl) => {
    Array.from(domEl.children).forEach(e=> e.style.filter = e.children.length===ship.crdLiedOn.length ? 'blur(5px)': "blur(0px)")
}

export const  createBoard = container => {
    container.innerHTML = ''
    container.classList.add('grid-container')
    const [row, column] = [[0,1,2,3,4,5,6,7,8,9], [0,1,2,3,4,5,6,7,8,9]]
    for (let r of row) {
        for (let c of column) {
            const node = document.createElement('div')
            node.className = "sq"
            node.crd = [r, c]
            node.title = `${r}, ${c}`
            container.appendChild(node)
        }
    }
}

export const drawUsingArray  = (brd, arr) => {
    const [r, g, b] = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
    Array.from(brd.children).map(sq=> {
        if (arr.includes(sglStr(sq.crd))) {
            sq.style.background = 'rgb(81, 70, 8)'
            sq.style.border = `2px groove rgb(${r}, ${g}, ${b})`
        }
    })
}



export const markSunkShip = (brdUI, brdLgc) => {
    const [r, g, b] = [Math.floor(Math.random() * 256),
                       Math.floor(Math.random() * 256),
                       Math.floor(Math.random() * 256)];
    brdLgc.allTargetShip.forEach( s => {
        if (s.isSunk() && !s.markedBlur) {
            Array.from(brdUI.children).forEach( e => {
                if (s.crdLiedOn.includes(sglStr(e.crd))) {
                    e.style.background = `rgb(${r}, ${g}, ${b})`
                    e.style.opacity = '30%'
                }
            })
            s.markedBlur = true
        }
    })
}
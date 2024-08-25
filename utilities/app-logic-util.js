

export const areConsecutive = arr => {
    let indices = []
    for (let i = 0; i< arr.length -1 ; i++) indices.push([i, i+1]) // consecutive indices
    return indices.every(e => arr[e[0]]-arr[e[1]] === -1)
}

export const toNumberArray  = arr =>  arr.map(i => i = i.split('').map(e=>+e))

export const strArr = arr => arr.map(e=>e.join(''))

export const sglStr = arr => arr.join('')

export const sglNumArr = arr => arr.split('').map(e=>+e)

export const isNormalFLow = (points, position) => {
    if (position == 'hor') return points.every(e=> e[0] === points[0][0]) && areConsecutive(points.map(e=> e[1]))
    else if (position == 'ver') return points.every(e=> e[1] === points[0][1]) && areConsecutive(points.map(e=> e[0]))
}

export const areCollapsed = (arr1, arr2) => {
    let bool = false;
    for (let i of arr1)
        for (let j of arr2) {
            if (i === j) bool = true
            continue
        }
    return bool
}

export const isPossibleThere = (position, coord, length ) => {
    if (position == 'ver') return coord[0] + length <= 10
    else if (position=='hor') return coord[1] + length <= 10
}

export const generateAllPoints = (point, length, position) => {
    let allPoints = []
    if (isPossibleThere(position, point, length)) {
        for (let i=0; i<length; i++) {
            if (position === 'hor') allPoints.push([point[0], point[1] + i])
            else if (position === 'ver') allPoints.push([point[0] + i, point[1]])
        }
        return allPoints;
    }
    return allPoints
}



const findNext = (r, possible) => {
    let minDist = 1000
    let target = []
    possible.forEach(dest => {
        let destRadius = dest[0] * dest[0] + dest[1] * dest[1]
        if (Math.abs(destRadius - r * r) < minDist) {
            target = dest
            minDist = destRadius - r * r
        }
    })
    return target;
}

const newCoords = point => {
    let newDirection = [[1, 0], [0, -1], [1, -1]]
    let newOnes = []
    newDirection.forEach(coord => {
        newOnes.push([point[0] + coord[0], point[1] + coord[1]])
    })
    return newOnes
}


const circle = r => {
    let current = [0, r]
    let result = []
    let final = [r, 0]
    while (JSON.stringify(current) !== JSON.stringify(final)) {
        destArray = newCoords(current)
        let target = findNext(r, destArray)        
        current = target
        result.push(current)
    }
    return result
}

let rad10 = circle(10)

const draw = arr => {
    const matrix = new Array(111).fill(false).map(() => new Array(11).fill(false));
    arr.forEach(coord => {
        matrix[coord[0]][coord[1]] = true
    })
    for (let j = 0; j < matrix.length; j++) {
        let str = ""
        for (let k = 0; k < matrix[0].length; k++) {
            if(matrix[k][j] === true)str += "  X"
            else str += "   "
        }
        console.log(`${str}\n`)
    }
}

draw(rad10)
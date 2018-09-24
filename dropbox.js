class Grid {
    constructor(n, lamps) {
        this.size = n
        this.lamps = lamps
        this.columns = {}
        this.rows = {}
        this.diagPos = {}
        this.diagNeg = {}
        this.illuminateGrid()
    }

    illuminateGrid() {
        this.lamps.forEach(lamp => this.putLamp(lamp))
    }

    putLamp(lamp) {
        let x = lamp[0]
        let y = lamp[1]
        if (this.columns[x]) this.columns[x] += 1
        else this.columns[x] = 1
        if (this.rows[y]) this.rows[y] += 1
        else this.rows[y] = 1
        if (this.diagPos[x+y]) this.diagPos[x+y] += 1
        else this.diagPos[x+y] = 1
        if (this.diagNeg[x-y]) this.diagNeg[x-y] += 1
        else this.diagNeg[x-y] = 1
    }

    removeLamp(lamp) {
        let x = lamp[0]
        let y = lamp[1]
        if (this.columns[x]) this.columns[x] -= 1
        if (this.rows[y]) this.rows[y] -= 1
        if (this.diagPos[x + y]) this.diagPos[x + y] -= 1
        if (this.diagNeg[x - y]) this.diagNeg[x - y] -= 1
        this.deleteLamp(lamp)
    }

    deleteLamp(lamp) {
        let tempLamp = this.lamps
        for (let index = 0; index < this.lamps.length; index++) {
            if(JSON.stringify(lamp)===JSON.stringify(tempLamp[index])) tempLamp.splice(index,1)
        }
        this.lamps = tempLamp;
    }

    query(x, y) {
        let removedLamps = []
        let adj = [[x,y],[x-1, y-1], [x, y-1], [x-1, y], [x+1, y+1], [x, y+1], [x+1, y], [x+1, y-1], [x-1, y+1]]
        adj.forEach(coord => {
            if (this.lamps.some(lamp => JSON.stringify(lamp)===JSON.stringify(coord))){
                removedLamps.push(coord)
                this.removeLamp(coord);
            }
        })
        let ansBool =  this.columns[x] > 0 || this.rows[y] > 0 || this.diagPos[x+y] > 0 || this.diagNeg[x-y] > 0
        removedLamps.forEach(backOn => {
            this.lamps.push(backOn)
            this.putLamp(backOn)
        })
        return ansBool;
    }

    // render() {
    //     let result = ""
    //     for (let index = 0; index < this.size; index++) {
    //         result = ""
    //         for (let i = 0; i < this.size; i++) {
    //             if(this.lamps.some(lamp => JSON.stringify(lamp)===JSON.stringify([index, i]))===true) result += " *";
    //             else result += " X"
    //         }
    //     console.log(result);
    //     }
    // }

}

let grid = new Grid(8, [[1,6], [5,6], [7,3], [3,2]])
grid.render()
console.log(grid.query(4,4))
grid.render()
console.log(grid.query(6,6))
grid.render()
console.log(grid.query(8,1))
grid.render()
console.log(grid.query(3,2))
grid.render()
console.log(grid.query(2,3))
grid.render()
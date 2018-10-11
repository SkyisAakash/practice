const customTest = require('./jsTest')
class Ring {
    constructor() {
        this.store = new Array(2)
        this.length = 0
        this.start = 0
    }

    push(el) {
        if(this.length===this.store.length) this.resize();
        this.length += 1
        this.store[this.start+this.length-1] = el;
    }

    find(index) {
        // console.log("target"+this.targetIndex(index))
        return this.store[this.targetIndex(index)]
    }

    targetIndex(index) {
        if (this.start + index > this.store.length-1) return (this.start + index - this.store.length);
        else return this.start + index;
    }

    unshift(el) {
        if(this.length===this.store.length) this.resize();
        let targetPosition = this.start - 1
        targetPosition = (targetPosition<0) ? this.store.length-targetPosition : targetPosition;
        this.start = targetPosition
        this.length += 1;
        this.store[targetPosition] = el;
    }

    resize() {
        let oldStore = this.store;
        this.store = new Array(this.length*2);
        for (let index = 0; index < oldStore.length; index++) {
            this.store[index] = oldStore[this.targetIndex(index)]
        }
        this.start = 0;
    }
}

function showRing(ring) {
    result = ""
    for (let index = 0; index < ring.length; index++) {
        result += ` ${ring.find(index)}`
    }
    console.log(result)
}

let ring = new Ring();
// console.log("length"+ring.length)
// console.log("store"+ring.store)
ring.push(1)
// console.log("length"+ring.length)
// console.log("store"+ring.store)
ring.push(2)
// console.log("length"+ring.length)
// console.log("store"+ring.store)
ring.push(3)
// console.log("length"+ring.length)
// console.log("store"+ring.store)
ring.unshift(4)
// console.log("length"+ring.length)
// console.log("store"+ring.store)
ring.unshift(0)
// console.log("store"+ring.store)
// console.log("length"+ring.length)
// console.log(ring.find(3))
ring.unshift(3)//[3,0,1,2,3,4]
// console.log("store"+ring.store)
// console.log("length"+ring.length)
// console.log(ring.find(2))
// console.log("start"+ring.start)
// console.log(ring.find(ring.length-1))
showRing(ring)

customTest(ring.find(2), 4, "Great", "Dang it shouldve been "+ring.find(2))




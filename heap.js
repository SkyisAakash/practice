

class maxHeap {
    constructor() {
        this.store = []
    }

    push(el) {
        this.store.push(el)
        this.heapifyUp(this.store.length-1)
    }

    pop() {
        return this.store[0]
    }

    parentIndex(child) {
        return Math.floor((child-1)/2)
    }

    childIndices(parent) {
        return [2*parent+1, 2*parent+2]
    }

    heapifyUp(index) {
        let parent = this.parentIndex(index)
        if(parent<0)return;
        if(this.store[parent]<this.store[index]) {
            [this.store[parent], this.store[index]] = [this.store[index], this.store[parent]]
            this.heapifyUp(parent)
        }
    }
}

let m = new maxHeap()
m.push(6)
console.log(m.store)
m.push(11)
console.log(m.store)
m.push(8)
console.log(m.store)
m.push(5)
console.log(m.store)
m.push(10)
console.log(m.store)
m.push(9)
console.log(m.store)
m.push(7)
console.log(m.store)
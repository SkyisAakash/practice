

class maxHeap {
    constructor() {
        this.store = []
    }

    push(el) {
        this.store.push(el)
        this.heapifyUp(this.store.length-1)
    }

    pop() {
        [this.store[0], this.store[this.store.length-1]] = [this.store[this.store.length-1], this.store[0]]
        let ans = this.store.pop()
        this.heapifyDown(0)
        return ans
    }

    parentIndex(child) {
        return Math.floor((child-1)/2)
    }

    childIndices(parent) {
        if(2*parent+2>this.store.length) return []
        else if(2*parent+2===this.store.length) return [2*parent+1]
        else return [2*parent+1, 2*parent+2]
    }

    heapifyUp(index) {
        let parent = this.parentIndex(index)
        if(parent<0)return;
        if(this.store[parent]<this.store[index]) {
            [this.store[parent], this.store[index]] = [this.store[index], this.store[parent]]
            this.heapifyUp(parent)
        }
    }

    heapifyDown(index) {
        let child = this.childIndices(index)
        let potentialChild;
        if (child.length===0)return;
        else if(child.length===1)potentialChild = child[0]
        else potentialChild = (this.store[child[0]]<=this.store[child[1]]) ? child[1] : child[0] //we want greater because of maxheap
        if(this.store[potentialChild]<this.store[index])return;
        else {
            [this.store[index], this.store[potentialChild]] = [this.store[potentialChild], this.store[index]]
            this.heapifyDown(potentialChild)
        }
    }
}

module.exports = maxHeap;

let m = new maxHeap()
m.push(6)
// console.log(m.store)
m.push(11)
// console.log(m.store)
m.push(8)
// console.log(m.store)
m.push(5)
// console.log(m.store)
m.push(10)
// console.log(m.store)
m.push(9)
// console.log(m.store)
m.push(7)
// console.log(m.store)
let ans = m.pop()
// console.log(ans)
// console.log(m.store)
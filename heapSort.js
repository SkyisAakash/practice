const maxHeap = require('./heap')

const heapSort = arr => {
    let heap = new maxHeap()
    arr.forEach(element => {
       heap.push(element) 
    });
    let result = []
    for (let index = 0; index < arr.length; index++) {
        let max = heap.pop()
        result.push(max)
    }
    return result.reverse();
}

// console.log(heapSort([10,4,6,23,50]))


function parentIndex(child) {
    return Math.floor((child - 1) / 2)
}

function childIndices(parent, boundary) {
    if (2 * parent + 2 > boundary) return []
    else if (2 * parent + 2 === boundary) return [2 * parent + 1]
    else return [2 * parent + 1, 2 * parent + 2]
}

function heapifyDown(index, arr, boundary) {
    let children = childIndices(index, boundary)
    let potentialChildren;
    if(children.length===0)return;
    else if (children.length===1)potentialChildren = children[0];
    else potentialChildren = (arr[children[0]]>arr[children[1]]) ? children[0] : children[1];
    if (arr[potentialChildren] < arr[index])return;
    else {
        [arr[potentialChildren], arr[index]] = [arr[index], arr[potentialChildren]]
        heapifyDown( potentialChildren, arr, boundary )
    }
}

const heapSortInPlace = arr => {
    for (let index = 1; index < arr.length; index++) {
        let parent = parentIndex(index)
        if(arr[index]>arr[parent])[arr[index],arr[parent]] = [arr[parent], arr[index]];
    }
    let boundary = arr.length
    for (let idx = arr.length-1; idx >= 0; idx--) {
        [arr[0], arr[idx]] = [arr[idx],arr[0]]
        boundary -= 1
        heapifyDown(0, arr, boundary)
    }
}

let arr = [56,87,23,1,4,3]
console.log(arr)
heapSortInPlace(arr)
console.log(arr)
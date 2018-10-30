const quicksortInPlace = (arr, start=0, end=arr.length-1) => {
    if(arr.length<=1)return;
    if(start>=end)return;
    let pivot = start+1
    let wall = start+1
    while(pivot<=end) {
        if(arr[pivot]<arr[start]){
            [arr[wall], arr[pivot]] = [arr[pivot], arr[wall]]  
            wall +=1
        }
        pivot += 1
    }
    [arr[start], arr[wall-1]] = [arr[wall-1],arr[start]]
    quicksortInPlace(arr, 0, wall-2)
    quicksortInPlace(arr, wall, end)
}

let arr = [4, 1, 3, 2, 10, 8, 9,543,12,6,3,7,34,7435,23]
console.log(arr)
quicksortInPlace(arr)
console.log(arr)

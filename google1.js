//given [3,4,5,6,7,1,2], 4
//ans 1
// Question 2: Search in a rotated, sorted array

// Given a rotated sorted array of integers, and a number n, write an algorithm to find the number in the array.
// Sorted Array: [1, 2, 3, 4, 5, 6]
// Rotated Sorted Array[3, 4, 5, 6, 1, 2]
//     (Please note we do not know the number of places by which the array has been rotated, we just know that the array is rotated)

// The fastest solution we can get here to find a number in the array would be a binary search.However, binary search requires array to be sorted(unrotated).We can still use the same strategy by somehow finding the biggest element of the array instead of using the middle element of the array as pivot.


// If we manage to do that then the operation would take O(logn) time as finding a pivot and then performing binary search would be separate loops and hence will not affect time complexity of binary search.


// Now to find that pivot(index of biggest element) in the array…
// What we need here is an element of the array which has a smaller element on both sides of it.

// We can again use the binary search strategy to find this element.


//     Let's say we start by middle element

// If middle element has a smaller element next to it then this middle element’s index is our pivot
// If middle element has a bigger element in the previous location then our answer is previous index
// Let’s say none of the above cases are true, that means middle element is some random number in array i.e.neither smallest or biggest.
// In this case we need to check if the first element of the array is smaller than the middle element.If it is that means the number that we are looking for (i.e.the largest) is somewhere in the right half of the array, for which we can recursively call the same function that finds the pivot on the right half of the array.
// On the other hand, if the first element was larger than that means our largest number lies somewhere on the left half of array so we can call the same recursive function on the left side of the array.

// Here is another better approach to make it work in one cycle of binary search that I realized as I started coding it.


// We can check if the middle element is the key, if it is return middle.
// If not, then we check if the first element of the array is less than middle
// If it is then it means the left half is sorted.In this case we have to check if the key is in the range of first element and middle element, if it is then we can call the same binary search on the left half, if not then we can call the same function on the right half.
// If the first element of array is greater than middle then the right half must be sorted.In this case we can check if the key lies between range of middle and last element of the array, if it is then we can perform same binary search for right half of array and if not then we need to perform binary search on the left half of the array.
// Here is the code.


const findKey = (arr, start, end, key) => {
    let middle = Math.floor((start + end) / 2)
    if (arr[middle] === key) return middle;
    if (arr[start] < arr[middle]) {
        if (arr[start] <= key && arr[middle] > key) {
            return findKey(arr, start, middle - 1, key)
        } else {
            return findKey(arr, middle + 1, end, key)
        }
    }
    else {
        if (key > arr[middle] && key <= array[end]) {
            return findKey(arr, middle + 1, end, key)
        } else {
            return findKey(arr, start, middle - 1, key)
        }
    }
}

console.log(findKey([3, 4, 5, 6, 7, 1, 2], 0, 6, 5))
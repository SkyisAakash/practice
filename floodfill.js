// This problem has first of all two major input cases as follows:
// The color on the selected bitmap and the selected color are same
// The color on the selected bitmap and the selected color are different

// We do not need to worry about the first case, returning the same grid unchanged would be the answer in that case as it would mean user wants to flood the blocks that are already flooded.


// For the second case, we can do something like this:
// Recursive Approach:

// Let’s say we make a function that changes the color of the block in the grid at the location passed in as input of function.

// Now, we can use the same function recursively and call the same function on adjacent blocks in directions[0, -1], [0, 1], [1, 0] and[-1, 0] but only for those which are not boundary blocks. (i.e.Having the same color as the color given in the input).

// This approach will also take care of the fact where it should not change the color of the center block once again where we started as that block would have changed color beforehand and hence now will be considered as a boundary block.

// We can break the recursive loop when the function does not encounter any adjacent blocks that are not boundary blocks.

// Simple explanation of this problem would be considering it as a big hall divided into compartments each having a door for water to escape.The behaviour of water would be the same for each compartment which is to fill up the adjacent compartments but not the compartment where its coming from as it is already filled.

// Basically we can compare this approach to a Breadth First Search for a tree.Where we can consider the root node to be the block where user puts the pointer and the adjacent blocks can be considered as children of the root node and so on.Following breadth first search, we can color all nodes that we encounter and hence operation would take O(n) time.

let grid = [["w", "b", "w", "b"],
["b", "b", "b", "w"],
["w", "b", "w", "w"],
["w", "b", "b", "w"]]
let userInput1 = { location: [3, 0], color: "b" }
let userInput2 = { location: [1, 1], color: "b" }
let userInput3 = { location: [0, 3], color: "b" }

const flood = (grid, userInput) => {
    let row = userInput.location[0]
    let col = userInput.location[1]
    let color = userInput.color
    let boundary = (color === "w") ? "b" : "w";
    if (grid[row][col] === color) return;
    fillBlock([row, col], grid, color)
}

const fillBlock = (block, grid, color) => {
    let subRow = block[0]
    let subCol = block[1]
    let neighbours = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    grid[subRow][subCol] = color
    neighbours.forEach(neighbour => {
        newLoc = [neighbour[0] + subRow, neighbour[1] + subCol]
        if (newLoc[0] >= grid.length || newLoc[1] >= grid[0].length || newLoc[0] < 0 || newLoc[1] < 0) return;
        if (grid[newLoc[0]][newLoc[1]] !== color) fillBlock(newLoc, grid, color);
    })
}

flood(grid, userInput2)


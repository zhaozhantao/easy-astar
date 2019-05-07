# easy-astar
An a* search path library.!

# Usage

    // require js file
    const easyAStar = require("easy-astar").easyAStar;

    // your custom data, 0 means road, 1 means wall.
    const map = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]

    // find path 0,0 to 9,9
    const startPos = {x:0,y:0};
    const endPos = {x:9,y:9};
    const result = easyAStar((x, y)=>{
        if (map[x] && map[x][y] === 0) {
            return true; // 0 means road
        } else {
            return false; // 1 means wall
        }
    }, startPos, endPos);
    console.log(result);

# TypeScript support
yes
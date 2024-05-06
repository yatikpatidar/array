const flatten = require('../flatten')
const nestedArray = [1, [2], [3, [[4]]]];

let result = flatten( nestedArray)
if (result.length != 0) {
    console.log("before using flatten method our array is ", nestedArray)
    console.log("after using flatten method our array is ", result)

}


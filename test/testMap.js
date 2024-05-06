const map = require("../map")

const items = [1, 2, 3, 4, 5, 5];

console.log("before calling map function our items is :- ", items)

let result = map(items, (element) => {
    return element ** 2           // in callback we use to square value of elements
})

if (result.length != 0) {
    console.log("after calling map function our items is :- ", result)
}





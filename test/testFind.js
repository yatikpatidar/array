find = require('../find')

const items = [1, 2, 3, 4, 5, 5]

let result = find(items, (element) => {
    if (element > 3) {
        return element
    }
})

if (result.length != 0) {
    console.log("Our input array is :- ", items)
    console.log("In above find method we are finding element greater than 3 :- ", result)
}
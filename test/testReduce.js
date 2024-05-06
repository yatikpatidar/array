const reduce = require('../reduce')

const items = [1, 2, 3, 4, 5, 5]


let sum = reduce(items, (accumulator, currentValue) => {
    return accumulator + currentValue                       // here we are trying to find sum of all items
}, 0)

if (sum != NaN) {
    console.log("our items is :- ", items)
    console.log("using reduce function we are finding sum of all items :-", sum)
}
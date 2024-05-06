const each = require("../each")

const items = [1, 2, 3, 4, 5, 5];

console.log("before calling each function our items is :- ", items)

each(items, (array, index) => {
    array[index] *= 2                // in callback we use to double value of elements
});

console.log("after calling each function our items is :- ", items)
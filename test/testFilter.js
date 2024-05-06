
const filter = require('../filter')

const items = [1, 2, 3, 4, 5, 5]

let evenArray = filter(items, (element) => {
    if (element % 2 == 0) {
        return element              // here in this callback we are finding even element
    }
})

if (evenArray.length != 0) {
    console.log("Our input array is :- ", items)
    console.log("we are finding even element in our items array", evenArray);
}

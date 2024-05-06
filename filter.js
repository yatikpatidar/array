function filter(array, callback) {
    if (Array.isArray(array) && (typeof (callback) === 'function')) {

        const size = array.length
        let filteredArray = []

        let result = undefined
        for (let index = 0; index < size; index++) {
            result = callback(array[index])

            if (result != undefined) {
                filteredArray.push(array[index])
            }
        }
        return filteredArray
    } else {
        console.log("please check once before passing array as an argument  or check once callback function")
        return []
    }
}

module.exports = filter
function map(array, callback) {
    if (Array.isArray(array) && (typeof (callback) === 'function')) {

        const size = array.length
        let result = []
        for (let index = 0; index < size; index++) {
            result.push(callback(array[index]))
        }
        return result;
    } else {
        console.log("please check once before passing array as an argument  or check once callback function")
        return []
    }
}

module.exports = map
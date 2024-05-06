function find(array, callback) {

    if (Array.isArray(array) && (typeof (callback) === 'function')) {

        let size = array.length
        let res = undefined;

        for (let index = 0; index < size; index++) {
            res = callback(array[index])
            if (res != undefined) {
                return res
            }
        }
        return res      // here res is undefined

    } else {
        console.log("please check once before passing array as an argument  or check once callback function")
        return []
    }
}

module.exports = find
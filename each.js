function each(array, callback) {
    if (Array.isArray(array) && (typeof (callback) === 'function')) {
        const size = array.length;

        for (let index = 0; index < size; index++) {
            callback(array, index);
        }
    } else {
        console.log("please check once before passing array as an argument  or check once callback function")
    }
}

module.exports = each
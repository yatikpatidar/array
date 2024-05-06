function reduce(array, callback, initialValue) {
    if (Array.isArray(array) && (typeof (callback) === 'function')) {

        let size = array.length;
        let accumulator;
        let loopStart;

        if (initialValue != undefined) {
            accumulator = initialValue;
            loopStart = 0;
        } else {
            accumulator = array[0];
            loopStart = 1
        }

        for (let index = loopStart; index < size; index++) {
            accumulator = callback(accumulator, array[index]);
        }
        return accumulator

    } else {
        console.log("please check once before passing array as an argument ")
        return NaN
    }
}


module.exports = reduce;
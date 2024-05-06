function flatten(elements) {
    if (Array.isArray(elements)) {
        let result = []
        makeFlatten(elements, result)
        return result;
    } else {
        console.log("please check once before passing array as an argument ")
        return []
    }

}

function makeFlatten(elements, result) {
    const size = elements.length

    for (let i = 0; i < size; i++) {

        if (Array.isArray(elements[i])) {
            makeFlatten(elements[i], result)
        }
        else {
            result.push(elements[i])
        }
    }
}

module.exports = flatten
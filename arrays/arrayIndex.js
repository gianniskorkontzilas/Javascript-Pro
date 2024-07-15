const integers = [1, 2, 3, 5, 6, 5, 7, 3, 5, 8, 9] 

function getIndexes(arr, x) {
    const results = []

    arr.forEach(function(element, index, array) {
        if (element === x) {
            results.push(index)
        }
    })

    return results
}

const results = getIndexes(integers, 5)
console.log(results)
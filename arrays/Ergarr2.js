let arr = [[[1, 2, 3], [4, 5]]];
let nested = nestedArray(arr);
function nestedArray(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
       if (Array.isArray(arr[i])) {
          arr2 = arr2.concat(nestedArray(arr[i]))   
        } else {
        arr2.push(arr[i])
    } 
    }
    return arr2;
}
console.log(nested)

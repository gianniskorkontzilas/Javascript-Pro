let arr = [4, 5, 7, 8]
let subarrsize = 2;
let subarrs = splitArr(arr, subarrsize)

function splitArr(arr,subarrsize) {
 let s = [];
    for (let i = 0; i < arr.length; i++) {
        s.push(arr.slice(i, i + subarrsize));

    }

    return s;
}

console.log(subarrs)
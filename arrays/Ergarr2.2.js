let arr = [1, 2, 3 , 4, 5]
let arr2 = [1, 3, 5, 6, 8]
function comElements(arr, arr2) {
let arr3 = []
j=0;

for (let i = 0; i < arr.length; i++) {
    if(arr2.indexOf(arr[i]) != -1)
    arr3[j++] = arr[i]
}

return arr3;

}

console.log(comElements(arr,arr2))
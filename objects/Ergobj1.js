let obj = {
    a:1,
    b:2,
    c:3,
    d:4
}
let keys =["a", "b", "c", "d"]

let oKeys = objKeys(obj,keys)

function objKeys (obj,keys) {
let arr = {};

keys.forEach(key => {
    

    if(obj.hasOwnProperty(key)) {
        arr[key] = obj[key];

    }
});

return arr;
}

console.log(oKeys)
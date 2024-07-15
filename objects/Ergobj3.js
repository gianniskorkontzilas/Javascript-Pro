let obj = { a: 1, b: 2, c: 3 };
let transformedObj = transformObject(obj, uppercaseKeys);

function uppercaseKeys(key) {
    return key.toUpperCase();
}

function transformObject(obj, uppercaseKeys) {
    let transObject = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            transObject[key] = uppercaseKeys(key);
        }
    }

    return transObject;
}

console.log(transformedObj)
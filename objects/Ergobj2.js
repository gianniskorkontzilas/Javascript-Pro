let obj = {"a":1, "b":2, "c":4}
     
let map = mapping(obj)

function mapping(obj) {
    let obj2 = {};


    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          obj2[key] = obj[key] * 2;
        }
      }

      return(obj2)
      
}

console.log(map)
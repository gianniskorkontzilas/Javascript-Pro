const colors1 = ["red", "black", "white"]

const colors2= new Array["Black", "White", "Red"]

colors1.splice(0, 0, "Green")  //Insert
colors2.splice(1, 1, "Green")  //Update

let colors = colors2.splice(1)        // deletes starting from index 1 till end
console.log(colors2)
console.log(colors)

let startIndex = 0
let elementsToBeRomeved = 1
let color = colors1.splice(startIndex, elementsToBeRomeved)      
console.log(color)
console.log(colors1)

let index1 = colors1.indexOf("Red")
colors1.splice(index1, 1)

const str = colors1.join(", ")
let i = colors1.indexOf("red")      // -1 if not exists


if (colors2.includes("white")) {
    console.log("white Exists")
}


let newLength = colors2.push("Yellow")       // inserts last
console.log(colors2)

const popped = colors2.pop()        // gets out last element
console.log(popped)

const shifted = colors1.shift()    //gets out the first element
colors.unshift(shifted)            // inserts front

const mySlice = colors1.slice(0,2)
console.log(mySlice)
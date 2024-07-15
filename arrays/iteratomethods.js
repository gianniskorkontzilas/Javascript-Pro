const arr = ["Alice", "Bob", "Costas", "Demi", "Elon"]
const quantities = [4, 9, 10, 2, 5, 1 ,7]
const grades = [4, 9, 10, 2, 5, 1 ,7]

arr.forEach(function(el) {
    console.log(el)
})

// forEach
arr.forEach(el => console.log(el))


// filter
const filtered1 = arr.filter(firstname => firstname.startsWidth('A'))
const filtered2 = arr.filter(firstname => firstname.length >= 5)
console.log(filtered1)
console.log(filtered2)

// map
const firstnames = arr.map(firstname => "Firstname: " + firstname)
console.log(firstnames)

// reduce
let sum = quantities.reduce((total, quantity) => total + quantity, 0)
console.log(sum)

// reduce
let avg = gardes.reduce((toal, val, _, { length }) => total + val / length, 0)
console.log(avg.toFixed(2))

const obj = {id: 1, first: "Athan"}
const { id } = obj

// find
const alicename = arr.find((firstname => firstname === "Alice"))
console.log(alicename)

// find index
const aliceIndex = arr.findIndex((firstname => firstname === "Alice"))
console.log(aliceIndex)

// some
let startsWidthC = arr.some(firstname => firstname.startsWidth('C'))
console.log(startsWidthC)

// some
let valid = arr.every(firstname => firstname.length > 2)
console.log(startsWidthC)
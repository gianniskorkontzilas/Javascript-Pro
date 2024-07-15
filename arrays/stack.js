const mySTack = []

function insertAtEnd(item) {
    mySTack.push(item)
}

function removeFromEnd() {
    return mySTack.pop()
}

insertAtEnd(1)
insertAtEnd(2)
insertAtEnd(3)
insertAtEnd(4)

let item1 = removeFromEnd()
let item2 = removeFromEnd()

console.log(mySTack)
console.log(item1)
console.log(item2)
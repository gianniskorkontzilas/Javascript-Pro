const str1 = 'aueba'
const str2 = 'AURB'
let str3
let str4

aueb.replace("Uni", "University")




const arr = aueb.split("")

if (str1 > str2) {
    console.log(`${str1} GT ${str2}`) 
} else if (str1 < str2) {
    console.log(`${str1} LT ${str2}`)    
} else {
    console.log(`${str1} EQ ${str2}`)
}

function equalIgnoreCase(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase()
}

console.log(equalIgnoreCase(str1, str2))

console.log(str1.indexOf('au'))
console.log(str1.lastIndexOf('a'))
console.log(str1.charAt(1))


console.log(str1.length)

console.log(str1.substring(1, 4))  // startIndex, endIndex - 1
console.log(str1.slice(1, 4))      // startIndex, endIndex - 1

console.log(str2.trim())

str3 = str1 + str2                 // concat
str4 = str1.concat(str2)
let doubles = [1, 2, 3 ,5 ,8 ,2 ,2, 5, 5 ,5, 9, 8, 6 ]
const uniques = findUnique(doubles);
function findUnique(doubles) {
    let newArr = []
    doubles.forEach(element => {
    if(!newArr.includes(element)) {
        newArr.push(element);
    }
        
    });
    return newArr;
    
}

console.log(uniques);
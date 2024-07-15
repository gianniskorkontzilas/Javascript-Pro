const people = [
    {name: 'Alice', age:30},
    {name: 'Bob', age:25},
    {name: 'Charlie', age:35},
]

let filtered = people.filter(age => age.age < 30);

console.log(filtered);

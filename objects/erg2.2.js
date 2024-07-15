const people = [
    {name: 'Alice', age:30},
    {name: 'Bob', age:25},
    {name: 'Charlie', age:35},
]

let names =['all', ...new Set(people.map((name ) => name.name))];

console.log(names);

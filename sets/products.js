const products = [
    {productName: "Apples", city: "Lamia"},
    {productName: "Oranges", city: "Athens"},
    {productName: "Honey", city: "Volos"},
    {productName: "Honey", city: "Volos"},
]

const cities = ['all', ...newSet(products.map(p => p.city))]
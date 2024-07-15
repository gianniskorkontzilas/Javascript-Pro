const products = []

class ProductAlreadyExiststError extends Error {
    constructor(message) {
        super(message)
        this.name = "Erroe123"
    }
}

function insert(arr, product) {
    if (!arr || !product) return

    try {
        if(arr.includes(product)) {
            throw new ProductAlreadyExiststError("Product exists")//Error"product exists")
        } 
            arr.push(product)
            return true
    }   catch (error) {
        console.log("Product already exists")
        throw error
    }
}
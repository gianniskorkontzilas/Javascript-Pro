const book = {author: {firstname: "th.", lastname: "Androutso"}};
book.author.title = "Dr.";
delete book.author.firstname;

console.log(book)

if (book.hasOwnProperty('author')) {
    console.log(book.author)
}

for (const prop in book.author) {
    console.log(`${prop} : ${book.author[prop]}`)
}

for (let [k, v] of Object.entries(book.author)) {
    console.log(`${k} : ${v}`)
}



//const clonedBook = {}
   // for (let key of Object.keys(book)) { 
      //   clonedBook[key] = book.author[key]   
    //}

  //  Object.assign(clonedBook, book)
    //console.log(clonedBook)

    const clonedBook = {...book}
    console.log(clonedBook)
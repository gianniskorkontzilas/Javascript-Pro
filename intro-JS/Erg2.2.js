let user = {
    name: "giannis",
    age: 20,
    city: "Athens",
    hello: function() {
        console.log("Hello " + this.name + "!");
    }
};

user.hello(); 

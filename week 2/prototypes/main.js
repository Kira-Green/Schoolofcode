function Person(name){
    this.name = name;
    this.greeting = function greeting () {
        // alert("Hello my name is " + this.name);
        console.log("Hello my name is " + this.name);
            }
}

var chris = new Person("chris");
chris.greeting()

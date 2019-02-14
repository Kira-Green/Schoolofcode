// constructor function

function Person(name){
    this.name = name;
    this.greeting = function greeting () {
        // alert("Hello my name is " + this.name);
        console.log("Hello my name is " + this.name);
            }
}

var chris = new Person("chris");
chris.greeting()

function Foo() {
    this.a = 1;
    this.b = 2;
}

var myFoo = new Foo();    // inherits from Foo values for a and b 

Foo.prototype.b = 3;   // updates the prototype to existing but doesn't change values that are there 
// doesn't really seem to do anything and apparently not used.....




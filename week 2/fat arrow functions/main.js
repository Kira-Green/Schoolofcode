//  normal function

function add2letters (a,b) {
    return a + b;
}

//fat arrow function 
//use const 
const addtwoletters = (a,b) =>{
    return a + b;
}
// there is implicit return
const fataddtwoletters = (a, b) =>  a + b; // this is same as above don't use curly brackets

console.log(add2letters("s", "t"))
console.log(addtwoletters("s", "t"))

function addCap(a, b) {
    let capA = a.toUpperCase()
    return capA + b;
}

addCap("k", "g")

const cap2letters = (a, b) => {
    let capA = a.toUpperCase()
    return capA + b;                                // because of the let can't do without the curly brackets
}

const add2numbers = (x, y) => x + y
console.log(add2numbers(2,5))
const add2 = x => x + 2
console.log(add2(5))

const log2 = () => 2
console.log(log2())

//use arrows on the curry function sum3

const sum3 = x => y => z => x + y + z;   // then sum3(3)(4)(5) to call it ;


const bootcamp ={
    title: "cohort 2",
    students: ["1", "2", "3"],
    showtitle() {                                   //instead of function () {console.log(this.title)}
        console.log(this.title)
    },
    listcoders: function () {
        this.students.forEach(function (student){
            console.log(this)
            console.log(this.title,student)                 // but this refers to bootcamp so need to bind to the this from outside
        }.bind(this) )
    }
}

bootcamp.listcoders()
// another way

const bootcamp = {
    title: "cohort 2",
    students: ["1", "2", "3"],
    showtitle() {                                   //instead of function () {console.log(this.title)}
        console.log(this.title)
    },
    listcoders: function () {
        var self = this
        this.students.forEach(function (student) {
            console.log(self.title, student)                 // accesses this via self
        })
    }
}

bootcamp.listcoders()

// change to fat arrow function 
    

const bootcamp = {
    title: "cohort 2",
    students: ["1", "2", "3"],
    showtitle() {                                   //instead of function () {console.log(this.title)}
        console.log(this.title)
    },
    listcoders  () {
                this.students.forEach (student => {
            console.log(this.title, student)                 
        })
    }
}

bootcamp.listcoders()

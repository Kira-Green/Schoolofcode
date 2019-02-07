// select outer box create new div element
// set attributes - id =inner , innertext = hello bootcampers
// append to outer box as a child 
function createOrangeDiv() {
    var outer = document.getElementById('outer');
    var inner = document.createElement('div');
    inner.setAttribute('id','inner');
    inner.innerText='Hello Bootcampers';
    outer.appendChild(inner);
}

function changeColor(color) {
    var inner = document.getElementById('inner')
    inner.style.backgroundColor = color;
}

function buttonClick() {

    console.log("you clicked the button");
    var input = document.getElementById("myFirstInput");
    var value = input.value;
    console.log("My Input Field", input);
    console.log("My value", value);
    var output=document.getElementById("output");
    output.innerHTML = `Hello, ${value}!`;

}

var button = document.getElementById("sayHello");
button.addEventListener(`click`, buttonClick)  
// use instead of onclick

var inner = document.getElementById("inner");
inner.addEventListener(`click`, function() {
    console.log("inner clicked");
})
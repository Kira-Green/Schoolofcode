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
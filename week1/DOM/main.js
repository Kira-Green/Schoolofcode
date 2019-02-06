// select outer box create new div element
// set attributes - id =inner , innertext = hello bootcampers
// append to outer box as a child 

var outer = document.getElementById('outer');
var inner = document.createElement('div');
inner.setAttribute('id','inner');
inner.innerText='Hello Bootcampers';
outer.appendChild(inner);
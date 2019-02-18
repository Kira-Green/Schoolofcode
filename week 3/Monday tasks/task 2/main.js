var content = document.createElement("div");

content.setAttribute("id", "content");
var header = document.createElement("h1");
header.setAttribute("id", "header");
var image = document.createElement("img");
image.setAttribute("id", "image");

document.body.appendChild(content);

content.appendChild(header);
header.innerText = "School of Code";
content.appendChild(image);
image.setAttribute("src","https://images.pexels.com/photos/5149/easter-eggs.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");


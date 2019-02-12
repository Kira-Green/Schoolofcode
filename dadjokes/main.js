// fetch("https://icanhazdadjoke.com/api",options)
//   .then(function(response) {
// return  response.json()
// }) 
//   .then(function(json)
//  { console.log(json)
// })```

// fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=1")
//     .then(function (response) { return response.json() })
//     .then(function (json) { return console.log(json) })
//     .catch(function (error) { console.error("myError", error) });

function getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=1")
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            const quoteDiv = document.getElementById("quote");
            quoteDiv.innerText = response[0].quote;
            const authorDiv = document.getElementById("author");
            authorDiv.innerText = response[0].character;
        })

        .catch(function (error) {
            console.error("myError", error);
        });
}

getQuote();
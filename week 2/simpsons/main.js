// delare variables
const quoteDiv = document.getElementById("quote");
const authorDiv = document.getElementById("author");
const leftImage = document.getElementById("leftImage");
const rightImage = document.getElementById("rightImage");

// set both image tags to hidded, setting css style inline in javascript
rightImage.setAttribute("style", "visibility: hidden;");
leftImage.setAttribute("style", "visibility: hidden;");

// this function just extracts the json from the response
function extractJson(response) {
    return response.json();
}

// this function updates the html page contents and is called by the getQuote function below
function updatePage(response) {
    // these two lines update the quote and author divs by id
    quoteDiv.innerText = `"${response[0].quote}"`;
    authorDiv.innerText = `- ${response[0].character}`;

    // this sets the imageOrient from the characterDirection given by the api
    imageOrient = response[0].characterDirection;

    // this if checks the imageOrient/characterDirection and changes the page as needed
    if (imageOrient === "Left") {
        // this setAttribute changes the inline style tag to visible
        leftImage.setAttribute("style", "visibility: visible;");

        // these two lines set the src url and the alt to character name.
        leftImage.src = response[0].image;
        leftImage.alt = response[0].character;
    } else {
        // this is the same as above but for the right image
        rightImage.setAttribute("style", "visibility: visible;");
        rightImage.src = response[0].image;
        rightImage.alt = response[0].character;
    }
}

// this function get the data using the url and passes it to the updatePage function
function getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=1")
        .then(extractJson)
        .then(updatePage)
        .catch(error => console.error("Error", error));
}

// finally this calls all of it when the page is run
getQuote();




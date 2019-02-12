
function getchar() {
    fetch("https://swapi.co/api/people/1/")
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            const charDiv = document.getElementById("character");
            charDiv.innerText = response.name;
            const heightDiv = document.getElementById("height");
            heightDiv.innerText = `Height:  ${response.height}`;
            const massDiv = document.getElementById("mass");
            massDiv.innerText = `Mass:  ${response.mass}`;
            // home = response.homeworld;
            
        // })
        // .then(function (home){
        //     console.log(home)
        
            fetch(response.homeworld)
            .then(function(response2){
                return response2.json()
                
            })
            .then(function (response2) {
                console.log(response2.name)
                const homeDiv = document.getElementById("homeworld");
                homeDiv.innerText = `Homeworld: ${response2.name}`;
            })
        })

        .catch(function (error) {
            console.error("myError", error);
        });
}

getchar();
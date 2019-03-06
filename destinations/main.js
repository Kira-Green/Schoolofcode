function getdest() {
    fetch("192.168.0.91:3000/england")
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            const countryDiv = document.getElementById("country");
            countryDiv.innerText = "England";
            const cityDiv = document.getElementById("city");
            citytDiv.innerText = `City:  ${response.city}`;
            // const massDiv = document.getElementById("mass");
            // massDiv.innerText = `Mass:  ${response.mass}`;
            // // home = response.homeworld;

            // })
            // .then(function (home){
            //     console.log(home)

           
                // .then(function (response2) {
                //     console.log(response2.name)
                //     const homeDiv = document.getElementById("homeworld");
                //     homeDiv.innerText = `Homeworld: ${response2.name}`;
                // })
        })

        .catch(function (error) {
            console.error("myError", error);
        });
}

getdest();
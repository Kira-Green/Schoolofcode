
let toppingsList = [
    {name: "cheese", price: 0.5, quantity: 4},
    {name: "salad", price: 0.5, quantity: 6},
    {name: "jalapeno", price: 0.5, quantity: 3}
];
let saucesList = [
    {name: "nacho cheese", price: 0.3, quantity: 4},
    {name: "bbq", price: 0.3, quantity: 6},
    {name: "sweet chilli", price: 0.3, quantity: 3}
];
let pattiesList = [
    {name: "beef", price: 2},
    {name: "chicken", price: 3}
];

function total(array) {
var totalPrice = 0;
// take an array
// iterate over the array and add up the prices
// return the total price: 
for( i = 0; i < array.length; i++) {
    totalPrice = totalPrice + array[i].price*array[i].quantity;
    }
    return totalPrice.toFixed(2);

}
var totalToppings = total(toppingsList);
console.log(totalToppings);

var totalSauces = total(saucesList);
console.log(totalSauces);
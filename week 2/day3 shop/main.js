//our bakery
//balance to track money we have
let balance = 0;

//we want to sell different items
//items will all have :
//price 
//name
//stock
//calorie count
//type 
function Item(name, price, stock, calorieCount, type) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.calorieCount = calorieCount;
    this.type = type;

    
    //we want a function to give an item description
    // name, cost, stock, caloriecount and type 
    this.describe = function() {
        const description = `${this.name}: £${this.price.toFixed(2)} ${this.calorieCount}kcal ${this.type} - ${this.stock}`
        console.log(description);
    }   
    
    
    //we want a function to be able to sell an item 
    //  check stock levels are enough for quantity
    //  if not enough handle situation
    //  give away stock 
    // take in money = price *quantity
    //
    
    this.sell = function(quantity){
        if (this.stock < quantity){
            console.log(`we don't have ${quantity} x ${this.name} right now, choose less`)
            return;
        }
        this.stock -= quantity;
        const cost = this.price * quantity;
        balance += cost;
    }
}

const bread = new Item("Artisan Bread", 2.5, 10, 500, "hot")
const doughnut = new Item("Jam Filled doughnut", 0.5, 20, 800, "hot")
const croissant = new Item( "Plain Croissant", 1.75, 5, 600, "hot")
const items = [bread, doughnut, croissant]

function printDescription(item) {
 item.describe() ;  
}
items.forEach(printDescription);
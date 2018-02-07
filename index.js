var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(itemName) {
var getCart= [] 
var itemPrice = Math.floor(Math.random() * 100)
cart.push ({[itemName]:itemPrice})
console.log (itemName + " has been added to your cart.")
return cart
}

function viewCart () {
   var newCart = []
   var price = Math.floor(Math.random() * 100)
   if (cart.length=== 0) {
   return console.log("Your shopping cart is empty.")
  }
  
  for (var i = 0; i < cart.length; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[i];
    let price = itemAndPrice[item];
    newCart.push(`${item} at $${price}`)
  
  if (cart.length===1) { 
    return console.log("In your cart, you have " + newCart[0] + "." );
  }
  
  else if (cart.length===2) {
    return console.log ("In your cart, you have " + 
    newCart.join(" and ") + ".")
  }

  else if (cart.length>=3){
    var last= newCart.pop()
    var newCart1= newCart.join(`, `)
   return console.log(`In your cart, you have ${newCart1}
   , and ${last}.`)
  }
  }   
} 

function total() {
  for (var i = 0; i < cart.length; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[i];
    let price = itemAndPrice[item];
    newCart.push(`${item} at $${price}`)
    sum(price)
    }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

// THE CONTEXT
// In the provided code, there's an array named shoppingCart representing a user's shopping cart with items containing 'name', 'price', and 'quantity' properties.
// The current code calculates the total price of items in the shopping cart without using functions.

// THE PROBLEM
// - This code works only for this specific shopping cart. But we want to be able to compute the total price for any shopping cart

// YOUR JOB
// Your task is to refactor the code by extracting the logic for calculating the total price into a reusable function.
// Write a function named calculateTotalPrice that takes the shoppingCart array as a parameter and returns the total price.

// TO CHECK
// Check that your code still produce the same result
// Check that your code can work with myny shopping carts

function calculateTotalPrice(cart) {
  let totalPrice = 0;
  for (let item of cart) {
    totalPrice += item.price * item.quantity;
  }
  return totalPrice;
}

let shoppingCart = [
  { name: "Apples", price: 2.5, quantity: 3 },
  { name: "Bananas", price: 1.5, quantity: 2 },
  { name: "Oranges", price: 3, quantity: 1 },
];

console.log("Total price:", calculateTotalPrice(shoppingCart));

// Calculate total price without using functions
// let totalPrice = 0;
// for (let item of shoppingCart) {
//   totalPrice += item.price * item.quantity;
// }
// console.log("Total price:", totalPrice);

let anotherCart = [
  { name: "Milk", price: 1.2, quantity: 2 },
  { name: "Bread", price: 2, quantity: 1 },
  { name: "Eggs", price: 0.5, quantity: 12 }
];

console.log("Total price for another cart:", calculateTotalPrice(anotherCart));
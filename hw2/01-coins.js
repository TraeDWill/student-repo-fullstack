/** Exercise 01 - Coins * */

/* eslint-disable no-console */

function calculateChange(amount) {
  // If amount is larger than 100, return an error message
  if (amount > 100) {
    return 'Error: the number is too large';
  }

  let remainder = amount * 100;
  const coins = {};

  // Calculate the number of each coin type
  if (Math.floor(remainder / 100) === 1) {
    coins.dollar = 1;
  } else {
    coins.dollars = Math.floor(remainder / 100);
  }
  remainder %= 100;

  if (Math.floor(remainder / 25) === 1) {
    coins.quarter = 1;
  } else {
    coins.quarters = Math.floor(remainder / 25);
  }
  remainder %= 25;

  if (Math.floor(remainder / 10) === 1) {
    coins.dime = 1;
  } else {
    coins.dimes = Math.floor(remainder / 10);
  }
  remainder %= 10;

  if (Math.floor(remainder / 5) === 1) {
    coins.nickel = 1;
  } else {
    coins.nickels = Math.floor(remainder / 5);
  }
  remainder %= 5;

  if (remainder === 1) {
    coins.penny = 1;
  } else {
    coins.pennies = Math.floor(remainder);
  }

  return coins;
}

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here
console.log(calculateChange(0.99));
console.log(calculateChange(100));
console.log(calculateChange(0.01));
console.log(calculateChange(0.00));
console.log(calculateChange(1.41));

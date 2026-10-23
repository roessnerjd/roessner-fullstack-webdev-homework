/** Exercise 01 - Coins **/

// Add your function here

function calculateChange(amount) {
  // insure value is number
  if (typeof amount !== "number" || !Number.isFinite(amount)) {
    return "Error: invalid number";
  }

  // insure value is not negative
  if (amount < 0) {
    return "Error: the number cannot be negative";
  }

  // insure value is less than 100
  if (amount > 100) {
    return "Error: the number is too large";
  }

  // convert dollar amount into cents amount: $1 -> 100 cents
  let cents = Math.round(amount * 100);

  // start with largest denomination, dollars, then work down:
  // dollars -> quarters -> dimes -> nickels -> pennies (remaining cents)
  const dollars = Math.floor(cents / 100);
  cents %= 100;

  const quarters = Math.floor(cents / 25);
  cents %= 25;

  const dimes = Math.floor(cents / 10);
  cents %= 10;

  const nickels = Math.floor(cents / 5);
  cents %= 5;

  const pennies = cents;

  // format coin counts into descriptions
  const result = [];

  // single names for 1, plural for multiple
  if (dollars > 0) {
    result.push(`${dollars} ${dollars === 1 ? "dollar" : "dollars"}`);
  }

  if (quarters > 0) {
    result.push(`${quarters} ${quarters === 1 ? "quarter" : "quarters"}`);
  }

  if (dimes > 0) {
    result.push(`${dimes} ${dimes === 1 ? "dime" : "dimes"}`);
  }

  if (nickels > 0) {
    result.push(`${nickels} ${nickels === 1 ? "nickel" : "nickels"}`);
  }

  if (pennies > 0) {
    result.push(`${pennies} ${pennies === 1 ? "penny" : "pennies"}`);
  }

  if (result.length === 0) {
    return "0 dollars";
  }

  return result.join(", ");
}

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here
console.log(calculateChange(-1));
// -1 -> Error: the number cannot be negative
console.log(calculateChange("hello"));
// "hello" -> Error: invalid number
console.log(calculateChange("$4.62"));
// "4.62" -> Error: invalid number
console.log(calculateChange(null));
// null -> Error: invalid number

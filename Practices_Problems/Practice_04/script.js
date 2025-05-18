// apply offer of 10% off on each item of array & change array with final price

// let prices = [250, 620, 300, 970, 50];
// let offer;
// for(let i = 0; i < prices.length; i++) {
//      offer = prices[i]/10;
//      prices[i] -= offer;
//      console.log(prices[i]);
// }

// console.log(prices);

let company = ["Microsoft", "google", "bloomberg", "IBM", "Uber", "Netflix"];
console.log(company);

// Remove first company from array
console.log(company.shift());
console.log(company);

// Remove Uber and replace it with OLA
company.splice(3, 1, "OLA");
console.log(company);

// Add Amazon at the end
company.push("Amazon");
console.log(company);

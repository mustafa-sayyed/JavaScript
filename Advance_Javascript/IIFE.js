// IIFE (Immediately Invoked Function Expressions)
// IIFE is a function that runs as soon as it is defined.
// It is used for data privacy and code organization.
// It is also used to avoid polluting the global namespace.
// It can be used only once

// Syntax
// (function() {
//     // body
// })();

(function () {
  console.log("Hello");
})();


// IIFE with parameters
(function (a, b) {
  console.log(a + b);
})(1, 2);


// IIFE with return value
const sum = (function (a, b) {
  return a + b;
})(1, 2);
console.log(sum);


// IIFE with arrow function
(() => {
  console.log("Hello");
})();


// IIFE with async function
(async () => {
  console.log("Hello");
})();


// IIFE with async function with parameters
(async (a, b) => {
  console.log(a + b);
})(1, 2);
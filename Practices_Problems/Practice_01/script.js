let num = prompt("Enter a number: ");
console.log(typeof num);

// if we only want a number then we will parse the input of prompt 
// let num2 = parseInt(num);
// console.log(num2);

let message = num2 % 5 === 0 ? num + " is multiple of 5" : num + " is not multiple of 5";
alert(message)
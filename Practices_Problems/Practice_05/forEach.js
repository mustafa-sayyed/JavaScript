let arr = [2, 4, 6, 8, 12, 14];

arr.forEach((val, index, arr) => {
    console.log(`Value: ${val}, Index: ${index}, Array: ${arr}`);
});


// Calculating Square of numbers in array
let calSquare = (val) => {
    console.log(`The Square of ${val} is: ${val * 2}`);
}
arr.forEach(calSquare);


// Printing City Names of Array
let strArray = ['Pune', 'Delhi', 'Mumbai', 'Kolkata', 'Solapur', 'Banglore'];
strArray.forEach((city) => {
    console.log(`City: ${city}`);
});
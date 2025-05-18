let data = [
    {
        state: "karnatka",
        city: "Banglore"
    },
    {
        state: "Maharashtra",
        city: "Pune"
    },
    {
        state: "Delhi",
        city: "Delhi"
    },
    {
        state: "Maharashtra",
        city: "Solapur"
    },
    {
        state: "West Bengal",
        city: "Kolkata"
    }
]


let states = data.map((item) => " " + item.state);
let cities = data.map((item) => " " + item.city);

console.log(`States:${states}`);
console.log(`Cities:${cities}`);


let arr = [12, 34, 10, 3, 24, 7, 99, 56];

let evenArr = arr.filter((val) => {
    return val % 2 === 0;
})

let maxNumber = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
})

let sumElements = arr.reduce((prev, curr) => prev + curr)


console.log(`The Sum of Array elements is: ${sumElements}`);
console.log('Max Number: ' + maxNumber);
console.log("Even Array: ", evenArr);
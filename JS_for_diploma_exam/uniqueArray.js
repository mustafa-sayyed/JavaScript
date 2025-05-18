const arr = ["one", "two", "three", "four", "one", "two", "five", "one"];
const uarr = [];
for (let i = 0; i < arr.length; i++) {
  if (!uarr.includes(arr[i])) {
    uarr.push(arr[i]);
  }
}

// for (let i = 0; i < arr.length; i++) {
//     if (uarr.indexOf(arr[i]) === -1) {
//         uarr.push(arr[i]);
//     }
// }

// console.log(uarr);

// ******************************************************************************************************** //

const arr1 = [1, 2, 4, 5, 6, 1];
const arr2 = [2, 5, 3, 7, 8, 9];

const arr3 = arr1.concat(arr2);
const resultArray = [];

for (let i = 0; i < arr3.length; i++) {
  if (!resultArray.includes(arr3[i])) {
    resultArray.push(arr3[i]);
  }
}

console.log(resultArray)

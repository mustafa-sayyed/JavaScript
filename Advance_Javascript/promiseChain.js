// let asyncFunc1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data 1");
//       resolve("Success");
//     }, 3000);
//   });
// };

// let asyncFunc2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data 2");
//       resolve("Success");
//     }, 3000);
//   });
// };

// console.log("Fetching Data1");
// asyncFunc1(123).then(() => {
//   console.log("Fetching Data2");
//   asyncFunc2(456).then(() => {});
// });


// Using Promise Chains
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve("Success");
    }, 2000);
  });
}



getData(1)
  .then(() => {
    return getData(2);
  })
  .then(() => {
    return getData(3);
  })
  .then(() => {
    console.log("Done");
  });


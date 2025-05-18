// Promis are objects in JS that represent the eventual completion or failure of an asynchronous operation.

// let promise = new Promise((resolve, reject) => {
//     console.log("Success");
//     resolve("Success");
// })
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      reject("Error Occured")
      // resolve("Success");
    }, 4000);
  });
}

let promise = getData(123);
promise.then((res) => {
  console.log(res);
});

promise.catch((err) => {
  console.log(err);
})


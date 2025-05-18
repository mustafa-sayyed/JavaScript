// async - It is used to define asynchronous functions.
// await - It is used to wait for a Promise to resolve or reject.

// Async function syntax
// async function name(parameters) {
//     // body
// }

// Await expression syntax
// const result = await promise;

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve("Success");
    }, 2000);
  });
}

fetchAllData = async () => {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
  await getData(5).then((res) => console.log(res));
  console.log("Done");
};
fetchAllData();

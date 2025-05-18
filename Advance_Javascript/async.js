// let n = 1;
// function hello() {
//     console.log(`Hello ${n}`);
//     n++;
// }

// // setTimeout(hello, 2000);
// setInterval(hello, 1000);
// console.log("This wil print first even it is written in last");

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve("Success");
    }, 2000);
  });
}

// Using Callbacks

getData(10, () => {
  getData(20, () => {
    getData(30, () => {
      getData(40);
    });
  });
});

// Using Promise Chains

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

// Using Async Await
(async () => {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
  await getData(5).then((res) => console.log(res));
  console.log("Done");
})();

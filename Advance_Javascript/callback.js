// A Callback is a function passed as a argument to another funtion

// function sum(a, b) {
//     console.log(`The Sum is ${a + b}`);
// }

// function calculator(a, b, sumfunction) {
//     sumfunction(a, b);
// }

// calculator(7, 3, sum)


// Using Callbacks

function getData(dataId, getNextData) {
    setTimeout(() => {
    console.log("Data", dataId);
    // resolve("Success");
    if (getNextData) getNextData();
    }, 2000);
}

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});

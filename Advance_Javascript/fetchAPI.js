// Using Async Await
const getFact = async () => {
    console.log("Getting Data from API.......");
    let response = await fetch("https://cat-fact.herokuapp.com/facts") || "some";
    console.log(response);
    let data = await response.json();
    console.log(data);
    console.log("Getting jokes from API...........");
    
    data.forEach((item) => {
        console.log(item.text);
    })

}

getFact()

// Using Promise Chains
function getFacts() {
  return fetch("https://cat-fact.herokuapp.com/facts/");
}

// getFacts()
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.map((item) => console.log(item.text));
//   });

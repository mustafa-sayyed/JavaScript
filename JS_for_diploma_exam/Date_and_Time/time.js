let timebox = document.querySelector("#time");

window.addEventListener("load", () => {
    start();
    console.log("Website loaded")
})

let start = () => {
timeInterval = setInterval(() => {
  const myDate = new Date();
  const hours = Math.floor(myDate.getHours());
  const minutes = myDate.getMinutes();
  const seconds = myDate.getSeconds();
  const time = hours + ":" + minutes + ":" + seconds;
  timebox.innerHTML = time;
  console.log(time);
}, 1000);
}

let stop = () => {
    clearInterval(timeInterval)
}


let mustafa = {
    name: 'Mustafa',
    sirName: 'Sayyed',
    rollno: 234,
    branch: "computer engineering"
}

console.log(Object.keys(mustafa))